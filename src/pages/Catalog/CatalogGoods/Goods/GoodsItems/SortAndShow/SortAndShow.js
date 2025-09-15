import './sort-and-show-style.scss'
import SortBox from './SortBox/SortBox'

const SortAndShow = () => {
    const SortAndShowComponent = document.createElement('div')
    SortAndShowComponent.className = 'sortAndShow'

    SortAndShowComponent.appendChild(SortBox({isSort: true, labelText: 'СОРТИРОВАТЬ ПО:'}))
    SortAndShowComponent.appendChild(SortBox({isSort: false, labelText: 'ПОКАЗАТЬ:'}))
    return SortAndShowComponent
}

export default SortAndShow