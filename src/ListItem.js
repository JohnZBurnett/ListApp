import React from 'react';

export default ({ body, id, deleteListItem }) => {
    return(
        <div>
            <div>{body}</div>
            <button onClick={(event) => deleteListItem(event, id)}>Delete</button>
        </div>
    )
}