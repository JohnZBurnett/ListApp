import React from 'react';

export default ({ onChange, value, onClick }) => {
    return(
        <div>
            <label>Enter a title for a new list</label>
            <input type="text" name="newList" onChange={onChange} value={value}></input>
            <button onClick={onClick}>Create List</button>
        </div>
    )
}