import ContactInfo from './ContactInfo/ContactInfo'
import GraphicInfo from './GraphicInfo/GraphicInfo'
import './navigation-top-style.scss'
import Search from './Search/Search'
import SignIn from './SignIn/SignIn'

const NavigationTop = () => {
    const NavigationTopComponent = document.createElement('div')
    
    NavigationTopComponent.className = 'navigationTopComponent'

    NavigationTopComponent.appendChild(GraphicInfo())
    NavigationTopComponent.appendChild(ContactInfo())
    NavigationTopComponent.appendChild(Search())
    NavigationTopComponent.appendChild(SignIn())
    return NavigationTopComponent
}

export default NavigationTop