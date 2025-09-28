import './header-center-style.scss'
import BackgroundHeaderCenter from 'Assets/1642285005_44-bigfoto-name-p-krasivie-doma-iz-dereva-proekti-78.png'
import Image from 'UI/Image/Image.js'

const HeaderCenter = () => {
    const HeaderCenterComponent = document.createElement('div')
    HeaderCenterComponent.className = 'headerCenter'
    const image = Image({src: BackgroundHeaderCenter, className: 'imageHeaderCenter'})
    
    const HeaderCenterTextBlock = document.createElement('div')
    HeaderCenterTextBlock.className ='headerCenterTextBlock'
    const firstHeaderBackground = document.createElement('div')
    firstHeaderBackground.className = 'firstHeaderBackground'
    const headerCenterSpan = document.createElement('span')
    headerCenterSpan.textContent = 'ОБСАДА, ОКНА, ДВЕРИ, НАЛИЧНИКИ'
    firstHeaderBackground.appendChild(headerCenterSpan)
    const headerCenterH1 = document.createElement('h1')
    headerCenterH1.textContent = `КОМПЛЕКСНОЕ ОСТЕКЛЕНИЕ ДЕРЕВЯННЫХ ДОМОВ`
    HeaderCenterTextBlock.appendChild(firstHeaderBackground)
    HeaderCenterTextBlock.appendChild(headerCenterH1)

    HeaderCenterComponent.appendChild(image)
    HeaderCenterComponent.appendChild(HeaderCenterTextBlock)
    return HeaderCenterComponent
}

export default HeaderCenter