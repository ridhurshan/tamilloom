import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { setNewsData, setLoading, setError } from '../redux/store/newsSlice.js';

import Carousel from "../components/carousel";
import NewsCard from "../components/newsCard";
import NewsCard2 from "../components/newsCard2";
import VideoPlayer from '../components/VideoPlayer';
import Video from "../Images/vid1.mp4";
import Video2 from "../Images/vid2.mp4";
import Topic from '../components/topic';
import ImageNews from "../components/imageNews";
import Modal from '../components/model';
import SearchResults from '../components/SearchResults.jsx';
import SocialMediaNavbar from "../components/SocialMediaNavbar";
import Newsletter from '../components/Newsletter.jsx';
import Comment from '../components/Comment.jsx';
import Load from "../components/Load.jsx";

import Nav from 'react-bootstrap/Nav';

function Home() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const { world, local, business, technology, health, events, sports, cinema, 
          feature, ad, loading, error } = news;

  const INITIAL_BATCH_SIZE = 80;

  const fetchNewsData = () => {
    const cached = sessionStorage.getItem('newsData');
    const cachedTime = sessionStorage.getItem('newsDataTime');
    const now = Date.now();
    const tenMinutes = 10 * 60 * 1000;

    if (cached && cachedTime && now - cachedTime < tenMinutes) {
      dispatch(setNewsData(JSON.parse(cached)));
      dispatch(setLoading(false));
      return;
    }

    dispatch(setLoading(true));
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQK6qO9TMSz92p4vdTkwuwTxB3kIcUlUBR9w22QSoNmVzwlAIoLbT2w_VI-2pMM6cJYhbMnzOOYd4_W/pub?gid=0&single=true&output=csv',
      {
        download: true,
        header: true,
        worker: true,
        complete: (results) => {
          const data = results.data;
          const categories = ['world', 'local', 'business', 'technology', 'health', 
                              'events', 'sports', 'cinema', 'feature', 'ad'];
          const categorizedData = {};

          categories.forEach((category) => {
            const all = data.filter(row => row.section && row.section.trim().toLowerCase() === category);
            console.log(`Found ${all.length} articles for category: ${category}`);
            categorizedData[category] = all.slice(0, INITIAL_BATCH_SIZE);
            categorizedData[`${category}Remaining`] = all.slice(INITIAL_BATCH_SIZE);
          });
          

          sessionStorage.setItem('newsData', JSON.stringify(categorizedData));
          sessionStorage.setItem('newsDataTime', now.toString());
          dispatch(setNewsData(categorizedData));
          dispatch(setLoading(false));

          setTimeout(() => {
            const fullData = { ...categorizedData };
            categories.forEach(category => {
              fullData[category] = [
                ...(fullData[category] || []),
                ...(fullData[`${category}Remaining`] || [])
              ];
              delete fullData[`${category}Remaining`];
            });
            dispatch(setNewsData(fullData));
            console.log("Parsed data:", results.data);
            console.log("Loading:", loading);
            console.log("Error:", error);
            console.log("News data:", news);
          }, 1000);
        },
        error: (error) => {
          dispatch(setError(error.message));
          dispatch(setLoading(false));
        }
      }
    );
  };

  useEffect(() => {
    const categories = [world, local, business, technology, health, events, 
                        sports, cinema, feature, ad];
    const isAnyEmpty = categories.some((cat) => !cat || cat.length === 0);
    if (isAnyEmpty) {
      fetchNewsData();
    }
  }, []);

  // results.data.forEach((item, index) => {
  //   if (!item._1 || !item._2) {
  //     console.log(`Item at index ${index} is missing data:`, item);
  //   }
  // });

  const now = new Date();
  const options = { day: '2-digit', month: 'short', year: 'numeric', weekday: 'short' };
  const datePart = now.toLocaleDateString('en-GB', options);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const timePart = `${hours}.${minutes} ${ampm}`;
  const finalOutput = `${datePart}, ${timePart}`;

  const [showCommentModal, setShowCommentModal] = useState(false);
  const handleCommentClick = () => setShowCommentModal(true);
  const handleCommentClose = () => setShowCommentModal(false);

  if (loading) return <Load />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="parent">
      <div className="div1">
        {!isMobile && <Topic title="உண்மையை நேர்மையாகச் சொல்லும் ஒவ்வொரு வார்த்தையும்,
         ஒரு மாற்றத்தின் விதையாகும்." />}
      </div>

      <div className="div2">
        <div style={{ width: '100%', maxWidth: '420px', aspectRatio: '14 / 10' }}>
          <VideoPlayer src={Video2} controls={true} autoPlay={true} muted={true} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <Topic title="உலகம்" />
        {world?.slice(0, 5).map((item, index) => <NewsCard key={index} {...item} />)}
      </div>

      <div className="div3">
        {!isMobile && (
          <div style={{ width: '100%', maxWidth: '750px', aspectRatio: '5 / 1' }}>
            <VideoPlayer src={Video} autoPlay={true} 
            loop={true} muted={false} controls={false}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
        <Carousel world={world} />
        <SocialMediaNavbar />
      </div>

      <div className="div4">
        <Topic title={finalOutput} />
        <Topic title="உள்ளூர்" />
        {local?.slice(0, 4).map((item, index) => <NewsCard key={index} {...item} />)}
        <br />
        <Carousel world={ad} />
        <br />
        <div className="comment-header" style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          padding: '10px 12px', background: 'rgba(1228, 239, 231, 0.9)',
          boxShadow: '6px 6px 10px rgba(0, 0, 0, 0.3)', border: '1px solid rgba(0, 0, 0, 0.1)',
          margin: '10px 0', borderRadius: "29px", cursor: "pointer", fontWeight: "bold",
          fontSize: "clamp(1rem, 4vw, 1.25rem)", textShadow: "0 0 10px rgba(255, 255, 255, 0.1)"
        }}>
          <Nav.Link onClick={handleCommentClick}>கருத்து தெரிவிக்க</Nav.Link>
        </div>
      </div>

      <div className="div5">
        {local?.slice(0, 1).map((item, index) => <ImageNews key={index} {...item} />)}
        </div>
      <div className="div6">
        {local?.slice(1, 2).map((item, index) => <ImageNews key={index} {...item} />)}
        </div>
      <div className="div7">
        {world?.slice(0, 1).map((item, index) => <ImageNews key={index} {...item} />)}
        </div>
      <div className="div8">
        {sports?.slice(0, 1).map((item, index) => <ImageNews key={index} {...item} />)}
        </div>

      <div className="div9"><Topic title="விளையாட்டு" />
      {sports?.slice(0, 4).map((item, index) => <NewsCard key={index} {...item} />)}
      </div>
      <div className="div10"><Topic title="தொழில்நுட்பம்" />
      {technology?.slice(0, 4).map((item, index) => <NewsCard key={index} {...item} />)}
      </div>
      <div className="div11"><Topic title="கட்டுரை" />
      {feature?.slice(0, 5).map((item, index) => <NewsCard2 key={index} {...item} />)}
      </div>
      <div className="div12"><Topic title="வணிகம்" />
      {business?.slice(0, 5).map((item, index) => <NewsCard2 key={index} {...item} />)}
      </div>
      <div className="div13"><Topic title="நிகழ்வு" />
      {events?.slice(0, 5).map((item, index) => <NewsCard2 key={index} {...item} />)}
      </div>
      <div className="div14">
        {isMobile ? <Topic title="Tamil LOom " /> : <Topic title="முக்கிய செய்திகள்" />}
      </div>

      <div className="div15">
        <div className="div151"><Topic title="ஆரோக்கியம்" /></div>
        <div className="div152">
          {health?.slice(0, 2).map((item, index) => <NewsCard key={index} {...item} />)}
          </div>
        <div className="div153">
          {health?.slice(2, 4).map((item, index) => <NewsCard key={index} {...item} />)}
          </div>
        <div className="div154">
          {health?.slice(4, 6).map((item, index) => <NewsCard key={index} {...item} />)}
          </div>
        <div className="div155">
          <Newsletter /></div>
      </div>

      <div className="div16"><Topic title="சினிமா" />
      {cinema?.slice(0, 4).map((item, index) => <NewsCard key={index} {...item} />)}
      </div>
      <Modal />
      <SearchResults />
      <Comment show={showCommentModal} handleClose={handleCommentClose} />
    </div>
  );
}

export default Home;
