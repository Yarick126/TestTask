import './button-style.scss'

const Button = ({text, className, onClick}) => {

    const ButtonComponent = document.createElement('button')

    ButtonComponent.textContent = text
    ButtonComponent.className = className
    ButtonComponent.addEventListener('onclick', onClick)

    return ButtonComponent
}

export default Button