import React, { useState } from 'react';
import SearchForm from '../../SearchForm';
import SearchForm2 from '../../SearchForm2';
import './Home.css';

const Home = () => {
  // How to get these 4 lines working?
  // const [location, setLocation] = useState('');

  // const onChangeLocation = (props) => {
  //   setLocation(props.locationData);
  // }
  const [locationData, setLocationData] = useState('');
  // passed from child component
  const setLocation2 = (childdata) => {
    setLocationData(childdata);
  };

  return (
    <div className="home-location">
      Weather for { locationData }
      {/* Weather for Gold Coast, QLD, Australia */}
      <SearchForm2 setLocation2={setLocation2} />
    </div>
  )
}

export default Home;