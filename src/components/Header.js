import * as React from 'react'
import { Link } from 'gatsby'
import logo from '../images/thonglottologo-logo.png'
import styled from 'styled-components'

const TestStyled = styled.img`
  max-height: 152px;
  max-width: 239px;
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

const OptimizeButton = styled.div`
  max-width: 230px;
  height: 53px;
  padding: 0 5px;
  width: 100%;
  background: #bf0015;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  color: white;
  @media (max-width: 1160px) {
    margin-left: 0;
  }
  @media (max-width: 767px) {
    font-size: 8px;
    line-height: 15px;
    height: 22px;
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
  display: flex;
  align-items: center;
`

export const Header = ({ isHomepage, setNavBar }) => {
  const homepageClass = isHomepage ? 'homepage-header' : ''

  return (
    <SizeHeader className={`site-header ${homepageClass}`}>
      <Page>
        <Link to="/">
          <div className="logo">
            <TestStyled src={logo} alt="Logo" />
          </div>
        </Link>
        <nav>
          <CustomizeUl>
            <li>
              <Font to="/">หน้าแรก</Font>
            </li>
            <li>
              <Font to="/announce">ประกาศ</Font>
            </li>
            <li>
              <Font to="/promotion">โปรโมชั่น</Font>
            </li>
            <li>
              <Font to="/manual_user">คู่มือการใช้งาน</Font>
            </li>
            <li>
              <Font to="/rules">กติกา</Font>
            </li>
            <li>
              <Font to="/about">เกี่ยวกับเรา</Font>
            </li>
            <li>
              <Font to="/contact">ติดต่อเรา</Font>
            </li>
          </CustomizeUl>
        </nav>
        <ResgisterButton>
          <OptimizeButton>สมัครสมาชิก / เข้าสู่ระบบ</OptimizeButton>
          <HambergerOptimize onClick={() => setNavBar(true)}>
            &#9776;
          </HambergerOptimize>
        </ResgisterButton>
      </Page>
    </SizeHeader>
  )
}
