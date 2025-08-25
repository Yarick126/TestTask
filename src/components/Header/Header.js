import './header-style.scss'
import HeaderBottom from './HeaderBottom/HeaderBottom'
import HeaderCenter from './HeaderCenter/HeaderCenter'
import HeaderTop from './HeaderTop/HeaderTop'

const Header = () => {

    const HeaderComponent = document.createElement('header')
    HeaderComponent.appendChild(HeaderTop())
    HeaderComponent.appendChild(HeaderCenter())
    HeaderComponent.appendChild(HeaderBottom())
    
    return HeaderComponent
}

export default Header