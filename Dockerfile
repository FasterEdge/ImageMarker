# 多阶段生产镜像: 构建阶段产出静态资源, 运行阶段只做静态预览服务。
FROM node:22-bookworm-slim AS build

# 安装 git（部分 npm 依赖安装时需要）
RUN apt-get update && apt-get -y install git && rm -rf /var/lib/apt/lists/*

WORKDIR /make-sense

# 先复制依赖清单，利用 Docker 层缓存：源码变动后无需重新安装依赖
# npm ci(而非 install): 严格按 lock 文件安装, 构建可复现(install 会漂移)
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# 复制全部源码（.dockerignore 已排除 node_modules/.git/dist 等）
COPY . .
RUN npm run build

FROM node:22-bookworm-slim AS runtime

WORKDIR /make-sense
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY --from=build /make-sense/dist ./dist

# 非 root 运行: 纯前端服务无需 root 特权(node 官方镜像内置 node 用户)
RUN chown -R node:node /make-sense
USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

ENTRYPOINT ["npm", "run", "preview"]
