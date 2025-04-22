import './App.css';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';

import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import NewsCard from "./components/newsCard";
import NewsCard2 from "./components/newsCard2";
import ImageFram from './components/imageFram';
import Topic from './components/topic';
import ImageNews from "./components/imageNews";
import Footer from './components/footer';
import Modal from './components/model'; // ✅ IMPORT MODAL

// import UncontrolledCarousel from "./components/carousel"; // ✅ YOUR component


function App() {
  const [world, setWorld] = useState([]);
  const [local, setLocal] = useState([]);
  // const [world, setWorld] = useState([]);
  // const [world, setWorld] = useState([]);
  // const [world, setWorld] = useState([]);
  // const [world, setWorld] = useState([]);

  console.log("App mounted"); // 👈 Does this appear?

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
          setWorld(filteredWorld);
          setLocal(filteredLocal);
          console.log("Filtered world ✅", filteredWorld);
        },
        error: (err) => {
          console.error("PapaParse error ❌", err);
        }
      }
    );
  }, []);

  
  

  return (
    <div className="parent">
      <div className="div1"><Navbar /></div>
      <div className="div2"><Topic /></div>
      <div className="div2">
      <Carousel world={world}/> 
       <br />
        <Topic />
            {world.map((item, index) => (
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
                ))}
         <Topic />
      </div> 
      <div className="div3"><ImageFram />
      <Carousel world={world}/> 
      </div>
      <div className="div4"><Topic /><br />
      {world.map((item, index) => (
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
                ))}
      <Carousel world={world}/> 
      <Topic /></div>
      <div className="div5">
      {world.slice(0, 1).map((item, index) => (
                  <ImageNews
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
                ))}
      
      </div>
      <div className="div6">      
      {world.slice(0, 1).map((item, index) => (
                  <ImageNews
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
                ))}</div>
      <div className="div7">
      {world.slice(1, 2).map((item, index) => (
                  <ImageNews
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
                ))}
      </div>
      <div className="div8">      
      {world.slice(2, 3).map((item, index) => (
                  <ImageNews
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
                ))}</div>
      <div className="div9">
      {local.map((item, index) => (
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
            ))}
      </div>
      <div className="div10">
        {local.map((item, index) => (
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
            ))}
      </div>

      <div className="div11">
        <Topic />
        {world.map((item, index) => (
          <NewsCard2
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
        ))}
      </div>

      <div className="div12"><Topic />
        {local.map((item, index) => (
            <NewsCard2
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
          ))}
      </div>
      <div className="div13"><Topic />
      {local.map((item, index) => (
            <NewsCard2
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
          ))}
      </div>
      <div className="div14"></div>

      <div className="div15">
        <div className="div151"><Topic /></div>
        <div className="div152">            
        {world.slice(1, 4).map((item, index) => (
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
                ))}</div>
        <div className="div153">        
             {world.slice(1, 4).map((item, index) => (
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
                ))}
        </div>
        <div className="div154">
           {world.slice(1, 4).map((item, index) => (
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
                ))}
        </div>
        <div className="div155">
              {world.slice(1, 4).map((item, index) => (
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
                ))}
          </div>
      </div>

      <div className="div16"><Topic />
          {world.map((item, index) => (
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
                ))}
      </div>
      <div className="div17"><Footer /></div>

      <Modal />
    </div>
  );
}

export default App;
