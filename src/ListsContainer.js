import React, { Component, Fragment } from 'react';
import NewListForm from './NewListForm'; 
import ListContainer from './ListContainer'; 
import ListItem from './ListItem'; 

class ListsContainer extends Component {

    constructor() {
        super(); 
        this.state = {
            lists: [{ id: 0, title: 'ListOne'}, {id: 1, title: 'ListTwo'}],
            newListFormValue: ""
        }
        this.id = 0; 
    }

    updateNewListFormValue(event) {
        let newValue = event.target.value; 
        this.setState({
            newListFormValue: newValue
        })
    }

    createNewList() {
        let newList = { title: this.state.newListFormValue, listItems: []}; 
        let updatedArrOfLists = [...this.state.lists, newList];
        this.setState({
            lists: updatedArrOfLists,
            newListFormValue: ""
        });
    }

    renderAllLists() {
        return(
            this.state.lists.map( list => {
                return(
                    <Fragment>
                        <ListContainer title={list.title} listItems={list.listItems} listId={list.listId}/>
                    </Fragment>
                ) 
            })
        )
    }

    render() {
        return(
            <div>
                <div>This is the ListContainer.</div>
                <NewListForm onChange={this.updateNewListFormValue.bind(this)} onClick={this.createNewList.bind(this)} value={this.state.newListFormValue}/>
                {this.renderAllLists()}
            </div>
        )
    }
}

export default ListsContainer; 