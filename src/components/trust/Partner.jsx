import React from "react";
import styled from "styled-components";
import trustData from "../../fixtures/trust.json";
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
          Paystack is backed by nlkkllotable investors as well as some of the best payments companies on the planet.
          </TrustCaption>
        </TrustHeader>
        <TrustCard className="trust__card">
          {trustData.item3.map((item) => (
            
                <TrustItem className="card_item">
              <ImageContainer className="img__cont">
              <div className={item.class}>
                <TrustImage className="trust__image mb-5 p-2" src={item.icon} />
                </div>
              </ImageContainer>
             
              <TrustSub className="trust__sub">
                {/* <TrustText className="trust__text">
                  {item.title}
                </TrustText> */}
                <TrustP className="trust__p">
                    {item.content}
                </TrustP>
                <TrustLink className="trust__link ">
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
const TrustFrame = styled.div``;
const TrustPane = styled.div`

`;
const TrustHeader = styled.div``;
const TrustTitle = styled.h1``;
const TrustCaption = styled.p``;
const TrustCard = styled.div``;
const TrustContent = styled.div``;
const TrustItem = styled.div`
    height:100%;
`;
const ImageContainer = styled.div`
height:40%;
`;
const TrustImage = styled.img`
    width:25%;
    
   
`;
const TrustSub = styled.div``;
const Info = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`;
const TrustImg = styled.div``;
const TrustText = styled.h4``;
const TrustP = styled.p``;
const TrustLink = styled.div`
    display:flex;
    align-items:center;
   
    img{
      width:70px;
    }
`;
const PName = styled.h5`
margin-top:30px;
`;
const Pp = styled.p`
  font-size:10px;
`;