import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_LOCATION } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth';
import { saveLocationIds, getSavedLocationIds } from '../utils/localStorage';
import "./Italy.css"
const italyMall20 = require("../images/italy/itally mall 20.jpg")
const amalfi1 = require("../images/italy/amalfi 1.jpg")
const pizza1 = require("../images/italy/pizza 1.jpg")
const gondola2 = require("../images/italy/gondola 2.jpg")

const Italy = () => {

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
      name: "Italy",
      locationId: "1",
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

  return(
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
              <a href="#save" onClick={() => handleSaveLocation()}>
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
          <h1>Italy</h1>
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
          <h2 data-title="- Fun things to do in Italy -">
            Fun things to do in Italy
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="about-text" data-aos="fade-right">
          <h3>
            1. Go shopping in Milan!
            <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
          </h3>
          <p>
            One of the best places you could shop at is no other than Italy's
            biggest and oldest shopping mall Galleria Vittorio Emanuele II. The
            architecturally stunning Galleria Vittorio Emanuele II is an ornate
            shopping arcade with a star-studded list of luxury emporiums,
            international chain and department stores, and trendy gourmet
            eateries. It's considered one of Milan's best shopping destinations.
          </p>
        </div>
        <div className="about-img1" data-aos="fade-left">
          <div className="img-box">
            <img src={italyMall20} alt="about img" />
          </div>
        </div>
        <div className="row">
          <div className="about-text" data-aos="fade-right">
            <h3>
              2. Take a boat trip along the Amalfi Coast
              <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
            </h3>
            <p>
              The gorgeous Amalfi Coast is one of the most scenic spots in
              Italy.Seemingly out of nowhere traditional Mediterranean villages
              will appear and boat tours usually come with food and drinks
              included so that you can snack on local produce as you take in the
              views.
            </p>
          </div>
          <div className="about-img" data-aos="fade-left">
            <div className="img-box">
              <img src={amalfi1} alt="about img" />
            </div>
          </div>
          <div className="row">
            <div className="about-text" data-aos="fade-right">
              <h3>
                3. Eat pizza in Naples
                <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
              </h3>
              <p>
                Naples has a range of pretty attractions in its own right but
                one of the main reasons to come here is to snack on its most
                famous foodstuff in the form of delicious pizza.
              </p>
            </div>
            <div className="about-img1" data-aos="fade-left">
              <div className="img-box">
                <img src={pizza1} alt="about img" />
              </div>
            </div>
            <div className="row">
              <div className="about-text" data-aos="fade-right">
                <h3>
                  4.Ride in a gondola in Venice
                  <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
                </h3>
                <p>
                  The gondolas plying the busy Grand Canal and the smaller
                  waterways of Venice are one of the most iconic images in the
                  world. They are the symbol of history, tradition, and romance
                  in the city on the lagoon, and a gondola ride in Venice ranks
                  among one of the most dreamed-about experiences for travelers.
                </p>
              </div>
              <div className="about-img" data-aos="fade-left">
                <div className="img-box">
                  <img src={gondola2} alt="about img" />
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
          <h3>.1 Grand hotel tremezzo , lake Como</h3>
          <p>
            The Tremezzo Hotels Grand Hotel Tremezzo offers beautiful views of
            the Bellagio and Lake Como in Tremezzina, Italy.
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
            <h3>2. IL Sereno Lago DI Como</h3>
            <p>
              Il Sereno Hotel breathes fresh air into the iconic, bucket list
              item, that is Lake Como. The, award-winning designer, Patricia
              Urquiola has combined the natural ambiance of the surrounding
              environment with comfort and luxury, resulting in a design that
              embodies all spectrum’s of luxurious accommodation.
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
              <h3>3. Le Sirenuse, Amalfi </h3>
              <p>
                Le Sirenuse is a wonderful place from which to enjoy the simple
                pleasures of Positano and the spectacular Amalfi Coast{" "}
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
            Recipes Picked
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
export default Italy
