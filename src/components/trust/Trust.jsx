import React from "react";
import styled from "styled-components";
import trustData from "../../fixtures/trust.json";
export default function Trust() {
  return (
    <TrustFrame className="trust__frame">
      <TrustPane className="trust__pane">
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
          {trustData.map((item) => (
            <TrustContent className="trust__content">
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
                <div className="card__ul">
                    <img
                      src={item.icon}
                      className="w-[15px] mr-0 p-0 check__icon"
                      alt=""
                    />
                    {item.list1}
                    </div>
                </TrustLink>
              </TrustSub>
              </TrustItem>
            </TrustContent>
          ))}
        </TrustCard>
      </TrustPane>
    </TrustFrame>
  );
}
const TrustFrame = styled.div``;
const TrustPane = styled.div``;
const TrustHeader = styled.div``;
const TrustTitle = styled.h1``;
const TrustCaption = styled.p``;
const TrustCard = styled.div``;
const TrustContent = styled.div``;
const TrustItem = styled.div``;
const ImageContainer = styled.div``;
const TrustImage = styled.img``;
const TrustSub = styled.div``;
const TrustText = styled.h4``;
const TrustP = styled.p``;
const TrustLink = styled.a``;