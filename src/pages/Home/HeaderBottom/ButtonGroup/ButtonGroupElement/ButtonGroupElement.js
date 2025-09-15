import './button-group-element.scss'
import Image from 'UI/Image/Image'

const ButtonGroupElement = ({firstText, secondText, buttonIcon}) => {
    const element = document.createElement('button')
    element.className = 'buttonGroupElement'
    element.appendChild(Image({src: buttonIcon, className: 'buttonIcon'}))

    const buttonTitle = document.createElement('div')
    buttonTitle.className = 'buttonTitle'
    const buttonTitleHeader = document.createElement('span')
    buttonTitleHeader.textContent = firstText
    const buttonTitleHeader1 = document.createElement('span')
    buttonTitleHeader1.textContent = secondText

    buttonTitle.appendChild(buttonTitleHeader)
    buttonTitle.appendChild(buttonTitleHeader1)

    element.appendChild(buttonTitle)
    return element
}

export default ButtonGroupElement