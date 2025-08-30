import { DESCRIPTION_HEADER_1, DESCRIPTION_HEADER_2 } from '../../../data/constants'
import './company-description-style.scss'
import DescriptionBlock from './DescriptionBlock/DescriptionBlock'

const CompanyDescription = () => {
    const CompanyDescriptionComponent = document.createElement('div')
    CompanyDescriptionComponent.className = 'companyDescription'

    const DescriptionTitleBlock = document.createElement('div')
    DescriptionTitleBlock.className = 'titleDescription'
    const DescriptionTitleBlockHeader = document.createElement('h2')
    const DescriptionTitleBlockHeader1 = document.createElement('h2')

    DescriptionTitleBlockHeader.textContent = DESCRIPTION_HEADER_1
    DescriptionTitleBlockHeader1.textContent = DESCRIPTION_HEADER_2
    
    DescriptionTitleBlock.appendChild(DescriptionTitleBlockHeader)
    DescriptionTitleBlock.appendChild(DescriptionTitleBlockHeader1)

    CompanyDescriptionComponent.appendChild(DescriptionTitleBlock)
    CompanyDescriptionComponent.appendChild(DescriptionBlock())

    return CompanyDescriptionComponent
}
export default CompanyDescription