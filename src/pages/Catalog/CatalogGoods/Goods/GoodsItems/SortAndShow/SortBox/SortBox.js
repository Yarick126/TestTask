import Image from 'UI/Image/Image'
import './sort-box-style.scss'
import sortArrow from 'Assets/arrowDown.png'
import showArrow from 'Assets/arrowDown1.png'


const SortBox = ({isSort, labelText}) => {
    const SortBoxComponent = document.createElement('div')
    SortBoxComponent.className = 'sortBox'
    const label = document.createElement('label')
    label.textContent = labelText
    const chooseBox = document.createElement('div')

    if(isSort){
        chooseBox.className = 'sort'
        const text = document.createElement('span')
        text.textContent = 'ЦЕНА'
        const image = Image({src: sortArrow, className: 'sortImage'})

        chooseBox.appendChild(text)
        chooseBox.appendChild(image)
    } else {
        chooseBox.className = 'show'
        const text = document.createElement('span')
        text.textContent = '20'
        const image = Image({src: showArrow, className: 'showImage'})

        chooseBox.appendChild(text)
        chooseBox.appendChild(image)
    }

    SortBoxComponent.appendChild(label)
    SortBoxComponent.appendChild(chooseBox)

    return SortBoxComponent
} 

export default SortBox