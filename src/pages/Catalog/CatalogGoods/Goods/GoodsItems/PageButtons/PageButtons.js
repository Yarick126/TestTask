import './page-buttons-style.scss'
import Button  from 'UI/Button/Button.js'
import {ITEMS} from '../../../../../../data/items'

const PageButtons = () => {
    const PageButtonsComponent = document.createElement('div')
    PageButtonsComponent.className = 'pageButtons'
    const leftArrow = Button({className: 'leftArrow', title: 'left'})
    const rightArrow = Button({className: 'rightArrow', title: 'right'})

    PageButtonsComponent.appendChild(leftArrow)
    for (let i = 0; i <ITEMS.length / 6; i++) {
        PageButtonsComponent.appendChild(Button({
            text: i+1, 
            className: 'pageButton', 
            onClick: ()=>{
                setTimeout(()=>{
                    const itemsBox = document.getElementsByClassName('itemsBox')[0]
                    itemsBox.style.marginLeft = (-1100*i) + 'px'
                    
                },300)
                
            },
            title: 'Page Number: ' + (i+1)
        }))
    }
    PageButtonsComponent.appendChild(rightArrow)
    return PageButtonsComponent
}
export default PageButtons