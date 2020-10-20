import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1234561"
            title="The Lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={96.37}
            rating={5}
          />
          <Product
            id="1234562"
            title="KCREAM Gaming Chair PC Computer Video Game Racing Gamer Chair High Back Reclining Executive Ergonomic Desk Office Chair (Red)"
            image="https://m.media-amazon.com/images/I/81LiFP06qCL._AC_UL480_FMwebp_QL65_.jpg"
            price={179.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1234563"
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
            image="https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
            price={2099}
            rating={5}
          />
          <Product
            id="1234564"
            title="Vospeed Stand Mixer, 7.5 QT 660W 6-Speed Electric Food Mixer Kitchen with Stainless Steel Bowl, Beater, Hook, Whisk,Dishwasher Safe (Black)"
            image="https://m.media-amazon.com/images/I/51f2u7uQJyL._AC_UY327_FMwebp_QL65_.jpg"
            price={129.95}
            rating={5}
          />
          <Product
            id="1234565"
            title="Certified Refurbished Echo (2nd Generation) - Smart speaker with Alexa - Charcoal Fabric"
            image="https://m.media-amazon.com/images/I/61yI7vWa83L._AC_UY327_FMwebp_QL65_.jpg"
            price={79.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345656"
            title="SAMSUNG 85-inch Class QLED Q90T Series - 4K UHD Direct Full Array 20X Quantum HDR 16X Smart TV with Alexa Built-in (QN85Q90TAFXZA, 2020 Model)"
            image="https://m.media-amazon.com/images/I/61pzhWiGSbL._AC_UY327_FMwebp_QL65_.jpg"
            price={3539.95}
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
