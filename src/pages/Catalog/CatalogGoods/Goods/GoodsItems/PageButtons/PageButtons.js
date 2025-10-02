import './page-buttons-style.scss'
import Button  from 'UI/Button/Button.js'
import {ITEMS} from '../../../../../../data/items'

//I WANNA KILL MYSELF , THIS COMPONENT GAVE HEADACHE  NGL :(
const PageButtons = () => {
    const PageButtonsComponent = document.createElement('div')
    PageButtonsComponent.className = 'pageButtons'

    let currentPage = 0                         // <----CURRENT PAGE
    let totalPage = Math.ceil(ITEMS.length / 6) // TOTAL PAGES

    const updateButtons = ( current) => {
        PageButtonsComponent.innerHTML = ''
                                                //LEFT ARROW
        let elements = []
        let triple = [current-1, current, current+1]
        const leftArrow = Button({
            className: 'leftArrow', 
            title: 'previous page',
            onClick: ()=>{
                current > 0 && setTimeout(()=>{
                    const itemsBox = document.getElementsByClassName('itemsBox')[0]
                    current-=1
                    const x = itemsBox.style.marginLeft.match(/\d+/g)[0]
                    itemsBox.style.marginLeft = (-x + 1100) + 'px' //WE ARE MOVING THE WHOLE THING!!!)
                    updateButtons(current)
                },100)
            }
        })
        if(current == 0) {                  //DISABLE LEFT ARROW IF ITS 0
            leftArrow.classList.add('disabled')
            leftArrow.disabled = true
        }
        PageButtonsComponent.appendChild(leftArrow)                           //RIGHT ARROW
        const rightArrow = Button({
            className: 'rightArrow', 
            title: 'next page',
            onClick: ()=>{
                current < totalPage-1 && setTimeout(()=>{
                    current+=1
                    const itemsBox = document.getElementsByClassName('itemsBox')[0]
                    const x = itemsBox.style.marginLeft.match(/\d+/g)
                    itemsBox.style.marginLeft = (-x-1100) + 'px' //WE ARE MOVING THE WHOLE THING!!!)
                    updateButtons(current)
                },100)
            }
        })
        if(current == totalPage-1) {        //DISABLE RIGHT ARROW IF ITS TOTALPAGE
            rightArrow.classList.add('disabled')
            rightArrow.disabled = true
        }
        for (let i = 0; i <totalPage; i++) {
                                                //CREATING BUTTONS FOR PAGES
            const button = Button({
                text: i+1, 
                className: `pageButton ${current === i? 'green ': ''}`, 
                onClick: ()=>{
                    setTimeout(()=>{
                        current = i
                        const itemsBox = document.getElementsByClassName('itemsBox')[0]
                        itemsBox.style.marginLeft = (-1100*i) + 'px' //WE ARE MOVING THE WHOLE THING!!!)
                        updateButtons(current)
                    },100)
                },
                title: 'Page Number: ' + (i+1)
            })
            elements.push(button)
            if(i == 0 || i === totalPage-2){
                const dots = document.createElement('div')
                dots.className = 'dots'
                dots.textContent ='...'
            }
        }

        for (let i = 0; i < elements.length; i++) {
            if(elements.length <4){
                elements[i].className += elements[i].className.includes('visible') ? '' : 'visible'
            }
            else {
                if(i==0 || i == elements.length - 1) elements[i].className += 'visible'
                for (let j = 0; j < array.length; j++) {
                    const element = array[j];
                }
            }
            PageButtonsComponent.appendChild(elements[i])
        }
        PageButtonsComponent.appendChild(rightArrow)
    }
    updateButtons(currentPage)

    return PageButtonsComponent
}
export default PageButtons