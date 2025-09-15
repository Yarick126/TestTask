import Image from "../../../../components/ui/Image/Image"
import './news-item-style.scss'
const NewsItem = ({image, date, header, text}) => {
    const NewsItem = document.createElement('div')
    NewsItem.className = 'newsItem'

    const imageDiv = document.createElement('div')
    imageDiv.className = 'imageDiv'
    const itemImage = Image({src: image, className: 'newsItemImage'})
    const filter = document.createElement('div')
    filter.className = 'filter'
    filter.textContent = 'подробнее'

    const dateItem = document.createElement('div')
    dateItem.textContent = date
    dateItem.className = 'dateImage'

    imageDiv.appendChild(filter)
    imageDiv.appendChild(dateItem)
    imageDiv.appendChild(itemImage)

    const itemDescription = document.createElement('div')
    itemDescription.className = 'itemDescription'

    const itemHeader = document.createElement('h2')
    itemHeader.className = 'itemHeader'
    itemHeader.textContent = header

    const itemDescriptionText = document.createElement('p')
    itemDescriptionText.className = 'itemDescriptionText'
    itemDescriptionText.textContent = text


    itemDescription.appendChild(itemHeader)
    itemDescription.appendChild(itemDescriptionText)

    NewsItem.appendChild(imageDiv)
    NewsItem.appendChild(itemDescription)
    return NewsItem
}

export default NewsItem