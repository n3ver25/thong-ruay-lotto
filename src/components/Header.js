import * as React from 'react'
import { Link } from 'gatsby'
import logo from '../images/thonglottologo-logo.png'
import styled from 'styled-components'

const TestStyled = styled.img`
  max-height: 152px;
  max-width: 239px;
  cursor: pointer;
  width: 100%;
  @media (max-width: 767px) {
    max-height: 46px;
    max-width: 73px;
  }
`

const SizeHeader = styled.header`
  height: 223px;
  @media (max-width: 767px) {
    height: 67px;
  }
`
const Font = styled(Link)`
  color: white !important;
`
const Page = styled.div`
  display: flex;
  place-content: center;
  align-items: flex-end;

  @media (max-width: 1025px) {
    justify-content: space-between;
  }
`

const CustomizeUl = styled.ul`
  margin: 0 15px;
  @media (max-width: 1025px) {
    display: none;
  }
`

const HambergerOptimize = styled.span`
  align-self: center;
  margin: 0 10px;
  display: none;
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 1025px) {
    display: block;
  }
`

const ResgisterButton = styled.div`
  display: grid;
  margin-left: 40px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
`

const OptimizeButtonRegister = styled.button`
  border: none;
  cursor: pointer;
  max-width: 115px;
  height: 53px;
  padding: 0 5px;
  width: 100%;
  background: #bf0015;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  color: white;
  min-width: fit-content;
  @media (max-width: 1160px) {
    margin-left: 3;
  }
  @media (max-width: 767px) {
    font-size: 8px;
    line-height: 15px;
    height: 22px;
  }
`

const OptimizeButton = styled.button`
  border: none;
  max-width: 115px;
  height: 53px;
  padding: 0 5px;
  width: 100%;
  background: #bf0015;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  @media (max-width: 1160px) {
    margin-left: 0;
  }
  @media (max-width: 767px) {
    font-size: 8px;
    line-height: 15px;
    height: 22px;
  }
`

const PositionButton = styled.div`
  display: flex;
`

export const Header = ({ isHomepage, setNavBar }) => {
  const homepageClass = isHomepage ? 'homepage-header' : ''

  return (
    <SizeHeader className={`site-header ${homepageClass}`}>
      <Page>
        <Link to="/">
          <div className="logo">
            <TestStyled src={logo} alt="thonglotto-logo" />
          </div>
        </Link>
        <nav>
          <CustomizeUl>
            <li>
              <Font to="/">?????????????????????</Font>
            </li>
            <li>
              <Font to="/announce">??????????????????</Font>
            </li>
            <li>
              <Font to="/promotion">???????????????????????????</Font>
            </li>
            <li>
              <Font to="/manual_user">?????????????????????????????????????????????</Font>
            </li>
            <li>
              <Font to="/rules">???????????????</Font>
            </li>
            <li>
              <Font to="/about">????????????????????????????????????</Font>
            </li>
            <li>
              <Font to="/contact">???????????????????????????</Font>
            </li>
          </CustomizeUl>
        </nav>
        <PositionButton>
          <ResgisterButton>
            <a href="https://www.thonglotto.com/">
              <OptimizeButton> ?????????????????????????????????</OptimizeButton>
            </a>
            <a href="https://www.thonglotto.com/member/c13699">
              <OptimizeButtonRegister>?????????????????????????????????</OptimizeButtonRegister>
            </a>
          </ResgisterButton>

          <HambergerOptimize onClick={() => setNavBar(true)}>
            &#9776;
          </HambergerOptimize>
        </PositionButton>
      </Page>
    </SizeHeader>
  )
}
