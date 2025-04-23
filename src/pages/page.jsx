import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/navbar";
import "./page.css";
import NewsCard from '../components/newsCard';
import Topic from "../components/topic";
import Footer from "../components/footer";
import { useSelector } from 'react-redux';
import Modal from '../components/model';
import Pagination from '../components/Pagination';

function Page() {
    const { category = 'world' } = useParams(); // Default to 'world' if no category
    const newsData = useSelector((state) => state.news);
    
    // Get the current category data or empty array if not found
    const currentData = newsData[category] || [];
    
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

    return (
        <div>
            <Navbar/>
            <div className="page_parent">
                <div className="page_div1"> 
                    <Topic title={tamilTitles[category] || 'உலகம்'}/>
                    <Pagination/>
                </div>
                <div className="page_div2"> 
                    {currentData.slice(0,7).map((item, index) => (
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
                    ))}<br/>
                </div>
                <div className="page_div3">
                    {currentData.slice(7,14).map((item, index) => (
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
                    ))}<br/>
                </div>
                <div className="page_div4">
                    <Footer/>
                </div>
            </div> 
            <Modal />
        </div>
    );
}

export default Page;