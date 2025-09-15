import Image from '../../ui/Image/Image'
import './contact-info-group-style.scss'
import SmsIcon from '../../../assets/Фигура 9 копия 4.png'
import TgIcon from '../../../assets/Прямоугольник 550 копия.png'
import VKIcon from '../../../assets/Фигура 513.png'

const ContactInfoGroup = () => {
    const ContactInfoGroupComponent = document.createElement('div')
    ContactInfoGroupComponent.className = 'contactInfoGroup'
    const ContactInfo = document.createElement('div')
    ContactInfo.className = 'contactInfo'
    const number = document.createElement('span')
    number.textContent = '8 (495) 640-24-86'
    const email = document.createElement('span')
    email.textContent = 'mail@evroobsada.ru'

    ContactInfo.appendChild(number)
    ContactInfo.appendChild(email)

    ContactInfoGroupComponent.appendChild(ContactInfo)

    const ContactInfoIconsGroup = document.createElement('div')
    ContactInfoIconsGroup.className = 'contactInfoIconsGroup'

    const smsLink = document.createElement('a')
    const tgLink = document.createElement('a')
    const vkLink = document.createElement('a')
    smsLink.className = 'smsLink'
    vkLink.className = 'vkLink'
    tgLink.className = 'tgLink'
    smsLink.setAttribute('href', '#')
    vkLink.setAttribute('href', '#')
    tgLink.setAttribute('href', '#')
    
    smsLink.appendChild(Image({src: SmsIcon, className: 'smsIcon'}))
    tgLink.appendChild(Image({src: TgIcon, className: 'tgIcon'}))
    vkLink.appendChild(Image({src: VKIcon, className: 'vkIcon'}))
    ContactInfoIconsGroup.appendChild(smsLink)
    ContactInfoIconsGroup.appendChild(tgLink)
    ContactInfoIconsGroup.appendChild(vkLink)

    ContactInfoGroupComponent.appendChild(ContactInfoIconsGroup)
        
    return ContactInfoGroupComponent
}

export default ContactInfoGroup