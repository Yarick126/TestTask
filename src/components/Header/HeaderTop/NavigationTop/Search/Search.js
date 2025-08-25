import Input from '../../../../ui/Input/Input.js'
import Image from '../../../../ui/Image/Image.js'
import SearchLogo from '../../../../../assets/searchLogo.png'
import './search-style.scss'

const Search = () => {
    const SearchComponent = document.createElement('div')
    SearchComponent.className = 'search'

    SearchComponent.appendChild(Input({text: 'Поиск...'}))
    SearchComponent.appendChild(Image({src: SearchLogo,className: 'searchLogo'}))
    return SearchComponent
}

export default Search