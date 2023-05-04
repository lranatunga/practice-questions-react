import useFetchData from "../CustomHooks/useFetchData";

export default function FetchData (props) {
    const {data, loading, error} = useFetchData("https://jsonplaceholder.typicode.com/posts")

    if (loading) return<div>Loading...</div>
    if(error) return <div>Error:{error}</div>

    return(
        <div>
            {data.map((item, index) =>{
                return(
                    <div key={index}>{item.title}
                      
                    </div>
                )
            })}
        </div>
    )
}