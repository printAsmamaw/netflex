import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
function App() {
  return (
    <div className='App'>
      <Banner />
  <Row title="NETFLIX ORGINALSs"
   fetchUrl={request.fetchNetflixOriginals} 
   isLargRow={true}/>
  <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
  <Row title="Top Related" fetchUrl={request.fetchTopRated}/>
  <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
  <Row title="Comedy Movies" fetchUrl={request.fetchCommedyMovies}/>
  <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
  <Row title="Romantic Movies" fetchUrl={request.fetchRomanceMovies}/>
  <Row title="Documentary Movies" fetchUrl={request.fetchDocumentaries}/>

</div>
  );
}

export default App;
