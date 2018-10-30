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
    }

    updateListItemForm(event) {
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
              <List title={title} listId={listId} deleteList={deleteList} listItems={listItems} deleteListItem={deleteListItem}/>
              
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
