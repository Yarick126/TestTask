import './graphic-info-style.scss'

const GraphicInfo = () => {
    const GraphicInfoComponent = document.createElement('div')
    GraphicInfoComponent.className = 'graphicInfo'
    const firstLine = document.createElement('span')
    const secondLine = document.createElement('span')

    firstLine.textContent = 'Пн-Пт: с 10:00 до 18:00'
    secondLine.textContent = 'Сб-Вс: Дежурный режим'
    GraphicInfoComponent.appendChild(firstLine)
    GraphicInfoComponent.appendChild(secondLine)

    return GraphicInfoComponent
}

export default GraphicInfo