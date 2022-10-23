import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_LOCATION } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth';
import { saveLocationIds, getSavedLocationIds } from '../utils/localStorage';
import "./Indonesia.css"
const italyMall20 = require("../images/italy/itally mall 20.jpg")
const amalfi1 = require("../images/italy/amalfi 1.jpg")
const pizza1 = require("../images/italy/pizza 1.jpg")
const gondola2 = require("../images/italy/gondola 2.jpg")

import { searchFlightInfo } from '../utils/API';
function Indonesia () {

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
          name: "Indonesia",
          locationId: "5",
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
  <link rel="stylesheet" href="./css/Indonesia.css" />
  <title>Document</title>
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
              <a href="#save">
                Save
                <i className="fa-solid fa-bookmark" />
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
          <h1>Indonesia</h1>
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
            1. See the orangutans in the wild
            <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
          </h3>
          <p>
            Orangutan, (Malaysian: “person of the forest”).There are a variety
            of tours, national parks and rehabilitation and conservation centres
            that will get you closer to this remarkable species in Borneo.
          </p>
        </div>
        <div className="about-img1" data-aos="fade-left">
          <div className="img-box">
            <img src="./images/orangutan.jpg" alt="about img" />
          </div>
        </div>
        <div className="row">
          <div className="about-text" data-aos="fade-right">
            <h3>
              2. Dive in Raja Ampat{" "}
              <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
            </h3>
            <p>
              Raja Ampat, meaning ‘Four Kings’, is a cluster of islands off the
              coast of West Papua in Indonesia. An emerging tourist destination
              in recent years, this archipelago is known for housing some of the
              most diverse marine life on earth including thousands of species
              of fish, turtles, and rare coral. There are four major islands in
              the archipelago, some of which feature ancient rock paintings, and
              tourists can ride on traditional wooden boats between the various
              islands, run by the local fisherman.
            </p>
          </div>
          <div className="about-img1" data-aos="fade-left">
            <div className="img-box">
              <img src="./images/dive raja.jpg" alt="about img" />
            </div>
          </div>
          <div className="row">
            <div className="about-text" data-aos="fade-right">
              <h3>
                2. Check out the Sekumpul waterfalls{" "}
                <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
              </h3>
              <p>
                Treat your eyes to a waterfall descending straight from heaven!
                Sekumpul waterfall in Bali is nestled in a bamboo forest that
                adds to its divine aura. The waterfall is a collection of 7
                waterfalls falling from a different height in close proximity.
                Don’t forget to add this to your itinerary!
              </p>
            </div>
            <div className="about-img1" data-aos="fade-left">
              <div className="img-box">
                <img src="./images/waterfall 1.jpg" alt="about img" />
              </div>
            </div>
            <div className="row">
              <div className="about-text" data-aos="fade-right">
                <h3>
                  3. Sign up for a Surfing Lesson.. or Book a Surf Camp!
                  <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
                </h3>
                <p>
                  Bali is an ideal place to surf. The south coast's rolling
                  waves and serene beaches offer incredible waves for both
                  experienced and beginner surfers.Pros should check out the
                  Bukit Peninsula's outer break while surf camps guide newbies
                  to Bali's gentler lagoons. As a plus, there are so many surf
                  schools, rental shops and surf shops on the island as well .
                </p>
              </div>
              <div className="about-img" data-aos="fade-left">
                <div className="img-box">
                  <img src="./images/surfing 3.webp" alt="about img" />
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
          <h3>.1 Hanging gardens of Bali</h3>
          <p>
            The Hanging Gardens of Bali, a luxurious destination in the heart of
            the jungle. Situated near Payangan, a town village North of Ubud and
            resting in Indonesia Here is the linkk for this hotel{" "}
            <a href="[https://hanginggardensofbali.com/]" />
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
            <h3>2. The blackbird</h3>
            <p>
              Blackbird Hotel is a great choice for a stay in Parongpong. Guests
              can take a dip in the outdoor pool or grab a bite to eat at Sea
              Como Sea, which serves lunch and dinner.
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
              <h3>3. COMO Uma Canggu </h3>
              <p>
                COMO Uma Canggu is situated on Bali's south coast — a beachfront
                destination offering panoramic views of the soft volcanic sand
                and rolling waves. This luxury resort in Canggu — an area liked
                for its laid-back café scene and surf waves — offers stylish
                accommodation, exceptional cuisine, meaningful wellness and the
                same impeccable service COMO is known for across the globe.
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
    )
}

export default Indonesia;