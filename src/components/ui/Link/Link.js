import './link-style.scss'
const Link = ({text, href}) => {
    const LinkComponent = document.createElement('a')
    
    LinkComponent.textContent = text
    LinkComponent.setAttribute('href', href)
    return LinkComponent
};

export default Link;