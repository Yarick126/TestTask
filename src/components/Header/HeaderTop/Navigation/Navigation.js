import Button from 'UI/Button/Button'
import Image from 'UI/Image/Image'
import './navigation-style.scss'
import NavigationGroup from './NavigationGroup/NavigationGroup'
import Logo from 'Assets/logo.png'
import DropDown from 'UI/DropDown/DropDown'
import Link from '../../../ui/Link/Link'

const Navigation = () => {
    const Nav = document.createElement('nav')

    Nav.appendChild(NavigationGroup([
        DropDown({options: 
            [
                Button({text: 'СВИДЕТЕЛЬСТВО'}),
                Button({text: 'сертификаты'}),
                Button({text: 'партнеры'}),
                Button({text: 'гарантии'}),
                Button({text: 'новости'}),
                Button({text: 'вакансии'})] , 
                className: 'navDropDown'}),
        Link({text:'ПРОДУКЦИЯ', href: '#/catalog'}),
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