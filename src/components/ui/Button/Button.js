import './button-style.scss'

const Button = ({text , className, onClick , title = ''}) => {

    const ButtonComponent = document.createElement('button')
    ButtonComponent.textContent = text ?? text
    ButtonComponent.className = className ?? className
    ButtonComponent.addEventListener('click', onClick)
    ButtonComponent.setAttribute('title' , title)
    return ButtonComponent
}

export default Button