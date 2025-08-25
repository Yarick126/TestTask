import './header-top-style.scss'
import Navigation from './Navigation/Navigation'
import NavigationTop from './NavigationTop/NavigationTop'

const HeaderTop = () => {
    const HeaderTopComponent = document.createElement('div')
    HeaderTopComponent.className = 'headerTopComponent'
    
    HeaderTopComponent.appendChild(NavigationTop())
    HeaderTopComponent.appendChild(Navigation())
    return HeaderTopComponent
}

export default HeaderTop