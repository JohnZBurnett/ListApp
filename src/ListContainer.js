import React, { Component } from 'react';
import ListItem from './ListItem';
import List from './List'; 


class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listItems: [],
            listItemFormValue: ""
        }
        this.listItemId = 0; 
    }

    updateListItemForm(event) {
        let newValue = event.target.value;
        this.setState({
            listItemFormValue: newValue
        })
    }

    addNewListItem() {
        let listItemsPlusNewItem = [...this.state.listItems, {body: this.state.listItemFormValue, id: ++this.listItemId}]; 
        this.setState({
            listItems: listItemsPlusNewItem,
            listItemFormValue: ""
        })

    }
    
    deleteListItem(event, itemToDeleteId) {
        let filteredListItems = this.state.listItems.filter( listItem => {
            return listItem.id !== itemToDeleteId; 
        })
        this.setState({
            listItems: filteredListItems
        })
    }

    render() {
        const { title, listId, deleteList} = this.props; 
        console.log("LIST ID: ", listId); 
        return(
            <div>
                <List title={title} listId={listId} deleteList={deleteList}/>
            {
                this.state.listItems.map( listItem => {
                    return <ListItem body={listItem.body} id={listItem.id} deleteListItem={this.deleteListItem.bind(this)}/>
                })
            }
            <input type="text" value={this.state.listItemFormValue} placeholder="Enter a new list item..." onChange={this.updateListItemForm.bind(this)}></input>
            <button onClick={this.addNewListItem.bind(this)}>Add</button>
            <button onClick={(event) => {deleteList(event, listId)}}>Delete List</button>
            </div>
        )
    }


}

export default ListContainer;  
