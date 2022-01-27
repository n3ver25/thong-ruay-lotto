import * as React from 'react'
import { Link } from 'gatsby'
import logo from '../images/thonglottologo-logo.png'
import styled from 'styled-components'

const TestStyled = styled.img`
  height: 152px;
  width: 239px;
`

const SizeHeader = styled.header`
  height: 223px;
`
const Font = styled(Link)`
  color: white !important;
`
const Page = styled.div`
  display: flex;
  place-content: center;
  align-items: flex-end;
`

const OptimizeButton = styled.div`
  width: 230px;
  height: 53px;
  background: #bf0015;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  color:white;
`

const CustomizeUl = styled.ul`
margin:0 15px;
`

export const Header = ({ isHomepage }) => {
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
        <div>
          <OptimizeButton>สมัครสมาชิก / เข้าสู่ระบบ</OptimizeButton>
        </div>
      </Page>
    </SizeHeader>
  )
}
