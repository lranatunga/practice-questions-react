/**
 * 01 Display today's date:
 * 
 * Use the JavaScript Date object to create a new date instance representing 
 * the current date and time.
 * Display the current date in a JSX element using an expression.
 * Format the date as a human-readable string (e.g., "March 31, 2023").
 * 
 */

export default function ReadableDate () {
    const date = new Date ()
    // const year = date.getFullYear()
    // const month = date.toLocaleString('default', {month: 'long'})
    // const day = date.getDate()
    return(
        <div>
            {/* {`${month} ${day}, ${year}`} */}
            {`${date.toLocaleString('default', {month: 'long'})} ${date.getDate()}, ${date.getFullYear()}`}
        </div>
    )
}