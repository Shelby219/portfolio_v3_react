import React, {Link} from 'react';
import {Background} from './styles.js';
import homeImage from '../imgs/lineDrawing.png';

function Home() {
  return (

    <Background>
        Home
        <img alt="portrait" src={homeImage} width="30%" style={{filter: "invert(0)", backgroundColor: "white" }} />
    </Background>
  );
}

export default Home;
