import './goods-items-style.scss'
import ItemsBox from './ItemsBox/ItemsBox'
import PageButtons from './PageButtons/PageButtons'
import SortAndShow from './SortAndShow/SortAndShow'

const GoodsItems = () => {
    const GoodsItemsComponent = document.createElement('div')
    GoodsItemsComponent.className = 'goodsItems'


    GoodsItemsComponent.appendChild(SortAndShow())
    GoodsItemsComponent.appendChild(ItemsBox())
    GoodsItemsComponent.appendChild(PageButtons())
    return GoodsItemsComponent
}
export default GoodsItems