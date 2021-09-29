import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Average } from 'components/atoms/Average/Average';
import { BigAverage, StyledDetails, StyledInfo, StyledLabel, StyledSubjectInfo, Wrapper } from 'components/molecules/StudentDetails/StudentDetails.styles';
import { Button } from 'components/atoms/Button/Button';

const StudentDetails = ({ student, handleClose }) => {
  return (
    <Wrapper>
      <BigAverage value={student.average}>{student.average}</BigAverage>
      <Title isBig as="h3">
        {student.name}
      </Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{student.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {student.grades.map(({ subject, average }) => (
          <StyledSubjectInfo key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <Average value={average}>{average}</Average>
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
      <Button onClick={handleClose} isBig>
        Close
      </Button>
    </Wrapper>
  );
};

export default StudentDetails;
