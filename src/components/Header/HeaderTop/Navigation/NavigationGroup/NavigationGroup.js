import './navigation-group-style.scss'

const NavigationGroup = (buttonsArray) => {
    const NavigationGroupComponent = document.createElement('div')
    NavigationGroupComponent.className = 'navigationGroup'
    for (let i = 0; i < buttonsArray.length; i++) {
        NavigationGroupComponent.appendChild(buttonsArray[i]);
    }   

    return NavigationGroupComponent
}

export default NavigationGroup