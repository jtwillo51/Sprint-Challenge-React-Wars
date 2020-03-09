import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import styled from "styled-components";

const Cardbox = styled.div`
  width: 20%;
  margin: 2%;
`;

function CharacterCard(props) {
  const {
    name,
    gender,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year
  } = props.data;

  return (
    <Cardbox>
      <Card>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{gender}</CardSubtitle>
        <CardBody>
          <CardText>height: {height}cm</CardText>
          <CardText>weight: {mass}kg</CardText>
          <CardText>hair color: {hair_color}</CardText>
          <CardText>skin color: {skin_color}</CardText>
          <CardText>eye color: {eye_color}</CardText>
          <CardText>birth year: {birth_year}</CardText>
        </CardBody>
      </Card>
    </Cardbox>
  );
}

export default CharacterCard;
