import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Nav = () => {
  const [show, setShow] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate()
  const { pathname } = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll

    )
    return () => {
      window.removeEventListener("scroll", () => { })
    }
  }, [])



  const handleScroll = () => {
    if (window.scrollY > 35) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  const handleChange = (event) => {
    setSearchValue(event.target.value)
    navigate(`/search?q=${event.target.value}`)
  }

  return (
    <NavWrapper show={show} >
      <Logo>
        <img
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
      {pathname === "/" ? <Login>Login</Login> : <Input value={searchValue} onChange={handleChange} className='search_input' type='text' placeholder='검색어를 입력해주세요.' />}
    </NavWrapper>
  )
}

export default Nav


const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    transition: all 0.2s ease 0s;
  
    &:hover {
      background-color: #f9f9f9;
      color: gray;
      border-color: transparent;
    }
  `;

const Input = styled.input`
      position: fixed;
      left: 50%;
      transform: translate(-50%, 0);
      background-color: rgba(0,0,0, 0.582);
      border-radius: 5px;
      color: white; 
      padding: 5px;
      border: none;
  `;


const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${(props) => props.show ? "#090b13" : "transparent"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;


const Logo = styled.a`
  padding:0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`


// const DropDown = styled.div`
//   position: absolute;
//   top: 48px;
//   right: 0px;
//   background: rgb(19, 19, 19);
//   border: 1px solid rgba(151, 151, 151, 0.34);
//   border-radius:  4px;
//   box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
//   padding: 10px;
//   font-size: 14px;
//   letter-spacing: 3px;
//   width: 100%;
//   opacity: 0;
// `;

// const SignOut = styled.div`
//   position: relative;
//   height: 48px;
//   width: 48px;
//   display: flex;
//   cursor: pointer;
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     ${DropDown} {
//       opacity: 1;
//       transition-duration: 1s;
//     }
//   }
// `;

// const UserImg = styled.img`
//   border-radius: 50%;
//   width: 100%;
//   height: 100%;
// `;






