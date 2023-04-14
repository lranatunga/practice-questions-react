import {BsCartFill} from 'react-icons/bs'

function CartCounter (props) {
    return (
        <div>
            <BsCartFill style={{width:'40px', height:'40px', scale:(0.7), padding:'20px', margin:'10px'}} />
            <span>{props.count}</span>
        </div>
    )
}
export default CartCounter