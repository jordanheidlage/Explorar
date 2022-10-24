import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_LOCATION } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth';
import { saveLocationIds, getSavedLocationIds } from '../utils/localStorage';
import "./Seychelles.css"

function Seychelles () {

    const [saveLocation, { error }] = useMutation(SAVE_LOCATION, {
        update(cache, { data: { saveLocation } }) {
          try {
            const { me } = cache.readQuery({ query: QUERY_ME });
    
            cache.writeQuery({
              query: QUERY_ME,
              data: { me: saveLocation.savedLocations },
            });
          } catch (e) {
            console.error(e);
          }
        },
      });
    
      const handleSaveLocation = async () => {
        const locationToSave = {
          name: "Seychelles",
          locationId: "3",
          image: "placeholder"
        }
    
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }
    
        try {
          console.log({locationToSave})
          const { data } = await saveLocation({
            variables: {
              ...locationToSave
            },
          });
        } catch (err) {
          console.error(err);
        }
      };

    return (
        <>
        
        <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./pages/seychelles.css" />
  <title>Seychelles</title>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
    integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S"
    crossOrigin="anonymous"
  />
  {/* header start*/}
  <header className="header">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="logo"></div>
        <button type="button" className="nav-toggler">
          <span />
        </button>
        <nav className="nav">
          <ul>
            <li className="nav-item" id="number1">
              <a href="#things">Things to do</a>
            </li>
            <li className="nav-item" id="number2">
              <a href="#hotels">Hotels to stay in</a>
            </li>
            <li className="nav-item" id="number3">
              <a href="#flights">Flights to catch</a>
            </li>
            <li id="number3">
              <a href="#save" onClick={() => handleSaveLocation()}>
                Save
                <i className="fas fa-save" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  {/*header end*/}
  {/*home section start*/}
  <section className="home-section" id="home">
    <div className="home-bg" />
    <div className="container">
      <div className="row min-vh-100 align-items-center">
        <div className="home-text">
          <h1>Seychelles</h1>
        </div>
      </div>
    </div>
  </section>
  {/*home section end*/}
  {/*--Things to do section start-*/}
  <section className="things-todo sec-padding" id="things">
    <div className="container">
      <div className="row">
        <div className="section-title">
          <h2 data-title="- Fun things to do in Seychelles -">
            Fun things to do in Seychelles
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="about-text" data-aos="fade-right">
          <h3>1. Meet Giant Tortoises</h3>
          <p>
            {" "}
            These delicate creatures are a pleasure to meet on either Curieuse
            Island or Cousin Island. The other spot these turtles exist is in
            the Galapagos Islands.You can take a boat ride to Curieuse Island
            where you'll discover turtles with extreme shell size. You can see
            more turtles on Cousin Island, as on the coral atoll called Aldabra.{" "}
          </p>
        </div>
        <div className="about-img1" data-aos="fade-left">
          <div className="img-box">
            <img src="./images/tort.jpg" alt="about img" />
          </div>
        </div>
        <div className="row">
          <div className="about-text" data-aos="fade-right">
            <h3>2. Go Snorkeling!</h3>
            <p>
              Enjoy swimming and detect the green turtles in the ocean universe
              of Bird island as it is a must for thrill-seekers and don't forget
              to post it on your social profile with hashtag things to do in
              Seychelles. Snatch this chance to encounter the excellence of
              submerged marine life and stunning amphibian animals.
            </p>
          </div>
          <div className="about-img1" data-aos="fade-left">
            <div className="img-box">
              <img src="./images/snorke.jpg" alt="about img" />
            </div>
          </div>
          <div className="row">
            <div className="about-text" data-aos="fade-right">
              <h3>3. Take a Helicopter Tour of Seychelles</h3>
              <p>
                The fabulous magnificence of the islands of Seychelles can best
                be explored from the air by taking an exciting helicopter ride
                around the islands. This helicopter tour of Seychelles allows
                you to witness the shades of white and turquoise blue at the
                Mahe islands due to the sand and water.
              </p>
            </div>
            <div className="about-img1" data-aos="fade-left">
              <div className="img-box">
                <img src="./images/helicopter.jpg" alt="about img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*about section end*/}
  <section className="things-todo1 sec-padding" id="hotels">
    <div className="container">
      <div className="row">
        <div className="section-title">
          <h2 data-title="Hotels to stay in" />
        </div>
      </div>
      <div className="row">
        <div className="about-text1" data-aos="fade-right">
          <h3>.1 Six Senses Zil Pasyon</h3>
          <p>
            Discover the ecological jewel of Seychelles and the private-island
            home to Six Senses Zil Pasyon. Coral-fringed beaches and massive
            granite rocks create an air of drama and beauty in this haven of
            perpetual summer. Step in tune with nature, swim with turtles, and
            enjoy an intimate destination that is a tropical ode to well-being
            and absolute comfort.
          </p>
        </div>
        <div className="about-img2" data-aos="fade-left">
          <div className="img-box">
            <div className="container">
              <div className="wrapper display:none">
                <div className="wrapper-holder">
                  <div id="slider-img-1" />
                  <div id="slider-img-2" />
                  <div id="slider-img-3" />
                  <div id="slider-img-4" />
                  <div id="slider-img-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="about-text1" data-aos="fade-right">
            <h3>2. KEMPINSKI SEYCHELLES RESORT BAIE LAZARE </h3>
            <p>
              Whitewashed abodes, cobalt-domed churches, and black- and red-sand
              beaches mark the isle of Santorini, an alluring Mediterranean
              oasis mired in mythology..
            </p>
          </div>
          <div className="about-img2" data-aos="fade-left">
            <div className="img-box">
              <div className="container">
                <div className="wrapper display:none">
                  <div className="wrapper-holder">
                    <div id="slider-img-6" />
                    <div id="slider-img-7" />
                    <div id="slider-img-8" />
                    <div id="slider-img-9" />
                    <div id="slider-img-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="about-text1" data-aos="fade-right">
              <h3>3. Anantara Maia Seychelles </h3>
              <p>
                Embrace restorative luxury in private villas edging porcelain
                sands framed by thirty acres of forest. Exotic tropical delights
                of Seychelles resorts are in abundance here where the resort
                blends seamlessly with the landscape.
              </p>
            </div>
            <div className="about-img2" data-aos="fade-left">
              <div className="img-box">
                <div className="container">
                  <div className="wrapper display:none">
                    <div className="wrapper-holder">
                      <div id="slider-img-11" />
                      <div id="slider-img-12" />
                      <div id="slider-img-13" />
                      <div id="slider-img-14" />
                      <div id="slider-img-15" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-- recipe section start--*/}
  <section className="recipe-section sec-padding" id="flights">
    <div className="container">
      <div className="row">
        <div className="section-title">
          <h2 data-title="Flights information" />
        </div>
      </div>
      <div className="row">
        <div className="recipe-tabs">
          <button
            type="button"
            className="recipe-tab-item active"
            data-title="buon appetito"
          ></button>
        </div>
      </div>
      <div className="container-card bg-stone-50">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="title text-2xl font-extrabold tracking-tight text-gray-900"></h2>
        </div>
      </div>
    </div>
  </section>
  {/*-- recipe section end--*/}
  {/* footer start*/}
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-item">
          <h3>Contact us</h3>
          <p>666-666-6666</p>
          <p>travel@gmail.com</p>
          <div className="social-links">
            <a href="#" className="icon-facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="icon-instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="icon-twitter">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="copyright">© 2022 - Desinged by Anisa</div>
      </div>
    </div>
  </footer>
  {/*footer end*/}
        </>
    )
}
export default Seychelles;