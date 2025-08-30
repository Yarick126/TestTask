import './job-description-item-style.scss'
import Image from '../../../../components/ui/Image/Image'
import ItemDescription from './ItemDescription/ItemDescription'
import RightSideImage from '../../../../assets/secondItemBlur.png'
const JobDescriptionItem = ({itemImage, isRightSide, text, header}) => {
    const JobDescriptionItemElement = document.createElement('div')
    JobDescriptionItemElement.className = 'jobDescriptionItem'

    const ItemImage = Image({src:itemImage, className: 'itemImage'})
    const blurItem = document.createElement('div')
    isRightSide? 
        blurItem.className = 'blurItemOnTheLeft':
        blurItem.className = 'blurItemOnTheRight'
    if(isRightSide){
        JobDescriptionItemElement.appendChild(blurItem)
        JobDescriptionItemElement.appendChild(ItemImage)
        JobDescriptionItemElement.appendChild(ItemDescription({text: text, header: header, isRightSide: isRightSide}))
    }
    else {
        const image = Image({src: RightSideImage,className: 'rightSideImage'})
        blurItem.appendChild(image)
        JobDescriptionItemElement.appendChild(ItemDescription({text: text, header: header, isRightSide: isRightSide}))
        JobDescriptionItemElement.appendChild(blurItem)
        JobDescriptionItemElement.appendChild(ItemImage)
    }
    
    return JobDescriptionItemElement
}

export default JobDescriptionItem