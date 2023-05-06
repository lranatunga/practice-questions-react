import { useLocalStorage } from "../CustomHooks/useLocalStorage";

const LocalStorage = () => {
    const [name, setName] = useLocalStorage('name', '')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <input type='text' value={name} onChange={handleChange}/>
            <p>Hello, {name || 'Geust'}</p>
        </div>
    )
}

export default LocalStorage