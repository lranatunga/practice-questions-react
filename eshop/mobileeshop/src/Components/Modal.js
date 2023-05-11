

export default function ModalWindow (props) {

    return (
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", 
                      position: "fixed", 
                      zIndex: '1000',
                      top: '0', 
                      left: '0', 
                      right: '0', 
                      bottom:' 0', 
                      display: props.show ? "flex" : "none", 
                      justifyContent: "center", 
                      alignItems: "center" }}>
        <div style={{ backgroundColor: "white", 
                      padding: "20px", 
                      maxWidth: "500px", 
                      width: "100%" }}>
            <p>Thank you {props.name}</p>
            <p>Your email has been received and we will get back to you regarding your {props.subject} inquiry.</p>
            <button onClick={props.onClose}>Close</button>
        </div>

        </div>
    )
}

