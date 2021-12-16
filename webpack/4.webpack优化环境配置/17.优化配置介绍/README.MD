<!--
 * @Author: your name
 * @Date: 2021-12-15 10:39:13
 * @LastEditTime: 2021-12-16 09:35:47
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\webpack\4.webpack优化环境配置\17.优化配置介绍\README.MD
-->

# webpack 性能优化

- 开发环境性能优化
- 生产环境性能优化

## 开发环境性能优化

- 优化打包构建速度
  - HMR
- 优化代码调试
  - source-map

## 生产环境性能优化

- 优化打包构建速度
  - oneOf
  - babel 缓存
  - 多进程打包
  - externals
  - dll
- 优化代码运行的性能
  - 缓存(hash-chunkhash-contenthash)
  - tree shaking
  - code split
  - 懒加载/预加载
  - pwa

cross-env 包专门解决 window 插入环境变量 process.env 中的包
