import Button from '../Button/Button'
import './dropdown-style.scss'

const DropDown = ({options, className}) => {
    const DropDownComponent = document.createElement('section')
    DropDownComponent.className = 'dropDown' + ' ' + className

    DropDownComponent.appendChild(Button({text:'О КОМПАНИИ',className: 'dropDownButton'}))
    const DropDownOptions = document.createElement('div')
    DropDownOptions.className = 'dropDownOptions'
    for (let index = 0; index < options.length; index++) {
        DropDownOptions.appendChild(options[index]);
    }

    DropDownComponent.appendChild(DropDownOptions)

    return DropDownComponent
}

export default DropDown