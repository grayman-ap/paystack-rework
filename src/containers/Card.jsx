import React from "react";
import { Card } from "../components/index";
import cardData from "../fixtures/stack.json";
export default function CardContainer() {
  return (
    <Card.Container>
      <Card.Div>
        <Card.Heading>Simple, easy payments</Card.Heading>
        <Card.Subtitle>
          Building a business is hard. Getting paid shouldn't be.
        </Card.Subtitle>
      </Card.Div>
      
        {cardData.item.map((item) => (
          <Card key={item.id} direction={item.direction}>
            <Card.Image src={item.image}></Card.Image>

            <Card.Pane>
            <Card.Frame>
              <Card.Header>{item.title}</Card.Header>
              <Card.Caption>{item.caption}</Card.Caption>
              <Card.Ul className="">
              
                <Card.List>{item.list1}</Card.List>
                <Card.List>{item.list2}</Card.List>
                <Card.List>{item.list3}</Card.List>
                <Card.List>{item.list4}</Card.List>
                
                
                <Card.List>{item.item5}</Card.List>
                <Card.List>{item.item6}</Card.List>
                <Card.List>{item.item7}</Card.List>
                <Card.List>{item.item8}</Card.List>
                
              </Card.Ul>

              <Card.Header>{item.title2}</Card.Header>
              <Card.Caption>{item.caption2}</Card.Caption>
              <Card.Link>{item.link}</Card.Link>
              </Card.Frame>
            </Card.Pane>
          </Card>
        ))}
        {cardData.item2.map((item) => (
          <Card key={item.id} direction={item.direction}>
            <Card.Video src={item.video} loop type="video/mp4"></Card.Video>

            <Card.Pane>
              <Card.Header>{item.title}</Card.Header>
              <Card.Caption>{item.caption}</Card.Caption>
              <Card.Header>{item.title2}</Card.Header>
              <Card.Caption>{item.caption2}</Card.Caption>
            </Card.Pane>
          </Card>
        ))}
      
    </Card.Container>
  );
}
