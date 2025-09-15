import './button-group-style.scss'
import ButtonGroupElement from './ButtonGroupElement/ButtonGroupElement'
import FirstButtonIcon from '../../../../assets/firstButton.png'
import SecondButtonIcon from '../../../../assets/second.png'
import ThirdButtonIcon from '../../../../assets/third.png'

const ButtonGroup = () => {

    const ButtonGroupComponent = document.createElement('div')
    ButtonGroupComponent.className = 'buttonGroup'
    ButtonGroupComponent.appendChild(ButtonGroupElement({
        firstText: 'РАССЧИТАТЬ ОБСАДУ',
        secondText: 'ОТ РАЗМЕРА ОКОН',
        buttonIcon: FirstButtonIcon}))
    ButtonGroupComponent.appendChild(ButtonGroupElement({
        firstText: 'РАССЧИТАТЬ ОБСАДУ',
        secondText: 'ОТ РАЗМЕРА ПРОЕМОВ',
        buttonIcon: SecondButtonIcon}))

    ButtonGroupComponent.appendChild(ButtonGroupElement({
        firstText: 'РАССЧИТАТЬ ОБСАДУ',
        secondText: 'ПО ТОЧНЫМ РАЗМЕРАМ',
        buttonIcon: ThirdButtonIcon}))


    return ButtonGroupComponent
}

export default ButtonGroup