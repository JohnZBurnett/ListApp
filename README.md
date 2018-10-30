## Introduction

This is a simple list application which allows users to create lists, add items to the lists, drag items within or between lists to reorder, and delete items and lists as needed. This application was built using React, and is purely front-end. Data will not persist between uses. 

## Installation 
Please refer to these steps to run the application locally:

1) Clone the repository to your machine.
2) Navigate into the root level of the project.
3) Execute the "start" script for the project using your preferred tool (for example, "yarn start" with Yarn, or "npm run start" with NPM). 
4) The script will start the app in port 3000 by default. A new tab will be opened in your browser at the address of the app, which will then be available for use. Should the port be occupied, the app will ask in Terminal if another port should be used.  

## Using the App

To use the app, it is first necessary to create a list. To do so, fill in a list title, and click "Add". The list will then appear. Further lists may be created as desired, and will appear ordered in columns. To delete a list, click the "Delete List" button found in the bottom part of the list. Deletion of a list will also delete all items which belong to that list. 

To create an item within a list, fill out the text input for a new item, and click the corresponding "Add" button within the same list. The new item will appear on the list. Should the list already have items, the new item will be placed last in the list. To delete any item, click the "Delete" button to its right. 

Items may be reodered freely via a simple drag-and-drop interface. Users may drag items within an existing list, or drag an item from one list to another. To use this functionality, click and hold on the desired item, then drag to the desired position. The app will automatically reorder existing items to accomodate the item which has been dropped. 

## Thoughts on Development

While developing this app, it was clear that both lists and list items would need to be maintained in state. The decision to hold all the state for this information in the top-level container, ListsContainer, was driven by another key component of the application, the drag-and-drop interface. I arrived at the decision to use drag-and-drop functionality as it provides an intuitive and visually attractive experience for the user. With the need for drag-and-drop clear, I opted to utilize the 'react-beautiful-dnd' library, as it offered a straightforward implementation which fit the scope of this project well. 

The react-beautiful-dnd library relied on the use of an "onDragEnd" function which needed to be able to search through both the dragged components (the ListItems) and the components dropped into (the ListContainers) so as to reorder items when needed. As such, I opted to maintain both lists and list items in state at the same level as the onDragEnd function, to ensure easy access without needing to pass props or link state across multiple levels.

I also chose to maintain one piece of state in the ListContainer component - this was the value of the text input for a new list item for each list. This piece of state also could have been maintained at the top level in ListsContainer, thus eliminating the need for the ListContainer component. However, given the already-considerable size of the code in ListsContainer, as well as the increasingly complexity of the callback operations being passed down from ListsContainer, I felt it made sense to offload control of the NewListItemForm value to a child container of ListsContainer. 

In addition to 'react-beautiful-dnd', I employed the 'styled-components' library. Given the simple nature of the application, this helped implement some simple styling directly in my component files, without need to maintain a separate stylesheet or do clutter-prone style declarations directly in the JSX. However, this library could easily be replaced or supplemented by use of a stylesheet should styling needs grow more complex. 

In terms of scalability, the application frequently filters through every single list and/or list item in order to delete items. As list and item numbers grow into the thousands, tens of thousands, or beyond, operation time will increase at O(n) along with the input. As such, it would be worth considering other approaches for removing lists and list items.  

