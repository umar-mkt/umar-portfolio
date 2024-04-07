import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { SiReactquery, SiHtml5, SiCss3,SiFirebase, SiFigma, SiAdobexd } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Icons
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I specialize in harnessing a variety of modern technologies to create
      exceptional digital experiences. My expertise includes, but is not limited
      to, the following technologies
    </SectionText>
    <List>
      <ListItem>
        <Icons>
        <SiReactquery size="3rem" />
        <SiHtml5 size="3rem" />
        <SiCss3 size="3rem" />
        </Icons>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with ReactJs, TailWindCSS, HTML5 & CSS3 </ListParagraph>
        </ListContainer>
        </ListItem>
        
        <ListItem>
          <Icons >
            <SiFigma size="3rem"  />
            <SiAdobexd size="3rem"  />
          </Icons>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>Experience with FIGMA & AdobeXD</ListParagraph>
          </ListContainer>
        </ListItem>
        
      <ListItem>
        <Icons >
          <SiFirebase size="3rem"  />
        </Icons>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with Firebase</ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
