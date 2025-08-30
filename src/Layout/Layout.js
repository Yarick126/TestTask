import Header from "../components/Header/Header.js"
import Footer from "../components/Footer/Footer.js"
import './layout-style.scss'

const Layout = (children) => {

    const LayoutBlock = document.createElement('div')
    LayoutBlock.className = 'layout'
    LayoutBlock.appendChild(Header())
    LayoutBlock.appendChild(children)
    LayoutBlock.appendChild(Footer())

    return LayoutBlock
}

export default Layout
