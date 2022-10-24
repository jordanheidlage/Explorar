import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_LOCATION } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth';
import { saveLocationIds, getSavedLocationIds } from '../utils/localStorage';
import "./Greece.css"
import { searchFlightInfo } from '../utils/API';
// import './navindex'
const mus = require("../images/Greece/mus.png")
const epi = require("../images/Greece/epi 4.jpg")
const mete = require("../images/Greece/mete.jpeg")
const greek = require("../images/Greece/greek food.jpeg")


function Greece () {
  
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
          name: "Greece",
          locationId: "6",
          image: "https://cdn.britannica.com/49/1049-004-AE4BAD3E/Flag-Greece.jpg"
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
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
    integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S"
    crossOrigin="anonymous"
  />
  <title>Greece</title>
  {/*home section start*/}
  <section className="home-section" id="home">
    <div className="home-bg" />
    <div className="container">
      <div className="row min-vh-100 align-items-center">
        <div className="home-text">
          <h1>Greece</h1>
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
          <h2 data-title="- Fun things to do in Greece -">
            Fun things to do in Greece
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="about-text" data-aos="fade-right">
          <h3>
            1. Discover the Acropolis Museum
            <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
          </h3>
          <p>
            One of the most popular modern attractions in Athens is the
            Acropolis Museum which opened in 2009. You will know the building
            when you see it as it’s made of cutting edge glass and steel and
            houses some of the most famous artifacts in Greece.
          </p>
        </div>
        <div className="about-img1" data-aos="fade-left">
          <div className="img-box">
            <img src={mus} alt="about img" />
          </div>
        </div>
        <div className="row">
          <div className="about-text" data-aos="fade-right">
            <h3>
              2. Marvel at the Epidaurus Theater
              <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
            </h3>
            <p>
              In Epidaurus in the region of Argolis is the Epidaurus Theater, a
              ceremonial space that is dedicated to the famous god of medicine,
              Asclepius.The Sanctuary of Asclepius is located next to the
              theater, and you can visit both at the same time.
            </p>
          </div>
          <div className="about-img1" data-aos="fade-left">
            <div className="img-box">
              <img src={epi} alt="about img" />
            </div>
          </div>
          <div className="row">
            <div className="about-text" data-aos="fade-right">
              <h3>3.Visit the monasteries of Meteora</h3>
              <p>
                Meteora is known for its monasteries that sit on top of towering
                rock formations. Meteora is crowded with ancient boulders and
                monolithic pillars and this is also a UNESCO World Heritage Site
                as the rock formations offer one of the most haunting and
                beautiful landscapes in all of Europe.
              </p>
            </div>
            <div className="about-img1" data-aos="fade-left">
              <div className="img-box">
                <img src={mete} alt="about img" />
              </div>
            </div>
            <div className="row">
              <div className="about-text" data-aos="fade-right">
                <h3>4.Try out Greek cuisine!</h3>
                <p>
                  While Greece is widely known for its fascinating history,
                  enchanting islands, and magnificent weather, it is also known
                  to have some of the tastiest food in the world! With age-old
                  recipes, Greek cuisine has been influenced by Middle Eastern,
                  Italian, and Ottoman cultures.
                </p>
              </div>
              <div className="about-img" data-aos="fade-left">
                <div className="img-box">
                  <img src={greek} alt="about img" />
                </div>
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
          <h3>.1 Cave Tagoos, Mykonos</h3>
          <p>
            Within proximity of Chora in Mykonos, the awarded hotel Cavo Tagoo
            features an infinity pool with a 100 feet aquarium bar, and a fully
            equipped spa with indoor pool. Most rooms enjoy sea views.
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
            <h3>2. Grace Hotel, Auberge Resorts Collection </h3>
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
              <h3>3. Blue palace resort, elounda, Crete </h3>
              <p>
                Wild beauty. Unrivaled island style. A place where you can sense
                an older, truer more timeless Greece. Blue Palace is a patchwork
                of pink-hued stone and earthy tones, flowing into the landscape.
                Dotted throughout the resort among fragrant gardens, the
                bungalows, suites, &amp; villas, are your personal sanctuaries
                with spectacular views of the Aegean Sea and Spinalonga Island.
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
          <h2 className="title text-2xl font-extrabold tracking-tight text-gray-900">
          <a href="#save" onClick={() => handleSaveLocation()}>
                Save
                <i className="fas fa-save" /> 
              </a>
          </h2>
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
)}


export default Greece;