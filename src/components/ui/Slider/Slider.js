import './slider-style.scss'
import Button from '../Button/Button'
import SlidersItems from './SliderItems/SliderItems'


const Slider = ({items}) => {
    const SliderComponent = document.createElement('div')
    SliderComponent.classList.add('slider')
    
    const SliderButton = Button({text: 'СМОТРЕТЬ ВСЕ', className: 'sliderButton', onClick: ()=>{}})

    SliderComponent.appendChild(SliderButton)
    SliderComponent.appendChild(SlidersItems(items))
    
    return SliderComponent
}
export default Slider