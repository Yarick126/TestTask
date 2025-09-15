import './footer-style.scss'
import Image from '../ui/Image/Image'
import Logo from '../../assets/logo.png'
import Button from '../../components/ui/Button/Button'
import ContactInfoGroup from './ContactInfoGroup/ContactInfoGroup'

const Footer = () => {

    const FooterComponent = document.createElement('footer')
    const LogoFooter = Image({src:Logo, className: 'footerLogo'})
    

    const ButtonGroup = document.createElement('div')
    ButtonGroup.className = 'buttonGroupFooter'

    ButtonGroup.appendChild(Button({text:'о компании', onClick: ()=>{}}))
    ButtonGroup.appendChild(Button({text:'продукция', onClick: ()=>{}}))
    ButtonGroup.appendChild(Button({text:'наши работы', onClick: ()=>{}}))
    ButtonGroup.appendChild(Button({text:'услуги', onClick: ()=>{}}))
    ButtonGroup.appendChild(Button({text:'производство', onClick: ()=>{}}))
    ButtonGroup.appendChild(Button({text:'сотрудничество', onClick: ()=>{}}))
    ButtonGroup.appendChild(Button({text:'обсада', onClick: ()=>{}}))

    FooterComponent.appendChild(ButtonGroup)
    FooterComponent.appendChild(ContactInfoGroup())
    FooterComponent.appendChild(LogoFooter)
    return FooterComponent
}

export default Footer