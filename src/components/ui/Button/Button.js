import './button-style.scss'

const Button = ({text , className, onClick , title = '', type = 'submit'}) => {

    const ButtonComponent = document.createElement('button')
    ButtonComponent.textContent = text ?? text
    ButtonComponent.className = className ?? className
    ButtonComponent.addEventListener('click', onClick)
    ButtonComponent.setAttribute('title' , title)
    ButtonComponent.setAttribute('type' , type)
    return ButtonComponent
}

export default Button