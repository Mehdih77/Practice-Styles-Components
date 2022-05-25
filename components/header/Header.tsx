import Link from "next/link";
import styled, { css, keyframes } from "styled-components";

//TODO: check media query

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
const Logo = styled.img`
  width: 181px;
  height: 60px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  & > img {
    margin-right: 72px;
  }
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 56px;
  margin-right: 36px;
  img {
    width: 22px;
    height: 27px;
  }
`;

const BasketButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 146px;
  height: 56px;
  color: #000;
  background: #fff;
  border-radius: 12px;
  padding: 25px 12px;
  font-size: 20px;
  font-weight: bold;
  /* transition: 0.3s ease-in-out background; */
  span {
    margin-top: 6px;
  }
  img {
    width: 26px;
    height: 27px;
    margin-right: 12px;
  }
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

          <Actions>
            <img src={`/images/common/flag.svg`} alt="Porta Persa" />

            <Link href="/registerAndLogin">
              <LoginButton className="btn">
                <img src={`/images/common/user.svg`} alt="Porta Persa" />
              </LoginButton>
            </Link>

            <BasketButton className="btn">
              <img src={`/images/common/basket.svg`} alt="Porta Persa" />
              <span>799.99 $</span>
            </BasketButton>
          </Actions>

          {/* <div className={styles.burgerBar} onClick={openNav}>
            <img src="/images/landing/burger.svg" alt="x" />
          </div> */}
        </Navbar>
      </HeaderWrapper>
    </>
  );
};

export default Header;
