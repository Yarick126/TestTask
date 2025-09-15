import './description-style.scss'

const Description =() => {
    const DescriptionComponent = document.createElement('div')
    DescriptionComponent.className = 'description'

    const Header = document.createElement('h2')
    Header.textContent = 'ОСОБЕННОСТИ Т-ОБРАЗНОЙ ОБСАДЫ'
    const descriptionText = document.createElement('p')
    descriptionText.textContent = `Вариант Т-образной обсады появился не так давно, инициатором такого способа установки обсадной коробки являются заводы производители "сборных домов"из бруса или бревна. Дело в том, что на производстве проще и экономически выгоднее выбирать паз (выемку) в стенах, нежели формировать шип (выступ).\n\nТехнология Т-образной обсады производиться при помощи специально изготовленного клееного бруса, в зависимости от толщины стен, толщина бруса может варьироваться от 65 мм до 140 мм и шириной от 100 до 500 мм. В стойках обсадной коробки на производстве делается  паз глубиной 1,5-2 см и в него вклеивается брусок 40х50 мм,  выступающий на  30 мм, таким образом в сечении такая деталь обсады имеет форму схожую с буквой " Т ".`
    
    DescriptionComponent.appendChild(Header)
    DescriptionComponent.appendChild(descriptionText)
    return DescriptionComponent
}
export default Description