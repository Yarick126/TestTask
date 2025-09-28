import './button-group-style.scss'
import ButtonGroupElement from './ButtonGroupElement/ButtonGroupElement'
import FirstSvg from 'Assets/svg.svg'
import SecondSvg from 'Assets/svg3.svg'
import ThirdSvg from 'Assets/svg2.svg'

const ButtonGroup = () => {

    const ButtonGroupComponent = document.createElement('div')
    ButtonGroupComponent.className = 'buttonGroup'
    ButtonGroupComponent.appendChild(ButtonGroupElement({
        firstText: 'РАССЧИТАТЬ ОБСАДУ',
        secondText: 'ОТ РАЗМЕРА ОКОН',
        svgIcon: FirstSvg}))
    ButtonGroupComponent.appendChild(ButtonGroupElement({
        firstText: 'РАССЧИТАТЬ ОБСАДУ',
        secondText: 'ОТ РАЗМЕРА ПРОЕМОВ',
        svgIcon: SecondSvg}))

    ButtonGroupComponent.appendChild(ButtonGroupElement({
        firstText: 'РАССЧИТАТЬ ОБСАДУ',
        secondText: 'ПО ТОЧНЫМ РАЗМЕРАМ',
        svgIcon: ThirdSvg}))


    return ButtonGroupComponent
}

export default ButtonGroup