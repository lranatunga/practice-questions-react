// import { useState } from "react";

// function ColourPicker ({color, index}) {

//     const colorCodes = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'black', 'brown', 'salmon']
//     const [selectedColor, setSelectedColor] = useState ('')

//     function handleClick (colorindex) {
//         setSelectedColor(colorCodes[colorindex])
//     }

//     return (
//         <div>
//             {colorCodes.map((color, index) => 
//                 <button 
//                     key={index} 
//                     style={{backgroundColor:color, width:'80px', height:'80px', marginTop:'20px'}} 
//                     onClick={(e) =>handleClick(e.target.index)}>
//                         {color}
//                 </button>)}

//             {
//                 selectedColor && (
//                     <div
//                         key={selectedColor}
//                         style={{backgroundColor:selectedColor, width:'80px', height:'80px', marginTop:'20px'}}>
//                         {selectedColor}
//                     </div>
//                 )
//             }
            
//         </div>
//     )
// }
// export default ColourPicker;


import { useState } from "react";

function ColourPicker () {

    const colorCodes = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'black', 'brown', 'salmon']
    const [selectedColor, setSelectedColor] = useState ('')


    return (
        <div>
            {colorCodes.map((color, index) => 
                <button 
                    key={index} 
                    style={{backgroundColor:color, width:'80px', height:'80px', marginTop:'20px'}} 
                    onClick={() => setSelectedColor(color)}
                >
                    {color}
                </button>
            )}

            {
                selectedColor && (
                    <div
                        key={selectedColor}
                        style={{backgroundColor:selectedColor, width:'80px', height:'80px', marginTop:'20px', display:'flex', justifySelf:'center'}}>
                        {selectedColor}
                    </div>
                )
            }
            
        </div>
    )
}
export default ColourPicker;











/**
 * 04 Color Picker
 * Create a color picker application that allows users to select a color from a list of predefined colors. 
 * Use the useState hook to manage the selected color. 
 * Display the selected color in a visual element on the page.
 * 
 */
