import React from "react";
import styled from "styled-components";
import cardData from "../../fixtures/stack.json";
export default function Payment() {
  return (
      <CardFrame className="card__frame">
        <Item className="card__item">
          <CardTitle className="card__title">
            <CardH1>Simple, easy payments</CardH1>
            <CardP>
              Building a business is hard. Getting paid shouldn't be.
            </CardP>
          </CardTitle>
          <CardPane className="card__pane">
            <ImageContainer className="image__container">
              <CardImage
                className="card__image"
                src="/images/Collect-Payments-for-Multiple-Channels-1.1.gif"
                alt=""
              />
            </ImageContainer>

            <CardContent className="card__content">
              <CardHeader className="card__header">
                Delight customers with a seamless payments experience
              </CardHeader>
              <CardCaption className="card__caption">
                Give your customers the gift of modern, frictionless, painless
                payments. Integrate Paystack once and let your customers pay you
                however they want.
              </CardCaption>
              <CardUl>
                {cardData.item1.map((item) => (
                  <div className="card__ul">
                    <img
                      src={item.image}
                      className="w-[15px] mr-0 p- check__icon"
                      alt=""
                    />
                    <CardList className="card__list">{item.list}</CardList>
                  </div>
                ))}
              </CardUl>

              <CardHeader2 className="card__header">
                Enjoy phenomenal transaction success rates
              </CardHeader2>
              <CardCaption2 className="card__caption">
                We automatically route payments through the most optimal
                channels, ensuring the highest transaction success rates in the
                market.
              </CardCaption2>
              <div className="flex">
                <img src="images/check.svg" alt="" className="w-[15px] mr-2" />
                <CardLink className="inner__link">Find out how we achieve success rates</CardLink>
              </div>
            </CardContent>
          </CardPane>
        </Item>
      </CardFrame>
  );
}

const Card = styled.div``;
const CardFrame = styled.div``;
const CardTitle = styled.div``;
const CardH1 = styled.h1``;
const CardP = styled.div``;

const ImageContainer = styled.div``;
const CardImage = styled.img``;
const CardContent = styled.div``;
const CardPane = styled.div``;
const Item = styled.div``;
const CardHeader = styled.h3`
  margin-bottom: 20px;
`;
const CardCaption = styled.p`
`;
const CardHeader2 = styled.h3`
  margin-top: 50px;
`;
const CardCaption2 = styled.p`
margin-bottom:30px;
`;
const CardUl = styled.ul`
  margin-top:20px;
  display: grid;
  grid-template-columns: repeat(2, 4fr);

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 4fr);
  }

`;
const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardList = styled.li`
  padding: 5px 10px;
`;
const CardLink = styled.a``;
