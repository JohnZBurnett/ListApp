import React, { Component } from 'react';
import NewListForm from './NewListForm'; 
import List from './List'; 

class ListsContainer extends Component {
    constructor() {
        super(); 
        this.state = {
            lists: [{ title: 'ListOne'}, {title: 'ListTwo'}]
        }
    }

    renderAllLists() {
        return(
            this.state.lists.map( list => {
                return <List />
            })
        )
    }

    render() {
        return(
            <div>
                <div>This is the ListContainer.</div>
                <NewListForm />
                this.renderAllLists(); 
            </div>
        )
    }
}

export default ListsContainer; 