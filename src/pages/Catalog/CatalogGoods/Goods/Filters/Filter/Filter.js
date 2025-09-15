import CheckBoxField from './CheckBoxField/CheckBoxField'
import './filter-style.scss'
let j = 0;
const Filter = ({text, checkBoxArray}) => {
    const FilterComponent = document.createElement('div')
    FilterComponent.className = 'filter'
    const line = document.createElement('hr')

    const FilterHeader = document.createElement('span')
    FilterHeader.className = 'filterHeader'
    FilterHeader.textContent = text
    
    const filterFields = document.createElement('div')
    filterFields.className = 'filterFields'
    if(!!checkBoxArray.length){
        for (let i = 0; i < checkBoxArray.length; i++) {
            filterFields.appendChild(CheckBoxField({text: checkBoxArray[i], inputId: j}))
            j++;
        }
    }

    FilterComponent.appendChild(line)
    FilterComponent.appendChild(FilterHeader)
    FilterComponent.appendChild(filterFields)
    return FilterComponent
}

export default Filter