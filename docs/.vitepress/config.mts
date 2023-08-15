import { defineConfig, type DefaultTheme } from 'vitepress'

import fs from 'fs'

import { resolve } from 'path'
// 读取外层 hub 目录下的 package.json 文件
const hubPackageJsonPath = resolve(__dirname, '../../package.json')
const hubPackageJsonContent = fs.readFileSync(hubPackageJsonPath, 'utf-8')
const pkg = JSON.parse(hubPackageJsonContent)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'The Hub',
  description: pkg.description,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/plugins/': { base: '/plugins/', items: sidebarPlugins() },
      '/guides/': { base: '/guides/', items: sidebarGuides() },
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NorthSeacoder/hub' },
    ],
  },
})
function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Plugin',
      link: '/plugins/vscode-franky',
      activeMatch: '/plugins/',
    },
    {
      text: 'Guides',
      link: '/guides/vscode-api',
      activeMatch: '/guides/',
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/NorthSeacoder/hub/blob/main/CHANGELOG.md',
        },
      ],
    },
  ]
}

/* prettier-ignore */
function sidebarPlugins(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Vscode 扩展',
      collapsed: false,
      items: [
        { text: 'Franky', link: 'vscode-franky' },
        { text: 'API', base: '/guides/', link: 'vscode-api' }
      ]
    },
    {
      text: 'Babel',
      collapsed: false,
      items: [
        { text: 'todo', link: 'babel-todo' },
        { text: 'API', base: '/guides/', link: 'babel-api' }
      ]
    },
    {
      text: 'Figma',
      collapsed: false,
      items: [
        { text: 'todo', link: 'figma-todo' },
        { text: 'API', base: '/guides/', link: 'figma-api' }
      ]
    },
    {
      text: 'Chrome',
      collapsed: false,
      items: [
        { text: 'albedo', link: 'chrome-albedo' },
        { text: 'API', base: '/guides/', link: 'chrome-api' }
      ]
    },
    { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
  ]
}
/* prettier-ignore */
function sidebarGuides(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Vscode 扩展',
      collapsed: false,
      items: [
        { text: 'Api', link: 'vscode-api' },
      ]
    },
    {
      text: 'Babel',
      collapsed: false,
      items: [
        { text: 'Api', link: 'babel-api' },
      ]
    },
    {
      text: 'Figma',
      collapsed: false,
      items: [
        { text: 'Api', link: 'figma-api' },
      ]
    },
    {
      text: 'Chrome',
      collapsed: false,
      items: [
        { text: 'Api', link: 'chrome-api' },
      ]
    },
  ]
}
