import{FiSearch} from 'react-icons/fi'
export default function Search (prop){
    return(
        <div>
            <input type="search" value={prop.text} onChange={prop.handleSearchInput} />
            <FiSearch onClick={prop.handleSearch}/>
        </div>
    )
}