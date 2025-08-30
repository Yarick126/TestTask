import './slider-items-style.scss'

const SliderItems = (items) => {
    const SliderItemsComponent = document.createElement('div')
    SliderItemsComponent.className = 'sliderItems'

    if(items.length){
        for (let i = 0; i < items.length; i++) {
            SliderItemsComponent.appendChild(items[i])
        }
    }
    return SliderItemsComponent

}

export default SliderItems