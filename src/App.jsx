import './App.css';
import { useEffect } from 'react';
import Papa from 'papaparse';

import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import NewsCard from "./components/newsCard";
import NewsCard2 from "./components/newsCard2";
import VideoPlayer from './components/VideoPlayer';
import Video from "./Images/vid1.mp4";
import Video2 from "./Images/vid2.mp4";
import Topic from './components/topic';
import ImageNews from "./components/imageNews";
import Footer from './components/footer';
import Modal from './components/model';
import SearchResults from './components/SearchResults.jsx';
import SocialMediaNavbar from "./components/SocialMediaNavbar";
import Newsletter from './components/Newsletter.jsx';
import Comment from './components/Comment.jsx';
import Load from "./components/Load.jsx"
import { isMobile } from 'react-device-detect';

import { useDispatch, useSelector } from 'react-redux';
import { setNewsData, setLoading, setError } from './redux/store/newsSlice.js';

function App() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const { world, local, business, technology, health, events, sports, cinema,feature, ad, mydate,
    loading, error } = news;

  const fetchNewsData = () => {
    dispatch(setLoading(true));
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQK6qO9TMSz92p4vdTkwuwTxB3kIcUlUBR9w22QSoNmVzwlAIoLbT2w_VI-2pMM6cJYhbMnzOOYd4_W/pub?gid=0&single=true&output=csv',
      {
        download: true,
        header: true,
        complete: (results) => {
          const data = results.data;

          // ✅ Dynamically categorize
          const categories = ['world', 'local', 'business', 'technology', 'health', 
          'events', 'sports', 'cinema',"feature","ad","loading","error"];
          const categorizedData = {};

          categories.forEach((category) => {
            categorizedData[category] = data.filter(
              (row) => row.section?.trim().toLowerCase() === category
            );
          });

          dispatch(setNewsData(categorizedData));
        },
        error: (error) => {
          dispatch(setError(error.message));
        }
      }
    );
  };

  useEffect(() => {
    console.log('App mounted ✅'+ news);
    fetchNewsData();
  }, []);

  //const importantNews = [world[0], local[0], sports[0], technology[0]];

  //time
      const now = new Date();

      const options = { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric', 
        weekday: 'short' 
      };

      const datePart = now.toLocaleDateString('en-GB', options); 
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      const timePart = `${hours}.${minutes} ${ampm}`;
      const finalOutput = `${datePart}, ${timePart}`;

      console.log("loading "+loading);
      console.log("error "+error);

      if(loading){
        return <Load/>
      }

    return (
      <div>
        <div className="parent">
          <div className="div1"><Navbar />
          {isMobile ? (
            null
          ) : 
          <Topic title="உண்மையை 
          நேர்மையாகச் சொல்லும் ஒவ்வொரு வார்த்தையும், ஒரு மாற்றத்தின் விதையாகும்."/>
          }

          </div>
          <div className="div2">      
            {/* <Carousel world={world} />  */}
            <VideoPlayer 
              src={Video2}
              controls={true}
              autoPlay={true}
              loop={false}
              // You can override default styles if needed
              style={{
                height: '300px',
                width: '420px'
              }}
            />
            <Topic title="உலகம்"/>
            {world?.slice(0,5).map((item, index) => (
              <NewsCard
                key={index}
                title={ item.title}
                description={item.description}
                image={item.image}
                mydate={item.mydate}
              />
            ))}
          </div> 
          <div className="div3">
          {isMobile ? (
              null
          ) : 
              <VideoPlayer 
              src={Video}
              controls={false}
              autoPlay={true}
              loop={true}
              // You can override default styles if needed
              style={{
                height: '150px',
                width: '750px'
              }}
            />
          }

            <Carousel world={world} /> 
            <SocialMediaNavbar/>
          </div>
          <div className="div4">
          <Topic title={finalOutput}/>
            <Topic title="உள்ளூர்"/>
            {local?.slice(0,4).map((item, index) => (
              <NewsCard
                key={index}
                title={ item.title}
                description={item.description}
                image={item.image}
                mydate={item.mydate}
              />
            ))}
            <br/>
            <Carousel world={ad} /> 
          </div>
          <div className="div5">
            {world?.slice(0, 1).map((item, index) => (
              <ImageNews
                key={index}
                title={ item.title}
                description={item.description}
                image={item.image}
                mydate={item.mydate}
              />
            ))}
          </div>
          <div className="div6">      
            {world?.slice(0, 1).map((item, index) => (
              <ImageNews
                key={index}
                title={ item.title}
                description={item.description}
                mydate={item.mydate}
              />
            ))}
          </div>
          <div className="div7">
            {world?.slice(1, 2).map((item, index) => (
              <ImageNews
                key={index}
                title={ item.title}
                description={item.description}
                image={item.image}
                mydate={item.mydate}
              />
            ))}
          </div>
          <div className="div8">      
            {world?.slice(2, 3).map((item, index) => (
              <ImageNews
                key={index}
                title={ item.title}
                description={item.description}
                image={item.image}
                mydate={item.mydate}
              />
            ))}
          </div>
          <div className="div9">
            <Topic title="விளையாட்டு"/>
            {sports?.slice(0,4).map((item, index) => (
              <NewsCard
                key={index}
                title={ item.title}
                description={item.description}
                image={item.image}
                mydate={item.mydate}
              />
            ))}
          </div>
          <div className="div10">
            <Topic title="தொழில்நுட்பம்"/>
            {technology?.slice(0,4).map((item, index) => (
              <NewsCard
                key={index}
                title={ item.title}
                description={item.description}
                image={item.image}
                mydate={item.mydate}
              />
            ))}
          </div>
  
          <div className="div11">
            <Topic title="கட்டுரை"/>
            {feature?.slice(0,5).map((item, index) => (
              <NewsCard2
                key={index}
                title={ item.title}
                description={item.description}
                image={item.image}
                mydate={item.mydate}
              />
            ))}
          </div>
  
          <div className="div12">
            <Topic title="வணிகம்"/>
            {business?.slice(0,5).map((item, index) => (
              <NewsCard2
                key={index}
                title={ item.title}
                description={item.description}
                image={item.image}
                mydate={item.mydate}
              />
            ))}
          </div>
          <div className="div13">
            <Topic title="நிகழ்வு"/>
            {events?.slice(0,5).map((item, index) => (
              <NewsCard2
                key={index}
                title={ item.title}
                description={item.description}
                image={item.image}
                mydate={item.mydate}
              />
            ))}
          </div>
          <div className="div14">
              {isMobile ? (
                  <Topic title="Tamil LOom "/>
              ) : 
                  <Topic title="முக்கிய செய்திகள்" />
              }
            </div>
  
          <div className="div15">
            <div className="div151"><Topic title="ஆரோக்கியம்"/></div>
            <div className="div152">            
              {health?.slice(0, 2).map((item, index) => (
                <NewsCard
                  key={index}
                  title={ item.title}
                  description={item.description}
                  image={item.image}
                  mydate={item.mydate}
                />
              ))}
            </div>
            <div className="div153">        
              {health?.slice(2, 4).map((item, index) => (
                <NewsCard
                  key={index}
                  title={ item.title}
                  description={item.description}
                  image={item.image}
                  mydate={item.mydate}
                />
              ))}
            </div>
            <div className="div154">
              {health?.slice(4, 6).map((item, index) => (
                <NewsCard
                  key={index}
                  title={ item.title}
                  description={item.description}
                  image={item.image}
                  mydate={item.mydate}
                />
              ))}
            </div>
            <div className="div155">
                <Newsletter/>
            </div>
          </div>
  
          <div className="div16">
            <Topic title="சினிமா"/>
            {cinema?.slice(0,4).map((item, index) => (
              <NewsCard
                key={index}
                title={ item.title}
                description={item.description}
                image={item.image}
                mydate={item.mydate}
              />
            ))}
          </div>
          <div className="div17"><Footer /></div>
  
          <Modal />
          <SearchResults/>
        </div>
      </div>
    );
  }

 

export default App;