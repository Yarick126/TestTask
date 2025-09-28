import Header from "../components/Header/Header.js"
import Footer from "../components/Footer/Footer.js"
import CallBackForm from '../components/Header/CallBackForm/CallBackForm'
import './layout-style.scss'

const Layout = (children) => {

    const LayoutBlock = document.createElement('div')

    LayoutBlock.className = 'layout'
    LayoutBlock.appendChild(CallBackForm())
    LayoutBlock.appendChild(Header())
    LayoutBlock.appendChild(children)
    LayoutBlock.appendChild(Footer())

    return LayoutBlock
}

export default Layout
