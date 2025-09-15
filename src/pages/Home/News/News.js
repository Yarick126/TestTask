import Slider from '../../../components/ui/Slider/Slider'
import './news-styles.scss'
import NewsItem from './NewsItem/NewsItem'
import FirstSlideImage from '../../../assets/Насыщенность 4.png';
import SecondSlideImage from '../../../assets/melke-evo-1536x1024.png';
import ThirdSlideImage from '../../../assets/g2.png';
import { FIRST_NEWS_SLIDE_TEXT_DESCRIPTION, SECOND_NEWS_SLIDE_TEXT_DESCRIPTION, THIRD_NEWS_SLIDE_TEXT_DESCRIPTION } from '../../../data/constants';

const News = ({header}) => {
    const NewsComponent = document.createElement('div')
    NewsComponent.className = 'news'
    const slider = Slider({items: [
        NewsItem({image: FirstSlideImage, date: '23 04 2004', header: 'браширование', text: FIRST_NEWS_SLIDE_TEXT_DESCRIPTION}),
        NewsItem({image: SecondSlideImage, date: '12 02 2004', header: 'НОВАЯ ОКОННАЯ СИСТЕМА MELKE', text: SECOND_NEWS_SLIDE_TEXT_DESCRIPTION}),
        NewsItem({image: ThirdSlideImage, date: '12 02 2004', header: 'ПРОИЗВОДСТВО ОБСАДЫ ИЗ СОСНЫ', text: THIRD_NEWS_SLIDE_TEXT_DESCRIPTION})
    ]})
    slider.style.position = 'absolute'
    slider.style.top = '200px'
    slider.style.left = '261px'
    slider.style.zIndex = '10'
    const NewsHeader = document.createElement('h2')
    NewsHeader.textContent = header
    NewsHeader.className = 'newsHeader'

    NewsComponent.appendChild(NewsHeader)
    NewsComponent.appendChild(slider)
    return NewsComponent
}

export default News