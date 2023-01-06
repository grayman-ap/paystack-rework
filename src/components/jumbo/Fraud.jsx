import React from "react";
import styled from "styled-components";
import cardData from "../../fixtures/stack.json";
export default function Fraud() {
  return (
      <CardFrame className="card__frame">
        <Item className="card__item">
          <CardPane className="card__pane fraud__pane">
            <ImageContainer className="image__container fraud__img">
              <CardImage 
                className="card__image"
                src="/images/loop.mp4"
                loop
                autoPlay={true}
                muted
                
              />
            </ImageContainer>

            <CardContent className="card__content">
              <CardHeader className="card__header">
              Protect yourself and your customers with advanced fraud detection
              </CardHeader>
              <CardCaption className="card__caption">
              Paystack’s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims.
              </CardCaption>

              <CardHeader2 className="card__header">
              Detailed reporting for accounting, reconciliation, and audits
              </CardHeader2>
              <CardCaption2 className="card__caption">
              Understand your customers’ purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports.
              </CardCaption2>
            
            </CardContent>
          </CardPane>
        </Item>
      </CardFrame>
  );
}


const CardFrame = styled.div``;

const ImageContainer = styled.div``;
const CardImage = styled.video``;
const CardContent = styled.div`
    margin-top:80px;
    @media (max-width: 600px){
        margin:0;
    }
`;
const CardPane = styled.div``;
const Item = styled.div``;
const CardHeader = styled.h3`
  margin-bottom: 20px;
`;
const CardCaption = styled.p``;
const CardHeader2 = styled.h3`
  margin-top: 50px;
`;
const CardCaption2 = styled.p``;
