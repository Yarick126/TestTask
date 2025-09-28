import './slider-item-style.scss'
import Image from 'UI/Image/Image'

const SliderItem = ({id, image, text}) => {
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
    SliderItemComponent.setAttribute('id', SliderItemComponent.className+id)

    SliderItemComponent.addEventListener('mouseenter', (e)=>{
        e.preventDefault()
        const item = e.currentTarget
        item.style.position = 'absolute'
        item.style.left = (364*id) + 'px'
        const items = document.getElementsByClassName('sliderItem')
        for (let i = id+1; i < items.length; i++) {
            items[i].style.transform = `translateX(${364}px)`
        }
    })
    SliderItemComponent.addEventListener('mouseleave', (e)=>{
        e.preventDefault()
        const item = e.currentTarget
        item.style.position = 'relative'
        item.style.left = 0+ 'px'
                const items = document.getElementsByClassName('sliderItem')
        for (let i = id+1; i < items.length; i++) {
            items[i].style.transform = `translateX(0px)`
        }
    })
    return SliderItemComponent
}

export default SliderItem