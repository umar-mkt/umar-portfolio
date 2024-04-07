import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Certifications', },
  { number: 10, text: 'Workshops Attended/Contributed', },
  { number: 10, text: 'Clients', },
  { number: 15, text: 'Web Projects'},
];

const Acomplishments = () => (
  <Section>
  <SectionTitle>
  My Achievements</SectionTitle>
  <Boxes>
  {data.map((card, index) => (
    <Box key={index}>
    <BoxNum>{card.number}+</BoxNum>
    <BoxText>{card.text}</BoxText>
    </Box>
  ))}</Boxes>
  
  </Section>
);

export default Acomplishments;
