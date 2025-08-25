import './image-style.scss';
const Image = ({src, className}) => {
    const image = document.createElement('img')

    image.className = className
    image.src = src

    return image
}

export default Image