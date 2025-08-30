import CompanyDescription from './CompanyDescription/CompanyDescription.js'
import './home-style.scss'
import JobDescription from './JobDescription/JobDescription.js'
import OurPartnersSlider from './OurParthnersSlider/OurPartnersSlider.js'
const Home = () => {
    const HomePage = document.createElement('main')

    HomePage.appendChild(CompanyDescription())
    HomePage.appendChild(JobDescription())
    HomePage.appendChild(OurPartnersSlider({header: 'наши партнеры'}))
    return HomePage
}

export default Home