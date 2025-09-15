import './checkbox-field-style.scss'

const CheckBoxField = ({text, inputId}) => {
    const CheckBoxFieldComponent = document.createElement('div')
    CheckBoxFieldComponent.className = 'checkBoxField'

    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')
    checkBox.setAttribute('id', inputId)
    const checkBoxText = document.createElement('label')
    checkBoxText.setAttribute('for', inputId)
    checkBoxText.textContent = text

    CheckBoxFieldComponent.appendChild(checkBox)
    CheckBoxFieldComponent.appendChild(checkBoxText)
    return CheckBoxFieldComponent
}

export default CheckBoxField