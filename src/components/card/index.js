import React from 'react'
import styled from 'styled-components/macro'
import { CheckBox } from '@material-ui/icons'
export default function Card({children, direction="row", ...restProps}){
    return(
        <Item  {...restProps}>
        <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Card.Container = function CardContainer({children, ...restProps}){
    return (
        <Container {...restProps}>{children}</Container>
    )
}
Card.Pane = function CardPane({children, ...restProps}){
    return (
        <Pane {...restProps}>{children}</Pane>
    )
}
Card.Frame = function CardFrame({children, ...restProps}){
    return (
        <Frame {...restProps}>{children}</Frame>
    )
}
Card.Div = function CardDiv({children, ...restProps}){
    return (
        <Div {...restProps}>{children}</Div>
    )
}
Card.Header = function CardHeader({children, ...restProps}){
    return (
        <Header {...restProps}>{children}</Header>
    )
}
Card.Heading = function CardHeading({children, ...restProps}){
    return (
        <Heading {...restProps}>{children}</Heading>
    )
}
Card.Subtitle = function CardSubtitle({children, ...restProps}){
    return (
        <Subtitle {...restProps}>{children}</Subtitle>
    )
}
Card.Content = function CardContent({children, ...restProps}){
    return (
        <Content {...restProps}>{children}</Content>
    )
}
Card.Image = function CardImage({ ...restProps}){
    return (
        <Image {...restProps}></Image>
    )
}
Card.Video = function CardVideo({ ...restProps}){
    return (
        <Video {...restProps}></Video>
    )
}
Card.Title = function CardTitle({children, ...restProps}){
    return (
        <Title {...restProps}>{children}</Title>
    )
}
Card.Caption = function CardCaption({children, ...restProps}){
    return (
        <Caption {...restProps}>{children}</Caption>
    )
}
Card.List = function CardList({children, ...restProps}){
    return (
        <List {...restProps}>{children}</List>
    )
}
Card.Ul = function CardUl({children, ...restProps}){
    return (
        <Ul {...restProps}>{children}</Ul>
    )
}
Card.Link = function CardLink({children, ...restProps}){
    return (
        <Link {...restProps}>{children}</Link>
    )
}

const Container = styled.div`

`;
const Item = styled.div`

`;
const Inner = styled.div`
display:flex;
flex-direction:${({direction}) => direction};
width:100%;
justify-content:space-between;
align-items:center;
margin:auto;
// max-width:1100px;
@media (max-width:1000px){
    flex-direction:column;
}
`;
const Frame = styled.div`
width:80%;
height:100vh;
display:flex;
justify-content:center;
flex-direction:column;
align-items:flex-start;

`;
const Div = styled.div`
margin:20px;
`;
const Pane = styled.div`

height:100vh;
padding:0 50px;


`;
const Header = styled.h1`
font-size:35px;
margin-bottom:25px;

`;
const Heading = styled.h1`
font-size:50px;
margin-bottom:10px;
`;
const Subtitle = styled.p`
font-weight:300;
font-size:20px;
`;
const Content = styled.div`
`;
const Image = styled.img`
margin:40px;
padding:40px;
height:100vh;

width:45%;
`;
const Video = styled.video`
width:45%;


`;
const Title = styled.h1`
font-family: Boing;
font-style: normal;
font-weight: 800;
color: rgb(1, 27, 51);
font-size: 36px;
line-height: 43.2px;
`;
const Caption = styled.p`
font-family: Graphik;
font-style: normal;
font-weight: 400;
color: rgb(1, 27, 51);
font-size: 19px;
line-height: 28.5px; 
margin-bottom:30px;  

`;
const List = styled.li`
margin-bottom:20px;
`;
const Ul = styled.ul`
width:100%;
display:grid;
grid-template-columns: repeat(2, 1fr);
grid-gap:10px;
// padding:30px;


`;
const Link = styled.a`

`;