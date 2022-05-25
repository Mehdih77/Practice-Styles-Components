import Link from "next/link";
import styled, { css, keyframes } from "styled-components";

const HeaderWrapper = styled.nav`
  position: fixed;
  width: 100%;
  /* background: rgba(241, 241, 241, 0.5); */
  /* backdrop-filter: blur(16px); */
  z-index: 9999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const Navbar = styled.div`
  max-width: 1724px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 32px;
  height: 132px;
`;
const LargeNavigation = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding-right: 24px;
`;
const NavItem = styled.li`
  position: relative;
  overflow: hidden;
  padding: 54px 0;
  a {
    position: relative;
    min-width: 68px;
    padding: 0px 32px;
    text-decoration: none;
    color: #03060a;
    font-weight: 600;
    transition: 0.3s ease-out color;
    font-size: 20px;
    &::before {
      content: url("/images/common/Tower.svg");
      position: absolute;
      left: 50%;
      top: 300%;
      transform: translate(-50%, 0%);
      transition: 0.5s ease-in-out;
    }
    &:hover {
      &::before {
        top: 138%;
      }
    }
  }
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 159px;
  height: 48px;
  color: #fff !important;
  background: #3aa325;
  border-radius: 8px;
  padding: 12px 20px;
  margin-left: auto;
  cursor: pointer;
  transition: 0.3s ease-in-out background;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  img {
    width: 17px;
    height: 17px;
    margin-left: 10px;
  }
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
      ),
      #3aa325 !important;
  }
`;
const Logo = styled.img`
  width: 181px;
  height: 60px;
`;

const Header: React.FC = (props) => {
  return (
    <>
      <HeaderWrapper>
        <Navbar>
          <Link href="/">
            <Logo src="/images/common/Logo.svg" alt="Porta Persa" />
          </Link>
          <LargeNavigation>
            <NavItem>
              <Link href="/">Craft art</Link>
            </NavItem>
            <NavItem>
              <Link href="/academy">Pastry, Nuts & foods</Link>
            </NavItem>
            <NavItem>
              <Link href="/news">Contact us</Link>
            </NavItem>
            <NavItem>
              <Link href="/about">About us</Link>
            </NavItem>
            <NavItem>
              <Link href="/contact">Blog</Link>
            </NavItem>
          </LargeNavigation>

          <Link href="/registerAndLogin">
            <LoginButton>
              <img src={`/images/landing/login.svg`} alt="Porta Persa" />
              ورود | ثبت نام
            </LoginButton>
          </Link>

          {/* <div className={styles.burgerBar} onClick={openNav}>
            <img src="/images/landing/burger.svg" alt="x" />
          </div> */}
        </Navbar>
      </HeaderWrapper>
    </>
  );
};

export default Header;
