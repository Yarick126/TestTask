import './job-description-style.scss'
import JobDescriptionItem from './JobDescriptionItem/JobDescriptionItem'
import ImageFirstItem from '../../../assets/slide1.png'
import ImageSecondItem from '../../../assets/Контрастность 1.png'
import ImageThirdItem from '../../../assets/slide3.png'
import { FIRST_JOB_DESCRIPTION_ITEM, SECOND_JOB_DESCRIPTION_ITEM, THIRD_JOB_DESCRIPTION_ITEM } from '../../../data/constants'

const JobDescription = () => {
    const JobDescriptionComponent = document.createElement('div')
    JobDescriptionComponent.className = 'jobDescription'
    JobDescriptionComponent.appendChild(JobDescriptionItem({itemImage: ImageFirstItem, isRightSide:true, text: FIRST_JOB_DESCRIPTION_ITEM, header: 'обсада'}))
    JobDescriptionComponent.appendChild(JobDescriptionItem({itemImage: ImageSecondItem, isRightSide:false, text: SECOND_JOB_DESCRIPTION_ITEM, header: 'окна'}))
    JobDescriptionComponent.appendChild(JobDescriptionItem({itemImage: ImageThirdItem, isRightSide:true, text: THIRD_JOB_DESCRIPTION_ITEM, header:'покраска'}))
    return JobDescriptionComponent
}
export default JobDescription