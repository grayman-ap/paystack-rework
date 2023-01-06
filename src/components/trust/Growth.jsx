import React from "react";
import styled from "styled-components";
import trustData from "../../fixtures/trust.json";
export default function Growth() {
  return (

    <div className="trust">
    <TrustFrame className="growth__frame">
      <TrustPane className="trust__pane flex">
      <TrustContent className="trust__content">
        <TrustHeader className="trust__header">
          <TrustTitle className="trust__title">
            Powering growth for amazing businesses
          </TrustTitle>
          <TrustCaption className="trust__caption">
          Paystack is a growth engine for a new generation of innovative, forward-looking organizations operating in Africa.
          </TrustCaption>
        </TrustHeader>
        <div className="contain">
          {trustData.item2.map((item) => (
           <div className="display-grid">
           
                <img className="growth__image" src={item.image} />
            
           </div>
          ))}
       </div>
        </TrustContent>
      </TrustPane>
    </TrustFrame>
    </div>

  );
}
const TrustFrame = styled.div``;
const TrustPane = styled.div``;
const TrustHeader = styled.div``;
const TrustTitle = styled.h1``;
const TrustCaption = styled.p``;
const TrustContent = styled.div``;
