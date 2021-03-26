import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { DeleteStyledButton } from './DeleteButton.styles';

const DeleteButton = (props) => (
  <DeleteStyledButton {...props}>
    <DeleteIcon />
  </DeleteStyledButton>
);

export default DeleteButton;
