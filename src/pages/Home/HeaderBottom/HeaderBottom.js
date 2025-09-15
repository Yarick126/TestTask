import ButtonGroup from "./ButtonGroup/ButtonGroup"
import './header-bootom-style.scss'

const HeaderBottom = () => {

    const HeaderBottomComponent = document.createElement('div')

    HeaderBottomComponent.className = 'headerBottom'

    HeaderBottomComponent.appendChild(ButtonGroup())

    return HeaderBottomComponent
}

export default HeaderBottom