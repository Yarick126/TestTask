import './title-style.scss'
const Title = ({header, color, lineWidth}) => {
    const TitleComponent = document.createElement('div')
    TitleComponent.className = 'title'
    TitleComponent.style.width = lineWidth
    const titleText = document.createElement('h2')
    titleText.textContent = header
    const line = document.createElement('hr')
    line.setAttribute('color', color)
    line.setAttribute('width', lineWidth)
    TitleComponent.appendChild(line)
    TitleComponent.appendChild(titleText)
    return TitleComponent
}

export default Title