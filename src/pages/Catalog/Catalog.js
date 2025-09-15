import './catalog-style.scss'
import CatalogGoods from './CatalogGoods/CatalogGoods';
import DescriptionOfItem from './DescriptionOfItem/DescriptionOfItem';

const Catalog = () => {
    const CatalogComponent = document.createElement('main')
    CatalogComponent.className = 'catalog'
    CatalogComponent.appendChild(CatalogGoods())
    CatalogComponent.appendChild(DescriptionOfItem())
    
    return CatalogComponent
};

export default Catalog;