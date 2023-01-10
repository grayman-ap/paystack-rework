import React from "react";
import styled from "styled-components";
import cardData from "../../fixtures/stack.json";
export default function Api() {
  return (
      <CardFrame className="card__frame">
        <Item className="card__item">
         
          <CardPane className="card__pane">
            <CardContent className="card__content">
              <CardHeader className="card__header">
                Delight customers with a seamless payments experience
              </CardHeader>
              <CardCaption className="card__caption">
              Developers love our thorough, well-documented APIs that let you to build everything from simple weekend projects, to complex financial products serving hundreds of thousands of customers. If you can imagine it, you can build it with Paystack.
              </CardCaption>
              <CardUl>
                {cardData.item2.map((item) => (
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

             
              <div className="flex mt-5">
                <img src="images/check.svg" alt="" className="w-[15px] mr-2" />
                <CardLink className="inner__link">Paystack API Quickstart</CardLink>
              </div>
            </CardContent>
            <ImageContainer className="image__container">
              <CardImage
                className="card__image"
                src="/images/Robust-Suite-of-APIs-Opt.png"
                alt=""
              />
            </ImageContainer>
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
const CardPane = styled.div`
display:flex;
@media screen and (max-width:600px){
    flex-direction:column-reverse;
}

`;
const Item = styled.div``;
const CardHeader = styled.h3`
  margin-bottom: 20px;
`;
const CardCaption = styled.p``;
const CardHeader2 = styled.h3`
  margin-top: 50px;
`;
const CardCaption2 = styled.p``;
const CardUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 4fr);

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
  margin: 10px 0px;
`;
const CardLink = styled.a``;
