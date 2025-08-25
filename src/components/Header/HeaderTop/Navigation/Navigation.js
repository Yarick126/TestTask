import Button from '../../../ui/Button/Button'
import Image from '../../../ui/Image/Image'
import './navigation-style.scss'
import NavigationGroup from './NavigationGroup/NavigationGroup'
import Logo from '../../../../assets/logo.png'

const Navigation = () => {
    const Nav = document.createElement('nav')

    Nav.appendChild(NavigationGroup([
        Button({text:'О КОМПАНИИ'}), 
        Button({text:'ПРОДУКЦИЯ'}),
        Button({text:'СОТРУДНИЧЕСТВО'}),
        Button({text:'УСЛУГИ'})]))
    Nav.appendChild(Image({src: Logo, className: 'logo'}))
    Nav.appendChild(NavigationGroup([
        Button({text:'НАШИ РАБОТЫ'}), 
        Button({text:'ПРОИЗВОДСТВО'}),
        Button({text:'ОБСАДА'}),
        Button({text:'КОНТАКТЫ'})]))

    return Nav
}

export default Navigation