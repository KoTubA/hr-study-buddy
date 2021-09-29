import React, { useEffect, useCallback } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { GroupWrapper, TitleWrapper, Wrapper, LoaderWrapper, LoaderTitle } from 'views/Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import useModal from 'components/organisms/Modal/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';
import { useGetGroupsQuery, useLazyGetStudentByIdQuery } from 'store';
import Loading from 'components/molecules/Loading/Loading';
import { useError } from 'hooks/useError';

const Dashboard = () => {
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { data, isLoading, isError } = useGetGroupsQuery();
  const [trigger, result] = useLazyGetStudentByIdQuery();
  const { dispatchError } = useError();

  const handleOpenStudentDetails = (id) => {
    trigger(id);
    handleOpenModal();
  };

  useEffect(() => {
    if (result.isError) {
      handleCloseModal();
      dispatchError();
    }
  }, [result]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loading />
      </LoaderWrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper>
        <Title as="h3">Something went wrong. Please try again, or contact our support.</Title>
      </Wrapper>
    );
  }

  if (!id && data.groups.length > 0) return <Redirect to={`/group/${data.groups[0].id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2" isBig>
          Group {id}
        </Title>
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
          {result.status === 'fulfilled' ? (
            <StudentDetails student={result.data.students} handleClose={handleCloseModal} />
          ) : (
            <Loading>
              <LoaderTitle as="h3">Loading...</LoaderTitle>
            </Loading>
          )}
        </Modal>
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
