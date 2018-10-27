import React, { Component } from 'react';
import NewListForm from './NewListForm'; 
import List from './List'; 

class ListsContainer extends Component {
    constructor() {
        super(); 
        this.state = {
            lists: [{ title: 'ListOne'}, {title: 'ListTwo'}],
            newListFormValue: ""
        }
    }

    updateNewListFormValue(event) {
        let newValue = event.target.value; 
        this.setState({
            newListFormValue: newValue
        })
    }

    createNewList() {
        let newList = { title: this.state.newListFormValue}; 
        let updatedArrOfLists = [...this.state.lists, newList];
        this.setState({
            lists: updatedArrOfLists,
            newListFormValue: ""
        });
    }

    renderAllLists() {
        return(
            this.state.lists.map( list => {
                return <List title={list.title}/>
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