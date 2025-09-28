import './our-partners-slider-style.scss'
import Slider from 'UI/Slider/Slider'
import SliderItem from './SliderItem/SliderItem'

import Title from '../../../components/ui/Title/Title.js'
import { PARTNER_ITEMS } from '../../../data/partnerItems.js'

const OurPartnersSlider = ({header}) => {
    const OurPartnersSliderComponent = document.createElement('div')
    OurPartnersSliderComponent.className = 'ourPartnersSlider'
    const slidesArray = []
    OurPartnersSliderComponent.appendChild(Title({header: header, color: '#dcdcdc', lineWidth: '600px'}))

    for (let i = 0; i < PARTNER_ITEMS.length; i++) {
        slidesArray.push(SliderItem({id: PARTNER_ITEMS[i].id, text: PARTNER_ITEMS[i].text, image: PARTNER_ITEMS[i].imgSrc}))
        
    }

    OurPartnersSliderComponent.appendChild(Slider({items: slidesArray, className: 'ourPartner'}))
    return OurPartnersSliderComponent
}

export default OurPartnersSlider