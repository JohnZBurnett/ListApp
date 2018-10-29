import React, { Component, Fragment } from 'react';
import NewListForm from './NewListForm'; 
import ListContainer from './ListContainer'; 
import ListItem from './ListItem'; 

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
        console.log("ITEM LIST VALUE: ", itemValue);
        console.log("THIS: ", this);  
        let listItemsPlusNewItem = [...this.state.listItems, { id: "item-" + ++this.listItemId, listId, value: itemValue}]
        this.setState({
            listItems: listItemsPlusNewItem
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

    renderAllLists() {
        return(
            this.state.lists.map( list => {
                return(
                    <Fragment>
                        <ListContainer 
                            title={list.title} 
                            listItems={list.listItems} 
                            listId={list.listId} 
                            deleteList={this.deleteList.bind(this)}
                            createNewListItem={this.createNewListItem}
                        />
                    </Fragment>
                ) 
            })
        )
    }

    render() {
        return(
            <div>
                <div>This is the ListContainer.</div>
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