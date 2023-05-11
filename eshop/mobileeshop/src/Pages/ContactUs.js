import { useState } from "react"
import ModalWindow from "../Components/Modal"

export default function ContactUs () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState ('')
    const [subject, setSubject] = useState ('')
    const [showModal, setShowModal] = useState (false)

    const handleSubmit = (e) => {
        e.preventDefault ()
        setShowModal(true)
       
    }

    const handleCloseModal = () =>{
        setShowModal(false)
        setEmail('')
        setName('')
        setSubject('')
    }


    return (
        <div>
            <form>
                <p>Name: 
                <select>
                    <option >Mr.</option>
                    <option >Ms.</option>
                    <option >Other</option>
                </select>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></p>
                <p>Email: <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/></p>
                <div>Department: 
                    <select>
                        <option>Sales </option>
                        <option>Marketing</option>
                        <option>Warehouse</option>
                        <option>Order</option>
                    </select>
                </div>
                <p>Subject: <input type='text' value={subject} onChange={(e)=> setSubject(e.target.value)}/></p>
                <div style={{display:'flex'}}>
                <p>Message: </p><textarea></textarea>
                </div>
                <button onClick={handleSubmit}>Send</button>
            </form>
            {/* { showModal && */}
            <ModalWindow name={name}
                         subject={subject}
                         onClose={handleCloseModal}
                         show={showModal}/>
                         {/* } */}
        </div>
    )
}