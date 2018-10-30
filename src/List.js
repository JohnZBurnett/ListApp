import React from 'react';
import styled from 'styled-components'; 
import ListItem from './ListItem'; 
import NewListItemForm from './NewListItemForm'; 

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: flex;
  flex-direction: column; 
`;

const List = styled.div`
  padding: 8px; 
  flex-grow: 1;
  min-height: 200px;
`;

const DeleteButton = styled.button`
 margin: 10px; 
`



export default ({title, deleteList, listId, listItems, deleteListItem, onFormChange, createNewListItem, clearNewListItemForm, formValue}) => {
    return(
        <Container>
            <h3>{title}</h3>
                <List>
                  {listItems.map( (listItem, index) => {
                    return(
                        <ListItem 
                          body={listItem.value} 
                          id={listItem.id} 
                          deleteListItem={deleteListItem}
                          index={index}
                          listId={listId}
                          key={listItem.id}
                        />
                    ) 
                })}
                </List>
            
            <NewListItemForm 
               value={formValue} 
               clearNewListItemForm={clearNewListItemForm} 
               createNewListItem={createNewListItem} 
               onChange={onFormChange}
               listId={listId}
            />
            <DeleteButton onClick={(event) => {deleteList(event, listId)}}>Delete List</DeleteButton>
        </Container>
    )
}