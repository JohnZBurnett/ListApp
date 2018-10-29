import React, { Component } from 'react';
import ListItem from './ListItem';
import List from './List'; 
import NewListItemForm from './NewListItemForm'; 


class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
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

    clearNewListItemForm = () => {
        this.setState({
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
        const { title, listId, deleteList, deleteListItem, createNewListItem, listItems} = this.props; 
        return(
            <div>
                <List title={title} listId={listId} deleteList={deleteList}/>
            {
                listItems.map( listItem => {
                    return(
                        <ListItem 
                          body={listItem.value} 
                          id={listItem.id} 
                          deleteListItem={deleteListItem}
                        />
                    ) 
                })
            }

            <NewListItemForm 
              value={this.state.listItemFormValue} 
              clearNewListItemForm={this.clearNewListItemForm} 
              createNewListItem={createNewListItem} 
              onChange={this.updateListItemForm.bind(this)}
              listId={listId}
            />
        
            </div>
        )
    }


}

export default ListContainer;  
