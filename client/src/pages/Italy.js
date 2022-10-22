import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_LOCATION } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth';
import { saveLocationIds, getSavedLocationIds } from '../utils/localStorage';



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
      // setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };

  return(
<>
  {/* Hello world */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
    integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="../css/Italy.css" />
  <title>Document</title>
  {/* header start*/}
  <header className="header">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="logo">
          <a href="#">
            <img src="./Food page/Images/tiny.png" />
          </a>
        </div>
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
          <h2 data-title="Fun things to do">Fun things to do in Italy</h2>
        </div>
      </div>
      <div className="row">
        <div className="about-text" data-aos="fade-right">
          <h3>
            1. Go shopping in Milan!
            <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
          </h3>
          <p>
            Italy is the home to most famous designer stores. And shopping for
            stores like Gucci, Bvlgri and so on has its perks. One it is a lot
            more cheaper!, two it is more authentic
          </p>
        </div>
        <div className="about-img" data-aos="fade-left">
          <div className="img-box">
            <img src="./images/mall milan.jpeg" alt="about img" />
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
              <img src="./images/amalfi.jpg" alt="about img" />
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
            <div className="about-img" data-aos="fade-left">
              <div className="img-box">
                <img src="./images/naples.jpg" alt="about img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*about section end*/}
  <section className="things-todo sec-padding" id="things">
    <div className="container">
      <div className="row">
        <div className="section-title">
          <h2 data-title="Fun things to do">Hotels to stay in</h2>
        </div>
      </div>
      <div className="row">
        <div className="about-text" data-aos="fade-right">
          <h3>
            -1 Grand hotel tremezzo , lake Como
            <a href="https://www.italynow.com/blog/5-italian-designer-brands-and-where-to-find-them-in-italy/" />
          </h3>
          <p>
            Italy is the home to most famous designer stores. And shopping for
            stores like Gucci, Bvlgri and so on has its perks. One it is a lot
            more cheaper!, two it is more authentic
          </p>
        </div>
        <div className="about-img" data-aos="fade-left">
          <div className="img-box">
            <img src="./images/hotel italy 1.jpg" alt="about img" />
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
              <img src="./images/amalfi.jpg" alt="about img" />
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
            <div className="about-img" data-aos="fade-left">
              <div className="img-box">
                <img src="./images/naples.jpg" alt="about img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-- recipe section start--*/}
  <section className="recipe-section sec-padding" id="hotels">
    <div className="container">
      <div className="row">
        <div className="section-title">
          <h2 data-title="Hotels to stay in" />
        </div>
      </div>
      <div className="row">
        <div className="recipe-tabs">
          <button
            type="button"
            className="recipe-tab-item active"
            data-title="buon appetito"
          >
           
          </button>
        </div>
      </div>
      <div className="container-card bg-stone-50">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="title text-2xl font-extrabold tracking-tight text-gray-900">
            Recipes Picked
          </h2>
          <div
            className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            id="recipeCard"
          >
            <h1 />
          </div>
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
