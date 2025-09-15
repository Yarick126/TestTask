import CompanyDescription from './CompanyDescription/CompanyDescription.js'
import HeaderBottom from './HeaderBottom/HeaderBottom.js'
import HeaderCenter from './HeaderCenter/HeaderCenter.js'
import './home-style.scss'
import JobDescription from './JobDescription/JobDescription.js'
import News from './News/News.js'
import OurPartnersSlider from './OurParthnersSlider/OurPartnersSlider.js'
const Home = () => {
    const HomePage = document.createElement('main')
    HomePage.appendChild(HeaderCenter())
    HomePage.appendChild(HeaderBottom())
    HomePage.appendChild(CompanyDescription())
    HomePage.appendChild(JobDescription())
    HomePage.appendChild(OurPartnersSlider({header: 'наши партнеры'}))
    HomePage.appendChild(News({header: 'новости'}))
    return HomePage
}

export default Home