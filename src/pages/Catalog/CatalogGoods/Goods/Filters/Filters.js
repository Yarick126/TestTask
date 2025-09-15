import Button from 'UI/Button/Button'
import Filter from './Filter/Filter'
import './filters-style.scss'
import PriceInput from './PriceInput/PriceInput'

const Filters = () => {
    const FiltersComponent = document.createElement('div')
    FiltersComponent.className = 'filters'

    const PriceTitle = document.createElement('span')
    PriceTitle.textContent = 'цена:'
    const PricesBox = document.createElement('div')
    PricesBox.className = 'pricesBox'
    const priceFrom = PriceInput({text: 'от'})
    const priceTo = PriceInput({text: 'до'})
    PricesBox.appendChild(priceFrom)
    PricesBox.appendChild(priceTo)

    const FiltersButtons = document.createElement('div')
    FiltersButtons.className = 'filtersButtons'
    FiltersButtons.appendChild(Button({text: 'ПРИМЕНИТЬ', className: 'acceptButton'}))
    FiltersButtons.appendChild(Button({text: ' ', className: 'removeButton', title: 'Remove Filter'}))

    FiltersComponent.appendChild(PriceTitle)
    FiltersComponent.appendChild(PricesBox)
    FiltersComponent.appendChild(Filter({text: 'вид обсады:', checkBoxArray: ['Т - образная', 'П - образная', 'Черновая', 'Арочная']}))
    FiltersComponent.appendChild(Filter({text: 'для домов:', checkBoxArray: ['Из оцилиндрованного бревна', 'Из рубленного бревна', 'Из бруса']}))
    FiltersComponent.appendChild(Filter({text: 'тип обсады:', checkBoxArray: ['Из массива сосны', 'Клееная обсада']}))
    FiltersComponent.appendChild(FiltersButtons)
    
    return FiltersComponent
}   
export default Filters