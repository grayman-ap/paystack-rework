import React from "react";
import styled from "styled-components";
import trustData from "../../fixtures/trust.json";
export default function Try() {
  return (
    <div className="trust">
      <TrustFrame className="try__frame">
        <TrustPane className="trust__pane">
          <TrustContent className="trust__content">
            <TryHeader className="trust__header">
              <TrustCaption className="trust__caption">
                Try Paystack Now
              </TrustCaption>
            
            <TryItem>
            <TryTitle className="trust__title  ">
                Start accepting payments in just 30 minutes
              </TryTitle>
                <TryButton>
                    <Button className="try_button">Create a free Account</Button>
                </TryButton>
                </TryItem>
                </TryHeader>
          </TrustContent>
        </TrustPane>
      </TrustFrame>
    </div>
  );
}
const TrustFrame = styled.div``;
const TrustPane = styled.div``;
const TryHeader = styled.div`
    display:flex;
    flex-direction:column;
    
    @media (max-width:600px){
        align-items:center;
    }
`;
const TryTitle = styled.h1`
    width:50%;
    @media (max-width:600px){
        text-align: center;
        width:100%;
        margin-bottom:30px;
    }

`;
const TrustCaption = styled.p``;
const TrustCard = styled.div``;
const TrustContent = styled.div``;
const TrustItem = styled.div`
  height: 100%;
`;
const ImageContainer = styled.div`
  height: 40%;
`;
const TrustImage = styled.img`
  width: 25%;
`;
const TrustSub = styled.div``;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TryButton = styled.div``;
const TryItem = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;

        @media (max-width:600px){
            flex-direction:column;
        }
`;
const Button = styled.button``;
const TrustImg = styled.div``;
const TrustText = styled.h4``;
const TrustP = styled.p``;
const TrustLink = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 70px;
  }
`;
const PName = styled.h5`
  margin-top: 30px;
`;
const Pp = styled.p`
  font-size: 10px;
`;
