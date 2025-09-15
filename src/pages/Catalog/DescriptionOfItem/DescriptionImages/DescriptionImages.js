import './description-images-style.scss'
import Image from 'UI/Image/Image.js'
import firstItemImage from 'Assets/dI1.png'
import secondItemImage from 'Assets/dI2.png'
import thirdItemImage from 'Assets/dI3.png'

const DescriptionImages = () => {
    const DescriptionImagesComponent = document.createElement('div')
    DescriptionImagesComponent.className = 'descriptionImages'

    DescriptionImagesComponent.appendChild(Image({src: firstItemImage, className: 'dImgs'}))
    DescriptionImagesComponent.appendChild(Image({src: secondItemImage, className: 'dImgs'}))
    DescriptionImagesComponent.appendChild(Image({src: thirdItemImage, className: 'dImgs'}))

    return DescriptionImagesComponent
}

export default DescriptionImages