import React, { useState, useEffect } from 'react';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper, LoaderWrapper, DataWrapper, ArticleButton } from './NewsSection.styles';
import Loading from 'components/molecules/Loading/Loading';

export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then(({ data }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load articles for you`);
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <DataWrapper>
              <ContentWrapper>
                <p>{content}</p>
                <ArticleButton isBig>Read more</ArticleButton>
              </ContentWrapper>
              {image ? <img src={image.url} alt="article" /> : null}
            </DataWrapper>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>
          {error ? (
            error
          ) : (
            <LoaderWrapper>
              <Loading />
            </LoaderWrapper>
          )}
        </NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
