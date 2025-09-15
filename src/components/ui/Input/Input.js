import './input-style.scss'

const Input = ({text, type = 'text', className, index = 0}) => {
    const inputElement = document.createElement('input')
    inputElement.className = className
    inputElement.setAttribute('placeholder', text)
    inputElement.setAttribute('type', type)
    inputElement.setAttribute('id', className + index)
    return inputElement
}

export default Input