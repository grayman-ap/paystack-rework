import React from "react";
import styled from "styled-components";
import trustData from "../../fixtures/trust.json";
import {TrustFrame, TrustPane, TrustContent, TrustHeader,TrustTitle, TrustCaption, TrustCard, TrustItem, ImageContainer,TrustSub, TrustImage, TrustText, TrustP, TrustLink} from './styles/Trust'
export default function Trust() {
  return (
    
    <div className="trust">
    <TrustFrame className="trust__frame">
      <TrustPane className="trust__pane">
      <TrustContent className="trust__content">
        <TrustHeader className="trust__header">
          <TrustTitle className="trust__title">
            Trusted by 80,000+ businesses
          </TrustTitle>
          <TrustCaption className="trust__caption">
            Thousands of organizations of all sizes trust Paystack to grow their
            business.
          </TrustCaption>
        </TrustHeader>
        <TrustCard className="trust__card">
          {trustData.item.map((item) => (
           
                <TrustItem className="card_item">
              <ImageContainer className="img__cont">
                <TrustImage className="trust__image" src={item.image} />
              </ImageContainer>
              <TrustSub className="trust__sub">
                <TrustText className="trust__text">
                  {item.title}
                </TrustText>
                <TrustP className="trust__p">
                    {item.content}
                </TrustP>
                <TrustLink className="trust__link">
                <div className="card__ul mt-5">
                    <img
                      src={item.icon}
                      className="w-[15px] mr-2 p-0 check__icon"
                      alt=""
                    />
                    {item.list1}
                    </div>
                </TrustLink>
              </TrustSub>
              </TrustItem>
           
          ))}
        </TrustCard>
        </TrustContent>
      </TrustPane>
    </TrustFrame>
    </div>

  );
}
