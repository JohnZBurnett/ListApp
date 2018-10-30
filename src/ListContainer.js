import React, { Component } from 'react';
import styled from 'styled-components';
import List from './List'; 
import { Droppable } from 'react-beautiful-dnd'; 


const Container = styled.div`
  width: 30%;
  display: inline-block; 
  padding: 10px;
`;


class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listItemFormValue: ""
        }
    }

    updateListItemForm = (event) => {
        let newValue = event.target.value;
        this.setState({
            listItemFormValue: newValue
        })
    }

    clearNewListItemForm = () => {
        this.setState({
            listItemFormValue: ""
        })
    }

    render() {
        const { title, listId, deleteList, deleteListItem, createNewListItem, listItems} = this.props; 
        return(
            <Container>
              <Droppable droppableId={listId}>
              {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                      <List 
                        title={title} 
                        listId={listId} 
                        deleteList={deleteList} 
                        listItems={listItems} 
                        deleteListItem={deleteListItem}
                        formValue={this.state.listItemFormValue} 
                        clearNewListItemForm={this.clearNewListItemForm} 
                        createNewListItem={createNewListItem} 
                        onFormChange={this.updateListItemForm}
                      />
                      {provided.placeholder}
                  </div>
                  
              )}
                </Droppable>
        
            </Container>
        )
    }


}

export default ListContainer;  
