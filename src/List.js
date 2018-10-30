import React from 'react';
import { Droppable } from 'react-beautiful-dnd'; 
import styled from 'styled-components'; 
import ListItem from './ListItem'; 
import NewListItemForm from './NewListItemForm'; 

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const List = styled.div`
  padding: 8px; 
  min-height: 100px;
`;

const Item = styled.div``;



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
            <button onClick={(event) => {deleteList(event, listId)}}>Delete List</button>
            <NewListItemForm 
               value={formValue} 
               clearNewListItemForm={clearNewListItemForm} 
               createNewListItem={createNewListItem} 
               onChange={onFormChange}
               listId={listId}
            />
        </Container>
    )
}