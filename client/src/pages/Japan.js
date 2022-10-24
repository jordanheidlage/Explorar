import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_LOCATION } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth';
import { saveLocationIds, getSavedLocationIds } from '../utils/localStorage';
import "./Japan.css"
// import './navindex'
const cherryBoat = require("../images/Japan/cherry boat.jpg")
const tea = require("../images/Japan/tea.jpg")
const teamLab = require("../images/Japan/teamlab 2.jpg")

function Japan () {

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
          name: "Japan",
          locationId: "2",
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
  <link rel="stylesheet" href="./pages/Japan.css" />
  <title>Japan</title>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
    integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S"
    crossOrigin="anonymous"
  />
  {/*home section start*/}
  <section className="home-section" id="home">
    <div className="home-bg" />
    <div className="container">
      <div className="row min-vh-100 align-items-center">
        <div className="home-text">
          <h1>Japan</h1>
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
          <h2 data-title="- Fun things to do in Japan -">
            Fun things to do in Japan
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="about-text" data-aos="fade-right">
          <h3>1. Cherry Blossoms</h3>
          <p>
            {" "}
            Undeniably, cherry blossoms are the best things to see in Japan.
            About 1,000 cherry blossom trees line along one of the best cherry
            blossoms viewing spots in Tokyo the Sumida river, covering the river
            bank with the pink carpet of petals.
          </p>
        </div>
        <div className="about-img1" data-aos="fade-left">
          <div className="img-box">
            <img src={cherryBoat} alt="about img" />
          </div>
        </div>
        <div className="row">
          <div className="about-text" data-aos="fade-right">
            <h3>2. Explore teamLab Borderless Museum</h3>
            <p>
              If Tokyo is on your Japan itinerary, be sure to reserve tickets to
              teamLab Borderless museum for an experience you won’t soon forget.
              And to maximize your time there and avoid the crowds as much as
              possible.
            </p>
          </div>
          <div className="about-img1" data-aos="fade-left">
            <div className="img-box">
              <img src={teamLab} alt="about img" />
            </div>
          </div>
          <div className="row">
            <div className="about-text" data-aos="fade-right">
              <h3>3. Go to a traditional Japanese tea house</h3>
              <p>
                The Japanese tea ceremony is preparing, serving, and drinking
                tea in a ritualistic and ceremonial way where it is used to
                promote wellbeing, mindfulness, and harmony. The tea itself is a
                powdered green tea called matcha.
              </p>
            </div>
            <div className="about-img1" data-aos="fade-left">
              <div className="img-box">
                <img src={tea} alt="about img" />
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
          <h3>.1 Aman Tokyo</h3>
          <p>
            From the heights of the Otemachi Tower, Aman Tokyo tempers urban
            dynamism with a profound atmosphere of serenity. Inspired by
            Japanese design tradition, with ikebana displays, washi paper doors
            and engawa platforms, the vast lobby, ryokan-style rooms and Aman
            Spa are all among the city’s largest
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
            <h3>2. HOSHINOYA Tokyo </h3>
            <p>
              HOSHINOYA Tokyo lies in the city's economic center, a short walk
              from Tokyo Station and the Imperial Palace. In contrast with its
              grand facade, the 17-story hotel offers a relaxed ambience with a
              sense of intimacy and surprise--qualities that are rooted in
              traditional Japanese hospitality.
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
              <h3>3. Asaba Ryokan </h3>
              <p>
                Asaba was built in 1675, amidst the oldest hotsprings on the Izu
                Peninsula. Its crowning feature is a bamboo forest bordering a
                magnificent pond
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
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="title text-2xl font-extrabold tracking-tight text-gray-900">
          <a href="#save" onClick={() => handleSaveLocation()}>
                Save
                <i className="fas fa-save" /> 
              </a>
          </h2>
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

export default Japan;