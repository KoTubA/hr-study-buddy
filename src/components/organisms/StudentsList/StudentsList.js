import React from 'react';
import { useParams } from 'react-router-dom';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useGetStudentsByGroupQuery } from 'store';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const { id } = useParams();
  const { data, isLoading } = useGetStudentsByGroupQuery(id);

  if (isLoading) {
    return <Title>Loading...</Title>;
  }

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {data.students.map((userData) => (
          <StudentsListItem onClick={() => handleOpenStudentDetails(userData.id)} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
