### 好看的颜色网站

https://flatuicolors.com/

> 生成树状目录结构：tree /f > txt.txt

```
│  App.vue
│  main.ts
│  shims-vue.d.ts
│
├─assets
│  │  logo.png
│  │
│  └─css
│          element-variables.scss
│          global.scss
│
├─components
│      Base.vue
│      Buttom.vue
│      LoginS.vue
│      Main.vue
│      News.vue
│      News2.vue
│      NotFound.vue
│      Top.vue
│
├─router
│      index.ts
│
├─store
│      index.ts
│
└─views
        About.vue
        Dynamic.vue
        Echarts.vue
        ElementUiPlus.vue
        Home.vue
        Login.vue
        Request.vue
        Transition.vue
        User.vue

```

'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'perf', 'chore'],

"lint-staged": {
"src/**/\*.less": "stylelint --syntax less",
"src/**/\_.{js,jsx,ts,tsx}": "npm run lint-staged:js",
"\*\*/\*.{jsx,tsx,ts,md,json}": [
"prettier --write"
]
}

"lint-staged:js": "eslint --ext .js,.jsx,.ts,.tsx ",
"lint:fix": "eslint --fix --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src && npm run lint:style",
"lint:js": "eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src",
"lint:prettier": "prettier --check \"src/\*\*/_\" --end-of-line auto",
"lint:style": "stylelint --fix \"src/\*\*/_.less\" --syntax less",
"precommit": "lint-staged",
"prepare": "husky install",
"postinstall": "husky install",
"prettier": "prettier -c --write \"src/\*_/_\""
