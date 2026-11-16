// FasterEdge 开源项目 - Github: https://github.com/FasterEdge - Gitee: https://gitee.com/FasterEdge
import {
  defineConfig,
  loadEnv,
  UserConfig,
  UserConfigExport,
} from 'vite';

import react from '@vitejs/plugin-react';

export default ({ mode }: UserConfig): UserConfigExport => {
  process.env = { ...process.env, ...loadEnv(mode || 'development', process.cwd()) };
  return defineConfig({
    plugins: [react()],
    build: {
      minify: 'terser',
      sourcemap: mode === 'development',
      chunkSizeWarningLimit: 1024 * 1024,
      rollupOptions: {
        treeshake: true,
        output: {
          manualChunks: (id: string) => {
            if (!id.includes('node_modules')) return undefined;
            if (id.includes('@tensorflow-models/')) return 'models';
            if (id.includes('@tensorflow/')) return 'ai';
            if (id.includes('@mui/')) return 'ui';
            if (id.includes('/lodash/')) return 'lodash';
            if (id.includes('/classnames/')) return 'classnames';
            if (id.includes('/react-dom/')) return 'runtime-dom';
            if (id.includes('/react/')) return 'runtime';
            if (id.includes('/moment/')) return 'moment';
            return undefined;
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 项目内多处 @import 'src/...' 依赖根目录解析; vite 6 现代 sass API
          // 使用 loadPaths(dart-sass 术语), includePaths 仅 legacy API 识别。
          loadPaths: [process.cwd()],
        },
      },
      modules: {
        generateScopedName: mode === 'development' ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:8]',
        scopeBehaviour: 'local',
        localsConvention: 'camelCase',
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
  });
};
