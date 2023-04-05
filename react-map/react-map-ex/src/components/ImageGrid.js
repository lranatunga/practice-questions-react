const ImageGrid = () =>{
    const images = [
        'https://via.placeholder.com/100x100',
        'https://via.placeholder.com/100x100',
        'https://via.placeholder.com/100x100',
        'https://via.placeholder.com/100x100',
        'https://via.placeholder.com/100x100',
        'https://via.placeholder.com/100x100',
        'https://via.placeholder.com/100x100'
    ];

    return(
        <div className="image-grid">{
            images.map((image, index) =>{
                return <img key={index} src={image} alt={image}/>
            })
        }

        </div>
    )
}

export {ImageGrid}


















/**
 * 05 Displaying a Grid of Images
 * 
 * Create a new functional component called "ImageGrid" in a file named "ImageGrid.js".
 * Inside the component, create a static array of image URLs.
 * Use the "map" function to iterate over the array, rendering an <img> element for each image
 * URL.
 * Style the images using CSS to create a grid layout.
 * Import and use the ImageGrid component in your "App.js" file.
 * 
 */