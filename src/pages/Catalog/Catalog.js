import './catalog-style.scss'
import CatalogGoods from './CatalogGoods/CatalogGoods';
import DescriptionOfItem from './DescriptionOfItem/DescriptionOfItem';

const Catalog = () => {
    const CatalogComponent = document.createElement('main')
    CatalogComponent.className = 'catalog'
    const headerBackground = document.createElement('div')
    headerBackground.className = 'headerBackground'
    CatalogComponent.appendChild(headerBackground)
    CatalogComponent.appendChild(CatalogGoods())
    CatalogComponent.appendChild(DescriptionOfItem())
    
    return CatalogComponent
};

export default Catalog;