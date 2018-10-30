import React, { Component, Fragment } from 'react';
import NewListForm from './NewListForm'; 
import ListContainer from './ListContainer'; 
import ListItem from './ListItem'; 
import { DragDropContext } from 'react-beautiful-dnd';
class ListsContainer extends Component {

    constructor() {
        super(); 
        this.state = {
            lists: [],
            listItems: [],
            newListFormValue: ""
        }
        this.listId = 0; 
        this.listItemId = 0; 
    }

    updateNewListFormValue(event) {
        let newValue = event.target.value; 
        this.setState({
            newListFormValue: newValue
        })
    }

    createNewList() {
        let newList = { title: this.state.newListFormValue, listItems: [], listId: "list-" + ++this.listId}; 
        let updatedArrOfLists = [...this.state.lists, newList];
        this.setState({
            lists: updatedArrOfLists,
            newListFormValue: ""
        });
    }

    createNewListItem = (event, itemValue, listId, clearNewListItemForm) => {
        let newListItem = { id: "item-" + ++this.listItemId, listId, value: itemValue};
        let listItemsPlusNewItem = [...this.state.listItems, newListItem]
        let updatedLists = this.state.lists.map( list => {
            if (list.listId === listId) {
                list.listItems.push(newListItem)
            }
            return list; 
        });
        this.setState({
            listItems: listItemsPlusNewItem,
            lists: updatedLists
        });
        
        // this fn resides in ListContainer.js where the new list item form is controlled for each list
        clearNewListItemForm(); 
    }

    deleteList(event, listToDeleteId) {
        let filteredLists = this.state.lists.filter( (list) => {
            return list.listId !== listToDeleteId
        })
        this.setState({
            lists: filteredLists
        })
    }

    deleteListItem = (event, listItemToDeleteId) => {
        let filteredListItems = this.state.listItems.filter( listItem => {
            return listItem.id !== listItemToDeleteId; 
        })
        this.setState({
            listItems: filteredListItems
        })
    }

    onDragEnd = (result) => {
        console.log("RESULT: ", result); 
        const {destination, source, draggableId} = result; 
        const draggedListItem = this.state.listItems.find( item => item.id === draggableId); 
        console.log("DESTINATION: ", destination, "SOURCE: ", source, "DRAGGED ITEM: ", draggedListItem ); 

        if (!destination) {
            // if the drag did not end in a droppable area we abort
            return; 
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            // we do nothing because the location hasn't changed 
            return; 
        }

        this.state.lists.map( list => {
            if (list.listId === destination.droppableId) {
                console.log("WE'RE DROPPING IN THIS LIST: ", list);  
            }
        })

    }

    renderAllLists() {
        return(
            this.state.lists.map( list => {
                return(
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <ListContainer 
                            title={list.title} 
                            listItems={list.listItems} 
                            listId={list.listId} 
                            deleteList={this.deleteList.bind(this)}
                            createNewListItem={this.createNewListItem}
                            deleteListItem={this.deleteListItem}
                        />
                    </DragDropContext>
                ) 
            })
        )
    }

    render() {
        return(
            <div>
                <h1>Welcome to the List App</h1>
                <NewListForm 
                  onChange={this.updateNewListFormValue.bind(this)} 
                  onClick={this.createNewList.bind(this)} 
                  value={this.state.newListFormValue}
                />
                {this.renderAllLists()}
            </div>
        )
    }
}

export default ListsContainer; 