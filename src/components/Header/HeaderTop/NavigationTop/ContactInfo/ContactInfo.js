import './contact-info-style.scss'
import Button from '../../../../ui/Button/Button.js'
const ContactInfo = () => {

    const ContactInfoComponent = document.createElement('div')
    ContactInfoComponent.className = 'contactInfo'

    const number = document.createElement('span')
    number.textContent = '8 (495) 640-24-86'
    
    const callBackButton = Button({text: 'Обратный звонок', className: 'greenButton'})

    ContactInfoComponent.appendChild(number)
    ContactInfoComponent.appendChild(callBackButton)
    return ContactInfoComponent
}

export default ContactInfo