import{FiSearch} from 'react-icons/fi'
export default function Search (prop){
    return(
        <div className='search-container'>
            <input type="text" value={prop.text} onChange={prop.handleSearchInput} className='search-box' />
            <FiSearch onClick={prop.handleSearch} className='search-button'/>
        </div>
    )
}