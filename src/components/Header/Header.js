import CallBackForm from './CallBackForm/CallBackForm'
import './header-style.scss'
import HeaderTop from './HeaderTop/HeaderTop'

const Header = () => {

    const HeaderComponent = document.createElement('header')
    HeaderComponent.appendChild(CallBackForm())
    HeaderComponent.appendChild(HeaderTop())
    
    return HeaderComponent
}

export default Header