import React, { useState } from 'react';
import SearchForm from '../../SearchForm';
import SearchForm2 from '../../SearchForm2';
import './Home.css';

const Home = () => {
  const [locationData, setLocationData] = useState('');
  
  // passed from child component
  const setLocation2 = (enteredLocation) => {
    setLocationData(enteredLocation);
  };

  return (
    <div className="home-location">
      Weather for { locationData }
      <SearchForm2 setLocation2={setLocation2} />
    </div>
  )
}

export default Home;