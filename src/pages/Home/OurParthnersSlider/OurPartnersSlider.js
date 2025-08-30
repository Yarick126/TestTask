import './our-partners-slider-style.scss'
import Slider from '../../../components/ui/Slider/Slider'
import SliderItem from './SliderItem/SliderItem'
import {SLIDER_ITEM_TEXT} from '../../../data/constants.js'
import FirstImageSliderItem from '../../../assets/1stSlide.png'
import SecondImageSliderItem from '../../../assets/2ndSlide.png'
import ThirdImageSliderItem from '../../../assets/3rdSlide.png'
import ForthImageSliderItem from '../../../assets/4thSlide.png'

const OurPartnersSlider = ({header}) => {
    const OurPartnersSliderComponent = document.createElement('div')
    OurPartnersSliderComponent.className = 'ourPartnersSlider'
    const SliderHeader = document.createElement('h2')
    SliderHeader.textContent = header


    OurPartnersSliderComponent.appendChild(SliderHeader)
    OurPartnersSliderComponent.appendChild(Slider({items: [
        SliderItem({text: SLIDER_ITEM_TEXT, image: FirstImageSliderItem}),
        SliderItem({text: SLIDER_ITEM_TEXT, image: SecondImageSliderItem}),
        SliderItem({text: SLIDER_ITEM_TEXT, image: ThirdImageSliderItem}),
        SliderItem({text: SLIDER_ITEM_TEXT, image: ForthImageSliderItem}),
        SliderItem({text: SLIDER_ITEM_TEXT, image: FirstImageSliderItem}),
        SliderItem({text: SLIDER_ITEM_TEXT, image: SecondImageSliderItem}),
        SliderItem({text: SLIDER_ITEM_TEXT, image: ThirdImageSliderItem}),
        SliderItem({text: SLIDER_ITEM_TEXT, image: ForthImageSliderItem}),
    ]}))
    return OurPartnersSliderComponent
}

export default OurPartnersSlider