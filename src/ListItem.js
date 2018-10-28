import React from 'react';

export default ({ body, id }) => {
    return(
        <div>
            <div>{body}</div>
            <button>Delete</button>
        </div>
    )
}