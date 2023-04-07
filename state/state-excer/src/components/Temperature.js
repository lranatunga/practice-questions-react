import { useState } from "react";


function TempertatureConverter (){

    let [celsius, setCelsius] = useState(0)

    let [fahrenheit, setFahrenheit] = useState (0)

    return (
        <div>
            <p>
            <input 
                placeholder="Temperature in Celsius"
                value={celsius}
                onChange={e => setCelsius(e.target.value)}
               
            />
            <span style={{margin: '10px'}}></span>
            {(celsius*1.8)+32} Fahrenheit</p>
            <br />
            
            <p>
                <input 
                placeholder="Temperature in Fahrenheit"
                value={fahrenheit}
                onChange={e => setFahrenheit(e.target.value)}
            />
            <span style={{margin: '10px'}}></span>
            {(fahrenheit-32)/1.8} Celsius
            
            </p>
        </div>
    )
}

export default TempertatureConverter;









/**
 * 02 Temperature Converter
 * 
 * Create a temperature converter that converts Celsius to Fahrenheit and vice versa. 
 * Have two input fields, one for Celsius and the other for Fahrenheit. 
 * Use the useState hook to manage the temperature values.
 * 
 */