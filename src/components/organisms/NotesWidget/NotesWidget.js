import React from 'react';
import Note from 'components/molecules/Note/Note';
import { useGetNotesQuery } from 'store';
import { NotesWrapper, WidgetHandler, Wrapper, InfoWrapper } from 'components/organisms/NotesWidget/NotesWidget.styles';
import Loading from 'components/molecules/Loading/Loading';
import { Title } from 'components/atoms/Title/Title';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data, isLoading } = useGetNotesQuery();

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      {isLoading ? (
        <InfoWrapper>
          <Loading />
        </InfoWrapper>
      ) : data.notes.length ? (
        <NotesWrapper>
          {data.notes.map(({ title, content, id }) => (
            <Note id={id} key={id} title={title} content={content} />
          ))}
        </NotesWrapper>
      ) : (
        <InfoWrapper>
          <Title as="h5">Create your first note</Title>
        </InfoWrapper>
      )}
    </Wrapper>
  );
};

export default NotesWidget;
