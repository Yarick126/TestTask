import Slider from 'UI/Slider/Slider'
import './news-styles.scss'
import NewsItem from './NewsItem/NewsItem'
import FirstSlideImage from 'Assets/Насыщенность 4.png';
import SecondSlideImage from 'Assets/melke-evo-1536x1024.png';
import ThirdSlideImage from 'Assets/g2.png';
import { FIRST_NEWS_SLIDE_TEXT_DESCRIPTION, SECOND_NEWS_SLIDE_TEXT_DESCRIPTION, THIRD_NEWS_SLIDE_TEXT_DESCRIPTION } from '../../../data/constants';
import Title from 'UI/Title/Title';

const News = ({header}) => {
    const NewsComponent = document.createElement('div')
    NewsComponent.className = 'news'
    const slider = Slider({items: [
        NewsItem({image: FirstSlideImage, date: '23 04 2004', header: 'браширование', text: FIRST_NEWS_SLIDE_TEXT_DESCRIPTION}),
        NewsItem({image: SecondSlideImage, date: '12 02 2004', header: 'НОВАЯ ОКОННАЯ СИСТЕМА MELKE', text: SECOND_NEWS_SLIDE_TEXT_DESCRIPTION}),
        NewsItem({image: ThirdSlideImage, date: '12 02 2004', header: 'ПРОИЗВОДСТВО ОБСАДЫ ИЗ СОСНЫ', text: THIRD_NEWS_SLIDE_TEXT_DESCRIPTION}),
        NewsItem({image: FirstSlideImage, date: '23 04 2004', header: 'браширование', text: FIRST_NEWS_SLIDE_TEXT_DESCRIPTION}),
        NewsItem({image: SecondSlideImage, date: '12 02 2004', header: 'НОВАЯ ОКОННАЯ СИСТЕМА MELKE', text: SECOND_NEWS_SLIDE_TEXT_DESCRIPTION}),
        NewsItem({image: ThirdSlideImage, date: '12 02 2004', header: 'ПРОИЗВОДСТВО ОБСАДЫ ИЗ СОСНЫ', text: THIRD_NEWS_SLIDE_TEXT_DESCRIPTION})
    ]})
    const NewsTitle = document.createElement('div')
    NewsTitle.className = 'newsTitle'

    const title = document.createElement('h2')
    title.textContent = header
    const leftLine = document.createElement('hr')
    leftLine.setAttribute('width', '82px')
    leftLine.setAttribute('color', '#d1e4cb')
    const rightLine = document.createElement('hr')
    rightLine.setAttribute('width', '82px')
    rightLine.setAttribute('color', '#d1e4cb')
    NewsTitle.appendChild(leftLine)
    NewsTitle.appendChild(title)
    NewsTitle.appendChild(rightLine)

    NewsComponent.appendChild(NewsTitle)
    NewsComponent.appendChild(slider)
    return NewsComponent
}

export default News