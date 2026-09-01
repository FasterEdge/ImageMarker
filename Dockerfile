# node 16 已于 2023-09 EOL，其 Debian buster 基础镜像的 apt 源已移除（404）。
# 升级到 node 22 LTS（维护至 2027-04，基于 Debian bookworm）。
FROM node:22-bookworm-slim

# 安装 git（部分 npm 依赖安装时需要）
RUN apt-get update && apt-get -y install git && rm -rf /var/lib/apt/lists/*

WORKDIR /make-sense

# 先复制依赖清单，利用 Docker 层缓存：源码变动后无需重新安装依赖
COPY package.json package-lock.json ./
RUN npm install

# 复制全部源码（.dockerignore 已排除 node_modules/.git/dist 等）
COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]
