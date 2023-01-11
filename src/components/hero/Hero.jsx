import { PlayArrow } from "@mui/icons-material";
import React from "react";
import trustData from "../../fixtures/trust.json";
export default function Hero() {
  return (
    <section>
      <div className="heroContainer">
        <div className="hero__wrapper">
          <div className="column__content">
            <div className="top__flex">
              <div className="left_item">
                <h1>Modern online and offline payment for Africa</h1>
                <p>
                  Paystack help business in Africa get paid by anyone anywhere,
                  in the world
                </p>
                <div className="flex left__buttons mt-6">
                  <button
                    type="button"
                    className="try_button"
                    aria-label="Button for creating an account"
                  >
                    Create a free account
                  </button>
                  <a href="#" className="inner__link md:ml-6 p-3">
                    {" "}
                    or Contact Sales
                  </a>
                </div>
              </div>
              {/* <div className="right__flex"></div> */}
            </div>
           
            <div className="bottom__flex">
              <div className="left_item">
                <p>Trusted by over 70,000 business</p>
                <div className="inner__item">
                  {trustData.item4.map((item) => (
                    <div className="display-flex">
                      <img className="hero__image" src={item.image} alt={item.alt}/>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex__right">
                <p>Watch MTN Chief Transformation Officer, Olubayo Adekanmbi, discuss working with Paystack  </p>
                <img src="images/play.svg" alt="play-button" />
                <span><PlayArrow /> Play Video</span>
              </div>
            </div>
    
          </div>
       
        </div>
      </div>
    </section>
  );
}
