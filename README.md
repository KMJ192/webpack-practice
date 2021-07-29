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

### 추가설정내용
###### post css
- css스팩 중 표준화가 나중에 진행된 스팩들을 하위 browser에서도 안전하게 대응할 수 있도록 함.
- ex) flex, grid를 하위 browser에서도 사용할 수 있도록 함.
- autoprefixer 플러그인을 통해 prefix가 필요한 모든 속성을 찾아 추가시킴
- postcss, postcss-loader, autoprefixer 설치
  1. 설치
    + yarn
    ```
    yarn add postcss postcss-loader autoprefixer -D
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