import React from 'react'; 

export default ({onClick, onChange, value}) => {
    return(
        <div>
            <input type="text" value={value} placeholder="Enter a new list item..." onChange={onChange}></input>
            <button onClick={onClick}>Add</button>
        </div>
    )
}