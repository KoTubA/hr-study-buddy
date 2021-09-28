import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { useAddNoteMutation, useGetNotesQuery } from 'store';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper, NotesSection } from 'views/Notes.styles';
import { useForm } from 'react-hook-form';
import { Title } from 'components/atoms/Title/Title';
import Loading from 'components/molecules/Loading/Loading';
import { LoaderWrapper } from 'views/Dashboard.styles';

const Notes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
  };

  return (
    <Wrapper>
      <Title as="h2" isBig>
        Notes
      </Title>
      <NotesSection>
        <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
          <StyledFormField {...register('title', { required: true })} label="Title" name="title" id="title" />
          <StyledFormField {...register('content', { required: true })} isTextarea label="Content" name="content" id="content" />
          {errors.title && <span>Title is required</span>}
          {errors.content && <span>Content is required</span>}
          <Button type="submit">Add</Button>
        </FormWrapper>
        {isLoading ? (
          <LoaderWrapper>
            <Loading />
          </LoaderWrapper>
        ) : (
          <NotesWrapper>{data.notes.length ? data.notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />) : <Title as="h5">Create your first note</Title>}</NotesWrapper>
        )}
      </NotesSection>
    </Wrapper>
  );
};

export default Notes;
