import React from "react";
import "./Home.css";
import Product from "./Product";

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
            id="1"
            title="The Lean Startup"
            price={14.79}
            image="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg"
            rating={3}
          />

          <Product
            id="2"
            title="Soft Beaded Jump Rope"
            price={12.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6W6uJVlp6xPwgLCYv9GQ4R10nyjiH2lq2kA&usqp=CAU"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Samsung Mixer"
            price={199.99}
            image="https://m.media-amazon.com/images/I/71V2DtObsPL._AC_UY218_.jpg"
            rating={3}
          />

          <Product
            id="4"
            title="Amazon Echo (3rd generation)"
            price={98.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-k7W1JVdIP_yX_XGXvwDfRl4N1x8EuDKwcg&usqp=CAU"
            rating={5}
          />
          <Product
            id="5"
            title="Revlon Super Lustrous Lipstick"
            price={4.75}
            image="https://m.media-amazon.com/images/I/41e7SogchPL._AC_UL320_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Mint Plant"
            price={15.75}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr7t1ZpslGSS5tACT0yvhbA32Vy9ZPQdMv7w&usqp=CAU"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
