import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import { Container } from 'react-bootstrap';

function SearchResultsPage() {
  const location = useLocation();
  const { results = [], query = '' } = location.state || {};

  return (
    <Container className="mt-4">
      <h2>Search Results for: "{query}"</h2>
      {results.length > 0 ? (
        <div className="row">
          {results.map((article, index) => (
            <div key={index} className="col-md-6 mb-4">
              <NewsCard 
                title={article.title}
                description={article.description}
                image={article.image}
                url={article.url}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No articles found matching your search.</p>
      )}
    </Container>
  );
}

export default SearchResultsPage;