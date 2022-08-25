import React from 'react'
import { FaBehance, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import{
    FooterContainer,
    FooterWrap,
    SocialIcons,
    SocialMediaWrap,
    SocialLogo,
    SocialIconLink,
    SocialMedia
} from './FooterElements';
const Footer = ()  => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
            <SocialMediaWrap>
                <SocialIcons>
                <SocialLogo to ='/'>Pizza</SocialLogo>
                <SocialIconLink href="/" target ="_blank"  aria-label="Facebook">
                    <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink href="/" target ="_blank"  aria-label="Twitter">
                    <FaTwitter/>
                </SocialIconLink>
                <SocialIconLink href="/" target ="_blank"  aria-label="Instagram">
                    <FaInstagram/>
                </SocialIconLink>
                <SocialIconLink href="/" target ="_blank"  aria-label="Behance">
                    <FaBehance/>
                </SocialIconLink>
                <SocialIconLink href="/" target ="_blank"  aria-label="Youtube">
                    <FaYoutube/>
                </SocialIconLink>
                <SocialIconLink href="/" target ="_blank"  aria-label="Linkedin">
                    <FaLinkedin/>
                </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;