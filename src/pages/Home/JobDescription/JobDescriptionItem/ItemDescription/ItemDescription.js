import './item-description-style.scss'
const ItemDescription = ({header, text, isRightSide}) => {

    const ItemDescriptionComponent = document.createElement('div')

    ItemDescriptionComponent.className = 'itemDescription'
    isRightSide? 
        ItemDescriptionComponent.className += ' Right':
        ItemDescriptionComponent.className += ' Left'
    
    const textContainer = document.createElement('div')
    textContainer.className = 'textContainer'


    const ItemDescriptionComponentHeader = document.createElement('h3')
    ItemDescriptionComponentHeader.textContent = header


    const ItemDescriptionComponentText = document.createElement('p')
    ItemDescriptionComponentText.textContent = text

    isRightSide? 
        ItemDescriptionComponentHeader.className = 'greenHeaderItemDescription' :
        ItemDescriptionComponentHeader.className = 'brownHeaderItemDescription'

    textContainer.appendChild(ItemDescriptionComponentText)
    ItemDescriptionComponent.appendChild(ItemDescriptionComponentHeader)
    ItemDescriptionComponent.appendChild(textContainer)

    return ItemDescriptionComponent
}

export default ItemDescription