import './App.css';
import { useEffect } from 'react';
import Papa from 'papaparse';

import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import NewsCard from "./components/newsCard";
import NewsCard2 from "./components/newsCard2";
import VideoPlayer from './components/VideoPlayer';
import Video from "./Images/vid1.mp4";
import Topic from './components/topic';
import ImageNews from "./components/imageNews";
import Footer from './components/footer';
import Modal from './components/model';

import { useDispatch, useSelector } from 'react-redux';
import { setWorld, setLocal } from './redux/store/newsSlice.js';

function App() {
  const dispatch = useDispatch();
  const world = useSelector((state) => state.news.world);
  const local = useSelector((state) => state.news.local);

  console.log("App mounted");

  useEffect(() => {
    console.log("Parsing started ✅");
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTK-cSpK9p3tG3ngQzLDz6LPjHrigggc0Y7E23n3SkYDhYgGKr-4jGqyDTXA8sB97RGsuLYA27in9lc/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          console.log("Parse complete ✅", results.data);
          const filteredWorld = results.data.filter(row =>
            row.section?.trim().toLowerCase() === "world"
          );
          const filteredLocal = results.data.filter(row =>
            row.section?.trim().toLowerCase() === "local"
          );
          dispatch(setWorld(filteredWorld));
          dispatch(setLocal(filteredLocal));
        },
        error: (err) => {
          console.error("PapaParse error ❌", err);
        }
      }
    );
  }, [dispatch]);

  useEffect(() => {
    console.log("world updated from redux ✅", world);
  }, [world]);

  useEffect(() => {
    console.log("local updated from redux ✅", local);
  }, [local]);

  return (
    <div>
      <div className="parent">
        <div className="div1"><Navbar /></div>
        <div className="div2">      
          <Carousel world={world} /> 
          <Topic title="உலகம்"/>
          {local?.slice(0,5).map((item, index) => (
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
        <div className="div3">
        <VideoPlayer 
            src={Video}
            controls={false}
            autoPlay={true}
            loop={true}
            // You can override default styles if needed
            style={{
              height: '150px',
              width: '850px'
            }}
          />
          <Carousel world={world} /> 
        </div>
        <div className="div4">
          <Topic title="உள்ளூர்"/>
          {local?.slice(0,4).map((item, index) => (
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
          <br/>
          <Topic/>
          <Carousel world={world} /> 
        </div>
        <div className="div5">
          {world?.slice(0, 1).map((item, index) => (
            <ImageNews
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
        <div className="div6">      
          {world?.slice(0, 1).map((item, index) => (
            <ImageNews
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
        <div className="div7">
          {world?.slice(1, 2).map((item, index) => (
            <ImageNews
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
        <div className="div8">      
          {world?.slice(2, 3).map((item, index) => (
            <ImageNews
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
        <div className="div9">
          <Topic title="விளையாட்டு"/>
          {local?.slice(0,4).map((item, index) => (
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
        <div className="div10">
          <Topic title="தொழில்நுட்பம்"/>
          {local?.slice(0,4).map((item, index) => (
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

        <div className="div11">
          <Topic title="கட்டுரை"/>
          {local?.slice(0,4).map((item, index) => (
            <NewsCard2
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

        <div className="div12">
          <Topic title="வணிகம்"/>
          {local?.slice(0,5).map((item, index) => (
            <NewsCard2
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
        <div className="div13">
          <Topic title="நிகழ்வு"/>
          {local?.slice(0,5).map((item, index) => (
            <NewsCard2
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
        <div className="div14"><Topic/></div>

        <div className="div15">
          <div className="div151"><Topic title="ஆரோக்கியம்"/></div>
          <div className="div152">            
            {world?.slice(0, 2).map((item, index) => (
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
          <div className="div153">        
            {world?.slice(2, 4).map((item, index) => (
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
          <div className="div154">
            {world?.slice(4, 6).map((item, index) => (
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
          <div className="div155">
            {world?.slice(6, 8).map((item, index) => (
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
        </div>

        <div className="div16">
          <Topic title="சினிமா"/>
          {world?.slice(0,4).map((item, index) => (
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
        <div className="div17"><Footer /></div>

        <Modal />
      </div>
    </div>
  );
}

export default App;