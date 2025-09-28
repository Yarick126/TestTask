import './page-buttons-style.scss'
import Button  from 'UI/Button/Button.js'
import {ITEMS} from '../../../../../../data/items'
//I WANNA KILL MYSELF , THIS COMPONENT GAVE HEADACHE  NGL :(
const PageButtons = () => {
    const PageButtonsComponent = document.createElement('div')
    PageButtonsComponent.className = 'pageButtons'

    let currentPage = 0                         // <----CURRENT PAGE
    let totalPage = Math.ceil(ITEMS.length / 6) // TOTAL PAGES
    let buttons = []
    const updateButtons = () => {
        PageButtonsComponent.innerHTML = ''
                                                //LEFT ARROW
        const leftArrow = Button({
            className: 'leftArrow', 
            title: 'previous page',
            onClick: ()=>{
                currentPage > 0 && setTimeout(()=>{
                    const itemsBox = document.getElementsByClassName('itemsBox')[0]
                    currentPage-=1
                    const x = itemsBox.style.marginLeft.match(/\d+/g)[0]
                    itemsBox.style.marginLeft = (-x + 1100) + 'px' //WE ARE MOVING THE WHOLE THING!!!)
                    updateButtons()
                },100)
            }
        })
        if(currentPage == 0) {                  //DISABLE LEFT ARROW IF ITS 0
            leftArrow.classList.add('disabled')
            leftArrow.disabled = true
        }
                                               //RIGHT ARROW
        const rightArrow = Button({
            className: 'rightArrow', 
            title: 'next page',
            onClick: ()=>{
                currentPage < totalPage-1 && setTimeout(()=>{
                    currentPage+=1
                    const itemsBox = document.getElementsByClassName('itemsBox')[0]
                    const x = itemsBox.style.marginLeft.match(/\d+/g)
                    itemsBox.style.marginLeft = (-x-1100) + 'px' //WE ARE MOVING THE WHOLE THING!!!)
                    updateButtons()
                },100)
            }
        })
        if(currentPage == totalPage-1) {        //DISABLE RIGHT ARROW IF ITS TOTALPAGE
            rightArrow.classList.add('disabled')
            rightArrow.disabled = true
        }
        PageButtonsComponent.appendChild(leftArrow)

        for (let i = 0; i <totalPage; i++) {
                                                       //CREATING BUTTONS FOR PAGES
            const button = Button({
                text: i+1, 
                className: `pageButton ${currentPage === i? 'green ': ''}`, 
                onClick: ()=>{
                    setTimeout(()=>{
                        currentPage = i
                        const itemsBox = document.getElementsByClassName('itemsBox')[0]
                        itemsBox.style.marginLeft = (-1100*i) + 'px' //WE ARE MOVING THE WHOLE THING!!!)
                        console.log(triplePage );
                        
                        updateButtons()
                    },100)
                },
                title: 'Page Number: ' + (i+1)
            })
            if(i == 0 || i == totalPage -1 ) button.className += 'visible'  // THE FIRST AND LAST BUTTONS ARE ALWAYS VISIBLE (OFC!)
            PageButtonsComponent.appendChild(button)
            buttons.push(button)
                                                        // ADDING DOTS
            if(totalPage >3){
                const dots = document.createElement('div')
                dots.className = 'dots'
                if(i==totalPage-2){
                    dots.className+=currentPage < totalPage-3? 'visible': ''
                }
                if(i==0){
                    dots.className+=currentPage > 2? 'visible': ''
                }
                dots.textContent ='...'
                PageButtonsComponent.appendChild(dots)
            }
        }
        PageButtonsComponent.appendChild(rightArrow)
    }
    updateButtons()

    return PageButtonsComponent
}
export default PageButtons