import React from 'react';
import { Droppable } from 'react-beautiful-dnd'; 
import styled from 'styled-components'; 
import ListItem from './ListItem'; 

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 30%;
`;

const List = styled.div`
  padding: 8px; 
  min-height: 100px;
  background-color: ${ props => (props.isDraggingOver ? 'skyblue' : 'white')};
`;

const Item = styled.div``;



export default ({title, deleteList, listId, listItems, deleteListItem}) => {
    return(
        <Container>
            <h3>{title}</h3>
            <Droppable droppableId={listId}>
            { (provided, snapshot) => (
                <List ref={provided.innerRef} {...provided.droppableProps}>
                  {listItems.map( (listItem, index) => {
                    return(
                        <ListItem 
                          body={listItem.value} 
                          id={listItem.id} 
                          deleteListItem={deleteListItem}
                          index={index}
                          key={listItem.id}
                          isDraggingOver={snapshot.isDraggingOver}
                        />
                    ) 
                })}
                {console.log("PROVIDED: ", provided)}
                {provided.placeholder}
                </List>
            )

            }
            </Droppable>
            <button onClick={(event) => {deleteList(event, listId)}}>Delete List</button>
        </Container>
    )
}