import ContactInfo from './ContactInfo/ContactInfo'
import GraphicInfo from './GraphicInfo/GraphicInfo'
import './navigation-top-style.scss'
import Search from './Search/Search'
import SignIn from './SignIn/SignIn'

const NavigationTop = () => {
    const NavigationTopComponent = document.createElement('div')
    
    NavigationTopComponent.className = 'navigationTopComponent'

    const graphicAndContactBox = document.createElement('div')
    graphicAndContactBox.className = 'graphicAndContactBox'
    graphicAndContactBox.appendChild(GraphicInfo())
    graphicAndContactBox.appendChild(ContactInfo())

    const searchAndSignBox = document.createElement('div')
    searchAndSignBox.className = 'searchAndSignBox'
    searchAndSignBox.appendChild(Search())
    searchAndSignBox.appendChild(SignIn())

    NavigationTopComponent.appendChild(graphicAndContactBox)
    NavigationTopComponent.appendChild(searchAndSignBox)

    return NavigationTopComponent
}

export default NavigationTop