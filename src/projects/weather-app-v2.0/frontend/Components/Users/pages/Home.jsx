import React, { useState } from 'react';
import SearchForm from '../../SearchForm';
import './Home.css';

const Home = () => {
  // How to get these 4 lines working?
  // const [location, setLocation] = useState('');

  // const onChangeLocation = (props) => {
  //   setLocation(props.locationData);
  // }

  return (
    <div className="home-location">
      Weather for Gold Coast, QLD, Australia
    </div>
  )
}

export default Home;