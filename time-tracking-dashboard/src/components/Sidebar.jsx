import React from 'react';
import styled from 'styled-components';
import images from '../assets/images/Images';

const Heading = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  color: white;
`

const Name = styled.span`
  display: block;
  font-size: 2rem; 
`

const Button = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--desaturated-blue);
  cursor: pointer;

  &.active {
    color: white;
  }
`

const Container = styled.div`
  background-color: var(--dark-blue);
  border-radius: .5rem;
`

const HeadingContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  background-color: var(--blue);
  border-radius: .5rem;

  @media (min-width: 1024px) {
    padding-bottom: 6rem;
    align-items: flex-start;
    flex-direction: column;
  }
`

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  padding: 1.5rem;

  @media (min-width: 1024px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

const Avatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border: 3px solid white;
  border-radius: 50%;
`

export default function Sidebar({onClick, timeframe}) {
  return (
    <Container>
      <HeadingContainer>
        <Avatar src={images.avatar} alt=""/>
        <Heading>Report for <Name>Jeremy Robson</Name></Heading>
      </HeadingContainer>
      <Menu>
        <Button onClick={onClick} className={timeframe === 'daily' && 'active'} value='daily'>Daily</Button>
        <Button onClick={onClick} className={timeframe === 'weekly' && 'active'} value='weekly'>Weekly</Button>
        <Button onClick={onClick} className={timeframe === 'monthly' && 'active'} value='monthly'>Monthly</Button>
      </Menu>
    </Container>
  );
}
