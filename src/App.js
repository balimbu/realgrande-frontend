import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import { useEffect, useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import SearchedHouse from './components/SearchedHouse';
import SearchResults from './components/SearchResults';
import axios from 'axios';
import Login from './components/Login';
import InquiryList from './components/InquiryList';
import Signup from './components/Signup';

function App() {
  let [allHouses, setAllHouses] = useState([])
  useEffect(() => {
    async function getHousesInfo(){
      try{
        // let resp = await fetch('houses.json')
        //let resp = await axios.get('http://localhost:3002/');
        // console.log(process.env.REACT_APP_LINKTOBACKEND + '/race');
        let resp = await axios.get(process.env.REACT_APP_LINKTOBACKEND);
        console.log(resp);
        let data = resp.data;
        setAllHouses(data);
      }catch (error){
          console.error(error);
      }
      
    }
    getHousesInfo();
    
  },[]);


  return (
    <div className="App bg-secondary">     
     <Header/>
     <SearchFilter houses={allHouses}/>
    
    <Routes>
          <Route path ="/" element={<House houses={allHouses}/>} />
          <Route path="searchresults/:county" element={<SearchResults houses={allHouses}/>} />
          <Route path="searchedhouse/:id" element={<SearchedHouse houses={allHouses}/>} />
          <Route path="login" element={<Login/>} />
          <Route path="inquiries" element= {<InquiryList/>} />
          <Route path="signup" element={<Signup/>} /> 
    </Routes>

    </div>
  );
}

export default App;
