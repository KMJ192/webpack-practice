# Webpack 설정 연습 repogitory

### Webpack 기초
설정 내용 : [blog post](https://kmj24.tistory.com/172 "blog link")

### Webpack Caching 설정
설정 내용 : [blog post](https://kmj24.tistory.com/174 "blog link")

### Webpack 코드 최적화 설정
설정 내용 : [blog post](https://kmj24.tistory.com/175 "blog link")

### File-loader 설정
설정 내용 : [blog post](https://kmj24.tistory.com/178 "blog link")

### Url-loader설정
설정 내용 : [blog post](https://kmj24.tistory.com/179 "blog link")

### css module, sass 설정
설정 내용 : [blog post](https://kmj24.tistory.com/180 "blog link")

### Babel 설정


### 추가설정내용
#### post css
- css스팩 중 표준화가 나중에 진행된 스팩들을 하위 browser에서도 안전하게 대응할 수 있도록 함.
- ex) flex, grid를 하위 browser에서도 사용할 수 있도록 함.
- autoprefixer 플러그인을 통해 prefix가 필요한 모든 속성을 찾아 추가시킴 (자동으로 설정되게 하는 플러그인)
- postcss, postcss-loader, autoprefixer 설치
  1. 설치
    ```
  //yarn
  yarn add postcss postcss-loader autoprefixer -D
  //npm
  npm i postcss postcss-loader autoprefixer --save-dev
  ```
  2. postcss.config.js 설정
  ```js
  module.exports = {
    plugins: [
      require('autoprefixer')
    ]
  }
  ```
  3. include postcss.config.js
```js
const postcssLoader = {
  loader: 'postcss-loader',
  options: {
      postcssOptions: {
          config: path.resolve(__dirname, 'postcss.config.js')
      }
  }
}
```
  4. webpack css module에 postcssLoader설정 (sass-loader다음 순서, css-loader이전 순서로 수행하도록 설정)

#### browserslist
- package.json에서 browserslist를 설정할 수 있음
- autoprefix를 사용하므로 추가적인 작업 x
```
"browserslist": [
  "last 2 versions", // 각 브라우저의 최신, 이전버전 지원
  "IE 10",           // internet explore v10 지원
  "Firefox > 20"     // firefox v20이상 지원
]
```

#### stylelint
1. stylelint 설정 플러그인 설치
```
//yarn
yarn add stylelint stylelint-config-standard stylelint-webpack-plugin stylelint-scss -D
//npm
npm i stylelint stylelint-config-standard stylelint-webpack-plugin stylelint-scss --save-dev
```
2. production 모드에서는 필요 없으므로 webpack.dev.config에서 설정한다.
3. .stylelintrc 파일내용 작성
```
{
  "extends": "stylelint-config-standard"
}
```
4. webpack.dev.js에 style-lint-webpack-plugin 추가
```js
const StyleLintPlugin = require('stylelint-webpack-plugin');

const config = {
    mode: 'development',
    ...,
    plugins: [
        new StyleLintPlugin()
    ],
    ...
};
```