import React from 'react'; 
import styled from 'styled-components';

const AddButton = styled.button`
  margin-left: 10px;
`

export default ({createNewListItem, onChange, value, listId, clearNewListItemForm}) => {
    return(
        <div>
            <input type="text" value={value} placeholder="Enter a new list item..." onChange={onChange}></input>
            <AddButton onClick={(event) => createNewListItem(event, value, listId, clearNewListItemForm) }>Add</AddButton>
        </div>
    )
}