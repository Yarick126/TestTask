import './catalog-goods-style.scss'
import CatalogGoodsHeader from './CatalogHeader/CatalogHeader'
import Goods from './Goods/Goods'
import Image from 'UI/Image/Image.js'
import BackGround from 'Assets/black-and-white-pattern-ttwpaopov13p8u8m.png'

const CatalogGoods = () => {
    const CatalogGoodsComponent = document.createElement('div')
    CatalogGoodsComponent.className = 'catalogGoods'
    const BackgroundImage = document.createElement('div')
    BackgroundImage.className = 'background'
    CatalogGoodsComponent.appendChild(BackgroundImage)
    CatalogGoodsComponent.appendChild(CatalogGoodsHeader())
    CatalogGoodsComponent.appendChild(Goods())
    return CatalogGoodsComponent
}   

export default CatalogGoods