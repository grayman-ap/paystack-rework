import React from "react";
import styled from "styled-components";
export default function CardSec() {
  return (
    <Card>
      <CardFrame>
        <CardTitle>
          <CardH1>Simple, easy payments</CardH1>
          <CardP>Building a business is hard. Getting paid shouldn't be.</CardP>
        </CardTitle>
        <CardPane>
          <ImageContainer>
            <CardImage
              src="/images/Collect-Payments-for-Multiple-Channels-1.1.gif"
              alt=""
            />
          </ImageContainer>
          <CardContent>
            <Item>
              <CardHeader>
                Delight customers with a seamless payments experience
              </CardHeader>
              <CardCaption>
                Give your customers the gift of modern, frictionless, painless
                payments. Integrate Paystack once and let your customers pay you
                however they want.
              </CardCaption>
              <CardUl>
                <CardList>Card</CardList>
                <CardList>Bank Account</CardList>
                <CardList>Bank Transfer</CardList>
                <CardList>USSD</CardList>

                <CardList>Apple Pay</CardList>
                <CardList>Visa QR</CardList>
                <CardList>Mobile Money</CardList>
                <CardList>POS</CardList>
              </CardUl>
            </Item>
            <Item>
              <CardHeader2>
                Enjoy phenomenal transaction success rates
              </CardHeader2>
              <CardCaption2>
                We automatically route payments through the most optimal
                channels, ensuring the highest transaction success rates in the
                market.
              </CardCaption2>
              <div className="flex">
                <img src="images/check.svg" alt="" className="w-[15px] mr-2" />
                <CardLink>Find out how we achieve success rates</CardLink>
              </div>
            </Item>
          </CardContent>
        </CardPane>
      </CardFrame>
    </Card>
  );
}

const Card = styled.div``;
const CardFrame = styled.div`
  margin: 20px;
`;
const CardTitle = styled.div`
  margin: 90px;
  @media (max-width: 1024px) {
    margin: 0px;
  }
`;
const CardH1 = styled.div`
  font-family: Boing;
  font-style: normal;
  font-weight: 800;
  color: rgb(1, 27, 51);
  font-size: 45px;
  line-height: 54px;
`;
const CardP = styled.div`
  font-family: Graphik;
  font-style: normal;
  font-weight: 400;
  color: rgb(1, 27, 51);
  font-size: 20px;
  line-height: 30px;
`;

const ImageContainer = styled.div`
  margin: 40px 0;
`;
const CardImage = styled.img`
  width: 100vw;

  @media (max-width: 1000px) {
  }
`;
const CardContent = styled.div`
  padding: 0 40px;
  margin: 0 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 769px) {
    padding: 0;
    margin: 0;
  }
  @media (max-width: 1024px) {
    padding: 0;
  }
`;
const CardPane = styled.div`
  display: flex;
  padding: 0px;
  margin: 90px;
  @media (max-width: 769px) {
    flex-direction: column;
    margin: 20px;
  }
  @media (max-width: 1024px) {
    margin: 0;
  }
`;
const Item = styled.div`
  margin: auto;
  width: 100%;
`;
const CardHeader = styled.h1`
  font-size: 35px;
  font-weight: normal;
  margin-bottom: 20px;
`;
const CardCaption = styled.p`
  font-family: Graphik;
  font-style: normal;
  font-weight: 400;
  color: rgb(1, 27, 51);
  font-size: 20px;
  line-height: 28.5px;
  margin-bottom: 30px;
`;
const CardHeader2 = styled.h1`
  font-size: 35px;
  font-weight: normal;
  margin-bottom: 20px;
  margin-top: 50px;
`;
const CardCaption2 = styled.p`
  font-family: Graphik;
  font-style: normal;
  font-weight: 400;
  color: rgb(1, 27, 51);
  font-size: 20px;
  line-height: 28.5px;
  margin-bottom: 30px;
`;
const CardUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 4fr);

  @media (max-width:769px){
    grid-template-columns: repeat(1, 4fr);
  }
`;
const List = styled.div`
  width: 100%;
`;
const CardList = styled.li`
  padding: 5px 20px;
  margin: 10px 0;
`;
const CardLink = styled.a`
  cursor: pointer;
  color: #3dbe62;
`;
