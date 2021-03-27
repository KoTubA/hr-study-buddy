import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';

const AddUser = ({ handleAddUser, formValues, handleInputChange }) => (
  <ViewWrapper as="form" onSubmit={handleAddUser}>
    <Title>Add new student</Title>
    <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
    <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
    <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
    <Button type="submit">Add</Button>
  </ViewWrapper>
);

AddUser.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
  handleInputChange: PropTypes.func.isRequired,
};

export default AddUser;
