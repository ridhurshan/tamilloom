import React from 'react'
import Navbar from "../components/navbar"
import "./page.css"
import NewsCard from '../components/newsCard';
import Topic from "../components/topic" ;
import Footer from "../components/footer" ;
import { useSelector } from 'react-redux';
import Modal from '../components/model';

function Page() {
    const world = useSelector((state) => state.news.world);

  return (
    <div>{console.log("worldxxx"+world)}
        <Navbar/>
         <div className="page_parent">
            <div className="page_div1"> 
            <Topic/>
            </div>
            <div className="page_div2"> 
            {world.slice(0,7).map((item, index) => (
                    <NewsCard
                        key={index}
                        title={item.title.length > 100
                            ? item.title.slice(0, 100) + "..."
                            : item.title
                        }
                        description={item.description.length > 100
                        ? item.description.slice(0, 100) + "..."
                        : item.description
                        }
                        image={item.image}
                    />
                    ))}<br></br>
            </div>
            <div className="page_div3">
            {world.slice(7,14).map((item, index) => (
                    <NewsCard
                        key={index}
                        title={item.title.length > 100
                            ? item.title.slice(0, 100) + "..."
                            : item.title
                        }
                        description={item.description.length > 100
                        ? item.description.slice(0, 100) + "..."
                        : item.description
                        }
                        image={item.image}
                    />
                    ))}<br></br>
            </div>
            <div className="page_div4">
                    <Footer/>
            </div>
            </div> 
            <Modal />
    </div>
  )
}

export default Page