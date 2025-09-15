import './image-style.scss';
const Image = ({src, className}) => {
    const image = document.createElement('img')
    image.setAttribute('alt', '#')
    image.className = className
    image.src = src

    return image
}

export default Image