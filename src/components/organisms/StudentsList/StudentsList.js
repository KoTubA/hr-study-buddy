import React from 'react';
import { useParams } from 'react-router-dom';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useGetStudentsByGroupQuery } from 'store';
import Loading from 'components/molecules/Loading/Loading';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const { id } = useParams();
  const { data, status, isError } = useGetStudentsByGroupQuery(id);

  if (isError) {
    return <Title as="h3">Something went wrong. Please try again, or contact our support.</Title>;
  }

  if (status !== 'fulfilled') {
    return <Loading />;
  }

  return (
    <StyledList>
      {data.students.map((userData) => (
        <StudentsListItem onClick={() => handleOpenStudentDetails(userData.id)} key={userData.name} userData={userData} />
      ))}
    </StyledList>
  );
};

export default StudentsList;
