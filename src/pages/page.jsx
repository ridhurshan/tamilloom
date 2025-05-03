import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/navbar";
import "./page.css";
import NewsCard from '../components/newsCard';
import Topic from "../components/topic";
import Footer from "../components/footer";
import { useSelector } from 'react-redux';
import Modal from '../components/model';
import Pagination from '../components/Pagination';
import { useMediaQuery } from 'react-responsive';

function Page() {
    const isNotMobile = useMediaQuery({ minWidth: 769 }); 

    const { category = 'world' } = useParams();
    const { [category]: currentData = [], loading, error } = useSelector((state) => state.news);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    // Reset page when category changes
    useEffect(() => {
        setCurrentPage(1);
        console.log(currentPage);
    }, [category]);

    // Tamil category titles mapping
    const tamilTitles = {
        world: 'உலகம்',
        local: 'உள்ளூர்',
        business: 'வணிகம்',
        technology: 'தொழில்நுட்பம்',
        health: 'ஆரோக்கியம்',
        events: 'நிகழ்வு',
        sports: 'விளையாட்டு',
        cinema: 'சினிமா'
    };

    // Calculate total pages
    const totalPages = Math.ceil(currentData.length / itemsPerPage);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = currentData.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="page-container">
            <Navbar/>
            <div className="page_parent">
                <div className="page_div1">
                    <Topic title={tamilTitles[category] || 'உலகம்'}/>
                </div>


                {isNotMobile ? (

                      <div className="page_div3">
                      {currentItems.map((item, index) => (
                              <NewsCard
                                  key={index}
                                  title={item.title?.length > 100
                                      ? item.title.slice(0, 100) + "..."
                                      : item.title
                                  }
                                  description={item.description?.length > 100
                                      ? item.description.slice(0, 100) + "..."
                                      : item.description
                                  }
                                  image={item.image}
                              />
                          ))}
                       </div>
          ) : 
          <div className="page_div2">
          {currentItems.map((item, index) => (
              <NewsCard
                  key={index}
                  title={item.title?.length > 100
                      ? item.title.slice(0, 100) + "..."
                      : item.title
                  }
                  description={item.description?.length > 100
                      ? item.description.slice(0, 100) + "..."
                      : item.description
                  }
                  image={item.image}
              />
          ))}
      </div>
          }

            



                <div className="page_div4">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        paginate={paginate}
                    />
                    <Footer/>
                </div>
            </div>
            <Modal />
        </div>
    );
}

export default Page;