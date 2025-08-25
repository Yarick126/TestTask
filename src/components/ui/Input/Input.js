import './input-style.scss'

const Input = ({text, type = 'text'}) => {
    const inputElement = document.createElement('input')
    inputElement.setAttribute('placeholder', text)
    inputElement.setAttribute('type', type)
    return inputElement
}

export default Input