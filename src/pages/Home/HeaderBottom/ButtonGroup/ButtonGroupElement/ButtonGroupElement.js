import './button-group-element.scss'

const ButtonGroupElement = ({firstText, secondText, svgIcon}) => {
    const element = document.createElement('button')
    element.className = 'buttonGroupElement'
    element.setAttribute('type', 'submit')
    const svg = document.createElement('img')
    svg.setAttribute('class', 'svg')
    svg.setAttribute('src', svgIcon)
    svg.setAttribute('alt', "Not Found")

    const buttonTitle = document.createElement('div')
    buttonTitle.className = 'buttonTitle'
    const buttonTitleHeader = document.createElement('span')
    buttonTitleHeader.textContent = firstText

    const buttonTitleHeader1 = document.createElement('span')
    buttonTitleHeader1.textContent = secondText

    buttonTitle.appendChild(buttonTitleHeader)
    buttonTitle.appendChild(buttonTitleHeader1)

    element.appendChild(svg)
    element.appendChild(buttonTitle)
    return element
}

export default ButtonGroupElement