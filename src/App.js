
import './App.css';
/* import Navbar from './components/Navbar';
//import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar'; */
import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";



function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 9500)
  }, [])


  return (

    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <meta name="description" content="Matthew Olaka's portfolio website" />

      </Helmet>

      {
        loading ?
          <div class='loadingScreenContainer'>

            {/* <div class='spinner'>


              <PropagateLoader
                color={"#808080"}
                loading={loading}
                size={20}
              />
            </div> */}
            {/* <div class='text'>Loading</div> */}

            <div class="Iam">

              <p>Portfolio</p>
              <b>
                <div class="innerIam">
                  Designed<br />
                  Developed<br />
                  Deployed<br />
                  by Matthew Olaka

                </div>
              </b>

            </div>


          </div>



          :

          <Routes>

            <Route exact path="/" element={<Home />} />

          </Routes>
      }

    </>

  );
}

export default App;
