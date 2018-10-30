import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'; 

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px; 
  background-color: ${ props => props.isDragging ? 'lightgreen' : 'white'}
`

export default ({ body, id, deleteListItem, listId, index }) => {
    return(
        <Draggable draggableId = {id} index={index}>
            { (provided, snapshot) => (
                <Container
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  isDragging={snapshot.isDragging}
                >
                  {body}
                  <button onClick={(event) => deleteListItem(event, id, listId)}>Delete</button>
                </Container>
            )}
            
        </Draggable>
            
    )
}