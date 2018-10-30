import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'; 

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px; 
`

export default ({ body, id, deleteListItem, index }) => {
    return(
        <Draggable draggableId = {id} index={index}>
            { provided => (
                <Container
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  {body}
                  <button onClick={(event) => deleteListItem(event, id)}>Delete</button>
                </Container>
            )}
            
        </Draggable>
            
    )
}