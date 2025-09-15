import Filters from './Filters/Filters'
import './goods-style.scss'
import GoodsItems from './GoodsItems/GoodsItems'

const Goods = () => {
    const GoodsComponent = document.createElement('div')
    GoodsComponent.className = 'goods'
    GoodsComponent.appendChild(Filters())
    GoodsComponent.appendChild(GoodsItems())
    return GoodsComponent
}

export default Goods