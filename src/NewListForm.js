import React from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
  margin-left: 5px;
`

const StyledInput = styled.input`
  margin-left: 5px; 
`

export default ({ onChange, value, onClick }) => {
    return(
        <div>
            <StyledInput type="text" name="newList" placeholder="Enter a list title..." onChange={onChange} value={value}></StyledInput>
            <AddButton onClick={onClick}>Create List</AddButton>
        </div>
    )
}