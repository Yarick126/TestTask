import './field-style.scss'
import Image from '../../../ui/Image/Image'
import Input from '../../../ui/Input/Input'

const Field = ({text, icon, index}) => {
    const FieldComponent = document.createElement('div')
    FieldComponent.className = 'field'
    FieldComponent.appendChild(Image({src: icon, className: 'fieldIcon'}))
    FieldComponent.appendChild(Input({text: text, type: 'text', className: 'inputField', index: index}))
    return FieldComponent
}

export default Field