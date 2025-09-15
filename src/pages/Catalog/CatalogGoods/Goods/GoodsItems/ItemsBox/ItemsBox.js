import { ITEMS } from '../../../../../../data/items'
import Item from './Item/Item'
import './items-box-style.scss'
const ItemsBox = () => {
    const ItemsBoxComponent = document.createElement('div')
    ItemsBoxComponent.className = 'itemsBox'

    for (let i = 0; i < ITEMS.length; i++) {
        ItemsBoxComponent.appendChild(Item(
            {
                imgSrc: ITEMS[i]?.imgSrc, 
                descriptionText: ITEMS[i]?.description, 
                price: ITEMS[i].price, 
                isHit: ITEMS[i]?.isHit
            }))
    }

    return ItemsBoxComponent
}

export default ItemsBox