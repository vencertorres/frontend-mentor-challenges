import React from 'react';
import styled from 'styled-components';
import images from '../assets/images/Images';

const Subheading = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  color: white;

  &::after {
    content: url(${images.ellipsis});
  }
`

const Current = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 300;
  color: white;
`

const Previous = styled.p`
  color: var(--pale-blue);
`

const CardText = styled.div`
  padding: 1.5rem;
  background-color: var(--dark-blue);
  border-radius: 1rem;
  margin-top: 3rem;
  transition: .3s ease-in;
`

const backgroundColor = {
  'work': '--work',
  'play': '--play',
  'study': '--study',
  'exercise': '--exercise',
  'social': '--social',
  'self-care': '--self-care',
};

const backgroundImage = {
  'work': images.work,
  'play': images.play,
  'study': images.study,
  'exercise': images.exercise,
  'social': images.social,
  'self-care': images.selfcare,
};

const StyledList = styled.li`
  background-color: var(${props => backgroundColor[props.className]});
  background-image: url(${props => backgroundImage[props.className]});
  background-repeat: no-repeat;
  background-position: top -.5rem right 1.5rem;
  border-radius: 1rem;
  cusor: pointer;

  &:hover {
    ${CardText} {
      background-color: var(--desaturated-blue);
      transition: .3s ease-out;
    }
  }
`

const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

function Time({timeframe, hours}) {
  function handleTimeFrame() {
    return {
      'daily': 'Day',
      'weekly': 'Week',
      'monthly': 'Month'
    }[timeframe];
  }

  return (
    <TimeContainer>
      <Current>{hours.current}{hours.current > 1 ? 'hrs' : 'hr'}</Current>
      <Previous>Last {handleTimeFrame()} - {hours.previous}{hours.previous > 1 ? 'hrs' : 'hr'}
    </Previous>
    </TimeContainer>
  );
}

function Title({title}) {
  return <Subheading>{title}</Subheading>;
}

export default function Card({item, timeframe}) {
  function handleHours() {
    return {
      current: item['timeframes'][timeframe]['current'],
      previous: item['timeframes'][timeframe]['previous']
    };
  }

  return (
    <StyledList className={item.title.toLowerCase().replace(' ', '-')}>
    <a href='#'>
      <CardText>
        <Title title={item.title} />
        <Time timeframe={timeframe} hours={handleHours()}/>
      </CardText>
    </a>
    </StyledList>
  );
}
