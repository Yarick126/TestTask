import { FIRST_DESCRIPTION_TEXT, SECOND_DESCRIPTION_TEXT } from '../../../../data/constants'
import './description-block-style.scss'

const DescriptionBlock = () => {
    const DescriptionBlockComponent = document.createElement('div')
    DescriptionBlockComponent.className = 'descriptionBlock'

    const firstP = document.createElement('p')
    firstP.textContent = FIRST_DESCRIPTION_TEXT
    const secondP = document.createElement('p')
    secondP.textContent = SECOND_DESCRIPTION_TEXT
    
    DescriptionBlockComponent.appendChild(firstP)
    DescriptionBlockComponent.appendChild(secondP)
    
    return DescriptionBlockComponent
}

export default DescriptionBlock