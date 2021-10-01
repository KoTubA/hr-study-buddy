import { Input } from 'components/atoms/Input/Input';
import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';
import { SearchBarWrapper, SearchResults, SearchResultsItem, SearchWrapper, StatusInfo, InfoLabel, InfoAs } from 'components/organisms/SearchBar/SearchBar.styles';
import { useLazyFindStudentsQuery, useLazyGetStudentByIdQuery } from 'store';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Loading from 'components/molecules/Loading/Loading';
import { LoaderTitle } from 'views/Dashboard.styles';
import { useError } from 'hooks/useError';

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { isOpen: isOpenModal, handleOpenModal, handleCloseModal } = useModal();
  const { dispatchError } = useError();
  const [trigger, result] = useLazyFindStudentsQuery();
  const [triggerStudentDetails, resultStudentDetails] = useLazyGetStudentByIdQuery();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    trigger(inputValue);
  }, 500);

  useEffect(() => {
    if (result.status === 'fulfilled') setMatchingStudents(result.data.students);
  }, [result]);

  const handleOpenStudentDetails = (id) => {
    triggerStudentDetails(id);
    handleOpenModal();
  };

  useEffect(() => {
    if (resultStudentDetails.isError) {
      handleCloseModal();
      dispatchError();
    }
  }, [resultStudentDetails.isError]);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
    itemToString: (item) => (item ? item.name : ''),
    onSelectedItemChange({ selectedItem }) {
      handleOpenStudentDetails(selectedItem.id);
    },
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <InfoLabel>Logged as:</InfoLabel>
        <InfoAs>Teacher</InfoAs>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="Search" id="Search" placeholder="find student" spellCheck="false" />
        <SearchResults isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()} aria-label="results">
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item.id}>
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
      <Modal isOpen={isOpenModal} handleClose={handleCloseModal}>
        {resultStudentDetails.status === 'fulfilled' ? (
          <StudentDetails student={resultStudentDetails.data.students} handleClose={handleCloseModal} />
        ) : (
          <Loading>
            <LoaderTitle as="h3">Loading...</LoaderTitle>
          </Loading>
        )}
      </Modal>
    </SearchBarWrapper>
  );
};
