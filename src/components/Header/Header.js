import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
// import { DiCssdeck } from 'react-icons/di';
// import { DiCssTricks } from "react-icons/di";
import { GiBasketballBall } from "react-icons/gi";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "15px", }}>
        <GiBasketballBall size="3rem" /><FaCode size="3rem" /> <Span>Umar's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/locky-sum" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/salau-umar-532821179" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://x.com/umar_salau?s=21&t=2F-nJEURVmAMl7_vOlI_TQ" target="_blank">
      <RiTwitterXFill size="3rem" />
    </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
