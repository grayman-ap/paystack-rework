import React from "react";
import styled from "styled-components";
import trustData from "../../fixtures/trust.json";
import {
  TrustFrame,
  TrustPane,
  TrustContent,
  TrustHeader,
  TrustTitle,
  TrustCaption,
  TrustCard,
  TrustItem,
  ImageContainer,
  TrustSub,
  TrustImg,
  PImage,
  TrustP,
  PLink,
  Pp,
  Info,
  PName
} from "./styles/Trust";
export default function Partner() {
  return (
    <div className="trust">
      <TrustFrame className="partner__frame">
        <TrustPane className="trust__pane">
          <TrustContent className="trust__content">
            <TrustHeader className="trust__header">
              <TrustTitle className="trust__title">
                Backed by strong global partners
              </TrustTitle>
              <TrustCaption className="trust__caption">
                Paystack is backed by nlkkllotable investors as well as some of
                the best payments companies on the planet.
              </TrustCaption>
            </TrustHeader>
            <TrustCard className="trust__card">
              {trustData.item3.map((item) => (
                <TrustItem className="card_item">
                  <ImageContainer className="img__cont">
                    <div className={item.class}>
                      <PImage
                        className="trust__image mb-5 p-2"
                        src={item.icon}
                      />
                    </div>
                  </ImageContainer>

                  <TrustSub className="trust__sub">
                    {/* <TrustText className="trust__text">
                  {item.title}
                </TrustText> */}
                    <TrustP className="trust__p">{item.content}</TrustP>
                    <PLink className="trust__link ">
                      <TrustImg>
                        <img
                          src={item.logo}
                          className="mr-2 p-0 check__icon rounded-full "
                          alt=""
                        />
                      </TrustImg>
                      <Info className="info">
                        <PName>{item.name}</PName>
                        <Pp>{item.caption}</Pp>
                      </Info>
                    </PLink>
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
