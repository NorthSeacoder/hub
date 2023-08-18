# hub
every useful things in my life

## TODO:
- figma-plugins
- babel-plugin
- vscode-extension
- scripts


## chore:TODO
1. 代码仓命名为 hub
2. 包管理器使用 pnpm,项目内包括 pkgs 包,docs 包,template包,并配置好相应的pnpm-workspace.yaml
3. 公共开发依赖包括以下,并配置好相应的 eslint,prettier,conventional-changelog,commitizen,并支持pnpm cz 是提交命令,pnpm cl 是生成 changelog 命令
    - typescript,lodash,eslint,prettier,commitizen,conventional-changelog,cz-conventional-changelog
4. docs 内是本项目下所有子包的文档,基于vitepress构建
5. pkgs 内是本项目下所有子包,每个子包都是一个独立的 npm 包,每个子包都有自己的测试用例,测试框架使用vitest
6. template 内是本项目下所有子包的模板,每个子包都有自己的模板,模板使用plop构建,目前应该支持 vscode 插件,figma-plugin,babel-plugin 等开发模板
7. 本项目下所有子包都应该有自己的测试用例,README.md,package.json,.gitignore
8. 参考 create-vite 改造 templates