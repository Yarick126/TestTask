import './price-input-style.scss'

const PriceInput = ({text}) => {
    const PriceInputComponent = document.createElement('div')
    PriceInputComponent.className = 'priceInput'
    const priceInputText = document.createElement('label')
    priceInputText.setAttribute('for', text == 'от'? 'from':'too')
    priceInputText.textContent = text
    const Input = document.createElement('input')
    Input.setAttribute('type', 'text')
    Input.disabled = false
    Input.id = text == 'от'? 'from':'too'
    PriceInputComponent.appendChild(priceInputText)
    PriceInputComponent.appendChild(Input)


    return PriceInputComponent
}

export default PriceInput