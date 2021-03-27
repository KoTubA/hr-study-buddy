import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapepr, StyledInfo } from './UsersListItem.styles';
import { AverageScore } from 'components/atoms/AverageScore/AverageScore';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapepr>
    <AverageScore average={average} />
    <StyledInfo>
      <p>
        {name}
        <DeleteButton onClick={() => deleteUser(name)} />
      </p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
  </Wrapepr>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
