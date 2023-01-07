import React from "react";
import styled from "styled-components";
import trustData from "../../fixtures/trust.json";
import {TrustFrame, TrustPane, TrustContent, TryHeader,TryTitle, TrustCaption,TryButton, TryItem, Button} from './styles/Trust'
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
