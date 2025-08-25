import './header-center-style.scss'

const HeaderCenter = () => {
    const HeaderCenterComponent = document.createElement('div')
    HeaderCenterComponent.className = 'headerCenter'

    const headerCenterSpan = document.createElement('span')
    headerCenterSpan.textContent = 'ОБСАДА, ОКНА, ДВЕРИ, НАЛИЧНИКИ'

    const headerCenterH1 = document.createElement('h1')
    headerCenterH1.textContent = `КОМПЛЕКСНОЕ ОСТЕКЛЕНИЕ ДЕРЕВЯННЫХ ДОМОВ`

    HeaderCenterComponent.appendChild(headerCenterSpan)
    HeaderCenterComponent.appendChild(headerCenterH1)
    return HeaderCenterComponent
}

export default HeaderCenter