import Input from 'UI/Input/Input.js'
import Image from 'UI/Image/Image.js'
import SearchLogo from 'Assets/searchLogo.png'
import './search-style.scss'

const Search = () => {
    const SearchComponent = document.createElement('div')
    SearchComponent.className = 'search'

    SearchComponent.appendChild(Input({text: 'Поиск...'}))
    SearchComponent.appendChild(Image({src: SearchLogo,className: 'searchLogo'}))
    return SearchComponent
}

export default Search