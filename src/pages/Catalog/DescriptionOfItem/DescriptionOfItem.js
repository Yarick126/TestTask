import './description-of-item-style.scss'
import Description from './Description/Description'
import DescriptionImages from './DescriptionImages/DescriptionImages'

const DescriptionOfItem = () => {
    const DescriptionOfItemComponent = document.createElement('div')
    DescriptionOfItemComponent.className = 'descriptionOfItem'
    DescriptionOfItemComponent.appendChild(Description())
    DescriptionOfItemComponent.appendChild(DescriptionImages())
    
    return DescriptionOfItemComponent
}
export default DescriptionOfItem