import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { closeSearch } from '../redux/store/searchResults';
import NewsCard from './newsCard2';

function SearchResults() {
    const dispatch = useDispatch();
    const { isOpen, searchResults } = useSelector((state) => state.searchResults);

    return (
        <Offcanvas show={isOpen} onHide={() => dispatch(closeSearch())} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search Results</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {searchResults && searchResults.length > 0 ? (
                    searchResults.map((item, index) => (
                        <NewsCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))
                ) : (
                    <div>No search results found. Try a different search term.</div>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default SearchResults;