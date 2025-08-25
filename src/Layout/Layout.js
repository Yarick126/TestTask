import Header from "../components/Header/Header.js"
import Footer from "../components/Footer/Footer.js"


const Layout = (children) => {

    const LayoutBlock = document.createElement('div')
    
    LayoutBlock.appendChild(Header())
    LayoutBlock.appendChild(children)
    LayoutBlock.appendChild(Footer())

    return LayoutBlock
}

export default Layout
