import Image from 'UI/Image/Image'
import './item-style.scss'
const Item = ({imgSrc, descriptionText,price,isHit}) => {
    const ItemComponent = document.createElement('div')
    ItemComponent.className = 'item'

    const imageAndDescriptionBox = document.createElement('div')
    imageAndDescriptionBox.className = 'imageAndDescription'
    const image = Image({src: imgSrc, className: 'itemImage'})
    const description = document.createElement('p')
    description.textContent = descriptionText
    imageAndDescriptionBox.appendChild(image)
    imageAndDescriptionBox.appendChild(description)

    const priceBox = document.createElement('span')
    priceBox.className ='priceBox'
    priceBox.textContent = price

    if(isHit){
        const hit = document.createElement('div')
        hit.className = 'hit'
        hit.textContent = 'ХИТ'
        ItemComponent.appendChild(hit)
    }




    ItemComponent.appendChild(imageAndDescriptionBox)
    ItemComponent.appendChild(priceBox)
    return ItemComponent
}

export default Item