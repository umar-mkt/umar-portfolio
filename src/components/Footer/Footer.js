import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+234 902 015 1627">+234 902 015 1627</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:salauumarmukhtar@gmail.com">
            salauumarmukhtar@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Coding Your Vision to Life...</Slogan>
        </CompanyContainer>

        <SocialContainer>
        <SocialIcons href="https://github.com/locky-sum" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/salau-umar-532821179" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://x.com/umar_salau?s=21&t=2F-nJEURVmAMl7_vOlI_TQ" target="_blank">
      <RiTwitterXFill size="3rem" />
    </SocialIcons>
        </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
