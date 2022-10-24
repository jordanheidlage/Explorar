import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_LOCATION } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth';
import { saveLocationIds, getSavedLocationIds } from '../utils/localStorage';
import "./Turkey.css"
import { searchFlightInfo } from '../utils/API';
const hammam = require("../images/Turkey/hammam 1.jpeg")
const baloon = require("../images/Turkey/baloon.jpeg")
const turkish = require("../images/Turkey/turkish food.jpg")
const sema = require("../images/Turkey/sema 1.jpeg")


function Turkey() {

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
          name: "Turkey",
          locationId: "4",
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
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
    integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S"
    crossOrigin="anonymous"
  />
 <title>Turkey</title>
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
              <a href="#save"onClick={() => handleSaveLocation()} >
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
          <h1>Turkey</h1>
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
          <h2 data-title=""> Fun things to do in Indonesia</h2>
        </div>
      </div>
      <div className="row">
        <div className="about-text" data-aos="fade-right">
          <h3>
            1. Scrub Up in a Hammam (Turkish Bath)
            <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
          </h3>
          <p>
            Getting soaped up and scrubbed down in a hamam (Turkish bath) is the
            traditional Turkish bathing experience that combines history and
            culture with pure pampering. These public baths were once an
            integral part of life in the Ottoman Era. Today, many of the more
            ornate surviving hammams are tourist attractions in themselves.
          </p>
        </div>
        <div className="about-img1" data-aos="fade-left">
          <div className="img-box">
            <img src={hammam} alt="about img" />
          </div>
        </div>
        <div className="row">
          <div className="about-text" data-aos="fade-right">
            <h3>
              2. Hot-Air Ballooning over Cappadocia{" "}
              <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
            </h3>
            <p>
              One of Turkey's top things to do, a hot-air balloon ride over
              Cappadocia provides astonishing panoramic vistas of this region's
              fantastical rock formations.Cappadocia is known as one of the
              world's top ballooning destinations.{" "}
            </p>
          </div>
          <div className="about-img1" data-aos="fade-left">
            <div className="img-box">
              <img src={baloon} alt="about img" />
            </div>
          </div>
          <div className="row">
            <div className="about-text" data-aos="fade-right">
              <h3>
                3. Join a Food Tour in Istanbul{" "}
              
              </h3>
              <p>
                Istanbul is foodie central, and there are few better ways of
                discovering a city's culture than through its food. Several
                local Istanbul tour companies run walking tours that focus on
                Istanbul's culinary heritage. They're an excellent way of
                supplementing your big-hitter sightseeing and getting to know
                the city on a more intimate level.
              </p>
            </div>
            <div className="about-img1" data-aos="fade-left">
              <div className="img-box">
                <img src={turkish} alt="about img" />
              </div>
            </div>
            <div className="row">
              <div className="about-text" data-aos="fade-right">
                <h3>
                  4. Watching a Whirling Dervish Ceremony (Sema)
                  <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
                </h3>
                <p>
                  The Mevlevi sect is a Sufi religious order that began under
                  Mevlana Celaleddin Rumi in 13th-century Konya. They're best
                  known for their religious practice of sema – a meditative
                  whirling ceremony.In Turkey, there are several places where
                  visitors can see a whirling dervish ceremony, though be aware
                  that most performances in tourist resort towns use
                  professional dancers not Mevlevi devotees.
                </p>
              </div>
              <div className="about-img" data-aos="fade-left">
                <div className="img-box">
                  <img src={sema} alt="about img" />
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
          <h3>.1 Delphin Imperial Hotel</h3>
          <p>
            Delphin Imperial Hotel Lara - Antalya Staying at Delphin Imperial
            Hotel Lara Imperial actually makes you feel that you are at home
            just by the magnificent shore of the Mediterranean Sea, Lara Beach.
            From our facility which is far about 15 km from Antalya, 10 km from
            the airport, the transportation for the shopping centres and going
            sightseeing is pretty much easy.
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
            <h3>2. Hotel Raffles Istanbul</h3>
            <p>
              Raffles Istanbul situates above the Bosphorus at the intersection
              of Istanbul’s best connections, perfectly located to experience
              this timeless place, located at the Zorlu Center – where high
              fashion, performance and art converge.
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
              <h3>3. Koza cave hotel </h3>
              <p>
                Bringing a new level of eco-inspired chic to Göreme, Koza Cave
                is a masterclass in stylish sustainable tourism. Passionate
                owner Derviş spent decades living in Holland and has
                incorporated Dutch eco-sensibility into every cave crevice of
                the 10 stunning rooms. Grey water is reused, and recycled
                materials and local handcrafted furniture are utilised in
                abundance to create sophisticated spaces.{" "}
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
          <h2 className="title text-2xl font-extrabold tracking-tight text-gray-900">
          {searchFlightInfo.length
            ? `Viewing ${searchFlightInfo.length} results:`
            : 'Search for a flight to begin'}
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

export default Turkey;