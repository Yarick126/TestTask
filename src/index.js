import './global/global.scss'
import Layout from './Layout/Layout.js'
import Home from './pages/Home/Home.js'
const app = document.querySelector('#root')
app.appendChild(Layout(Home()))
