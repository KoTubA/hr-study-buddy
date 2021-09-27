import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import useModal from 'components/organisms/Modal/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';
import Loading from 'components/molecules/Loading/Loading';
import { useGetGroupsQuery, useLazyGetStudentByIdQuery } from 'store';

const Dashboard = () => {
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { data, isLoading } = useGetGroupsQuery();

  const [trigger, result] = useLazyGetStudentByIdQuery();

  const handleOpenStudentDetails = async (id) => {
    trigger(id);
    handleOpenModal();
  };

  if (isLoading) {
    return (
      <Wrapper>
        <TitleWrapper>Loading...</TitleWrapper>
      </Wrapper>
    );
  }

  if (!id && data.groups.length > 0) return <Redirect to={`/group/${data.groups[0].id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {data.groups.map(({ id }) => (
            <Link key={id} to={`/group/${id}`}>
              {id}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          {result.status === 'fulfilled' ? <StudentDetails student={result.data.students} handleClose={handleCloseModal} /> : <Loading />}
        </Modal>
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
