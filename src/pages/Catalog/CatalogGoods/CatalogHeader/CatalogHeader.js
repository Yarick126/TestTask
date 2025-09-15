import Link from 'UI/Link/Link.js'
import './catalog-header-style.scss'
const CatalogGoodsHeader = () => {
    const CatalogGoodsHeaderComponent = document.createElement('div')
    CatalogGoodsHeaderComponent.className = 'catalogGoodsHeader'

    const Links = document.createElement('div')
    Links.className = 'links'
    Links.appendChild(Link({text: 'Главная', href: '#/'}))
    Links.appendChild(Link({text: 'Каталог', href: '#/catalog'}))
    
    const HeaderAndLine = document.createElement('div')
    HeaderAndLine.className = 'headerAndLine'
    const Header = document.createElement('h2')
    Header.textContent = 'КАТАЛОГ'
    const Line = document.createElement('hr')
    Line.setAttribute('width', '90px')
    Line.setAttribute('color', 'gray')
    HeaderAndLine.appendChild(Header)
    HeaderAndLine.appendChild(Line)

    CatalogGoodsHeaderComponent.appendChild(Links)
    CatalogGoodsHeaderComponent.appendChild(HeaderAndLine)

    return CatalogGoodsHeaderComponent
}

export default CatalogGoodsHeader