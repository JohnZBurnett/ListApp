import React from 'react'; 

export default ({createNewListItem, onChange, value, listId, clearNewListItemForm}) => {
    return(
        <div>
            <input type="text" value={value} placeholder="Enter a new list item..." onChange={onChange}></input>
            <button onClick={(event) => createNewListItem(event, value, listId, clearNewListItemForm) }>Add</button>
        </div>
    )
}