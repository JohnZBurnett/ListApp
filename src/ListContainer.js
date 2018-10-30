import React, { Component } from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';
import List from './List'; 
import NewListItemForm from './NewListItemForm'; 
import { Droppable } from 'react-beautiful-dnd'; 

const ListDiv = styled.div`
background-color: ${ props => (props.isDraggingOver ? 'skyblue' : 'white')}
display-style: inline-block; 
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
            <div>
              <Droppable droppableId={listId}>
              {(provided, snapshot) => (
                  <ListDiv ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
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
                  </ListDiv>
                  
              )}
                </Droppable>
        
            </div>
        )
    }


}

export default ListContainer;  
