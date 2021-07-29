import 'normalize.css';
import styles from './index.module.scss';
import $ from 'jquery';
import './assets/Messi2.jpg';
import svg from './assets/sample.svg';

function component() {
    const element = document.createElement('div');

    // const imgElement = document.createElement('img');
    // imgElement.src = img1;
    const imgElement = document.createElement('img');
    imgElement.src = svg;
    imgElement.classList = styles.image;

    console.log(styles);
    element.innerHTML = "Hello Webpack";
    element.classList = styles.helloWebpack;
    element.appendChild(imgElement);
    return element;
}

document.body.appendChild(component());

console.log($(`.${styles.helloWebpack}`.length));
console.log(`Is production mode? ${IS_PRODUCTION}`);
//jquery 사용