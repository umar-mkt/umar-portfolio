import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <h6>Hey, I'm Umar</h6> Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        Welcome to my world where code creates reality. Explore my journey in
        web development to get a glimpse of how I turn digital dreams into
        reality, and discover how I can help bring your ideas vividly to life
      </SectionText>
      <a
        href="https://api.whatsapp.com/send?phone=9020151627&text=Hello%20Umar,%20I'm%20interested%20in%20your%20web%20development%20services.%20i%20would%20like%20to%20know%20more%20about%20how%20we%20can%20work%20together?%20%F0%9F%92%BB"
        target="_blank"
      >
        <Button>Contact Me</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
