import { ROUTES } from './data/routes.js';
import './global/global.scss'
import Layout from './Layout/Layout.js'

const app = document.getElementById('root');
function router() {
    const hash = window.location.hash || '#/';
    const route = hash.slice(1);
    if(!!document.querySelector('.layout')){
        app.removeChild(document.querySelector('.layout'))  
    }
    app.appendChild(Layout(ROUTES[route]))
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);