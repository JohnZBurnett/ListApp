import React, { Component } from 'react';
import ListItem from './ListItem'; 


class List extends Component {
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

    render() {
        const { title, listId} = this.props; 
        return(
            <div>
                <div>This list's title is: {title}</div>
            {
                this.state.listItems.map( listItem => {
                    return <ListItem body={listItem.body} id={listItem.id}/>
                })
            }
            <input type="text" value={this.state.listItemFormValue} placeholder="Enter a new list item..." onChange={this.updateListItemForm.bind(this)}></input>
            <button onClick={this.addNewListItem.bind(this)}>Add</button>
            </div>
        )
    }


}

export default List 
