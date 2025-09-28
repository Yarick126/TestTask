import './call-back-form-style.scss'
import Field from './Filed/Field'
import FIOIcon from 'Assets/fioSVG.svg';
import PhoneIcon from 'Assets/phoneSVG.svg'
import Image from 'UI/Image/Image';
import ExitIcon from 'Assets/exitIcon.png'
import Title from '../../ui/Title/Title';

const CallBackForm = () => {
    const CallBackFormComponent = document.createElement('form')
    CallBackFormComponent.className = 'callBackForm'
    const exitSection = document.createElement('div')
    exitSection.className = 'exitSection'
    const exitIcon = Image({src:ExitIcon, className: 'exitIcon'})
    exitIcon.addEventListener('click', ()=>{
        setTimeout(()=>{
            CallBackFormComponent.style.display = 'none'
        },200)
    })
    exitSection.appendChild(exitIcon)


    const FIOField = Field({text: 'Ваши Фио', icon: FIOIcon, className: 'Name', index: 1})
    const PhoneField = Field({text: 'Телефон', icon: PhoneIcon, className: 'Phone' , index: 2})

    const AgreementComponent = document.createElement('div')
    AgreementComponent.className = 'agreementComponent'

    const radioButton = document.createElement('input')
    radioButton.className = 'agreementCheckBox'
    radioButton.setAttribute('type', 'checkbox')
    radioButton.setAttribute('id', 'agreementBox')
    const AgreementText = document.createElement('label')
    AgreementText.setAttribute('for', 'agreementBox')
    AgreementText.textContent = 'Принимаю политику конфиденциальности'

    AgreementComponent.appendChild(radioButton)
    AgreementComponent.appendChild(AgreementText)

    const CallBackFormButton = document.createElement('input')
    CallBackFormButton.className = 'callBackButton'
    CallBackFormButton.setAttribute('type', 'submit')
    CallBackFormButton.addEventListener('click', (e)=>{e.preventDefault()})
    CallBackFormComponent.appendChild(exitSection)
    CallBackFormComponent.appendChild(Title({header: 'обратный звонок', color: '#8c8c8c', lineWidth: '490px'}))
    CallBackFormComponent.appendChild(FIOField)
    CallBackFormComponent.appendChild(PhoneField)
    CallBackFormComponent.appendChild(AgreementComponent)
    CallBackFormComponent.appendChild(CallBackFormButton)
    return CallBackFormComponent
}

export default CallBackForm