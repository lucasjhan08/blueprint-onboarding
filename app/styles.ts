import { GoPaperAirplane } from "react-icons/go";
import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Content = styled.div`
  max-width: 23.4375rem;
  height: 100%;
  background-color: #ffffff;
  position: relative;
  border: 0.0625rem solid black;
`;

export const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.125rem;
  background-color: #fafafa;
  box-shadow: 0 0.020625rem 0 0 #a6a6aa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  width: 1.5625rem;
  height: 1.625rem;
  flex-shrink: 0;
`;

export const HeaderText = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.004375rem;
  color: #262626;
  margin-left: 1rem;
  line-height: 1.125rem;
`;

export const Blueprint = styled.span`
  color: #0078e8;
`;

export const ContentScroll = styled.div`
  margin-top: 3.125rem;
  padding: 1rem;
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.625rem;
  margin-top: 0.6875rem;
`;

export const ShareIcon = styled(GoPaperAirplane)`
  margin-left: auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding-left: 0.625rem; */
  gap: 0.625rem;
`;

export const HeaderUsername = styled.div`
  font-family: "Poppins";
  font-size: 0.8125rem;
`;

export const HeaderSub = styled.div`
  font-family: "Poppins";
  font-size: 0.6875rem;
  font-weight: 300;
  color: grey;
`;

export const PostDesc = styled.div`
  font-family: "Poppins";
  font-size: 0.8125rem;
  font-weight: 300;
  margin-top: 0.6875rem;
`;

export const Footer = styled.div`
  display: flex;
  gap: 0.9375rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const FooterText = styled.p`
  font-family: "Poppins";
  font-size: 0.625rem;
  font-weight: 300;
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 0.9375rem;
`;

export const Divider = styled.div`
  width: calc(100% + 2rem);
  border: none;
  border-top: 0.0625rem solid #d9d9d9;
  margin: 1rem -1rem;
`;
