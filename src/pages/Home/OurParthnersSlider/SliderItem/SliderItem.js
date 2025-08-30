import './slider-item-style.scss'
import Image from '../../../../components/ui/Image/Image'

const SliderItem = ({image, text}) => {
    const SliderItemComponent  = document.createElement('div')
    SliderItemComponent.className = 'sliderItem'

    const SliderItemText = document.createElement('p')
    SliderItemText.textContent = text
    SliderItemText.className = 'sliderItemText'

    const imageDiv = document.createElement('div')
    imageDiv.className = 'imageDiv'
    imageDiv.appendChild(Image({src: image, className: 'sliderImage'}))

    SliderItemComponent.appendChild(imageDiv)
    SliderItemComponent.appendChild(SliderItemText)

    return SliderItemComponent
}

export default SliderItem