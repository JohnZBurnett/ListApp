import React from 'react';

export default ({title, deleteList, listId}) => {
    return(
        <div>
            <div>{title}</div>
            <button onClick={(event) => {deleteList(event, listId)}}>Delete List</button>
        </div>
    )
}