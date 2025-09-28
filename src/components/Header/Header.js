import './header-style.scss'
import HeaderTop from './HeaderTop/HeaderTop'

const Header = () => {

    const HeaderComponent = document.createElement('header')
    HeaderComponent.appendChild(HeaderTop())
    
    return HeaderComponent
}

export default Header