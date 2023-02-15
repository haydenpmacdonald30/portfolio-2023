import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
   
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <Nav>
                <div className="navbar-container">
                    <div className='menu-icon' onClick={handleClick}>
                    <Button clicked={click} onClick={() => handleClick()}></Button>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>  
                        </li>
                        <li className='nav-item'>
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                   
                </div>
            </Nav>   
        </>
    )
}

export default Header;

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: white;
    color: black;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const Nav = styled.div`
    .navbar-container {
        background-color: transparent;
        justify-content: center;
        align-items: center;
        height: 50px;
        display: none;
        position: fixed;
        width: 100%;
        padding: 20px 0px;
        z-index: 100;
    }
    
    @media screen and (max-width: 960px) {
        .navbar-container {
            display: flex;
        }
      .NavbarItems {
        position: relative;
      }
    
      .nav-menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;
      }
    
      .nav-menu.active {
        background-color: rgb(248, 247, 242);
        border: 0.342305px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(27.3844px);
        left: 0;
        opacity: 1;
        height: 100vh;
        object-fit: contain;
        flex-direction: column;
        justify-content: center;
        transition: all 0.5s ease;
        z-index: 1;
      }
      
      ul, li {
          list-style: none;
      }
      .nav-links {
        text-align: center;
        padding-top: 2rem;
        width: 100%;
        display: table;
      }
    
      .nav-links:hover {
        background-color: rgb(248, 247, 242);
        color: #242424;
        border-radius: 0;
      }
    
      .navbar-logo {
        height: 25px;
        width: auto;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(25%, 50%);
      }
  
      .fa-window-close {
        color: white;
      }
    
      .menu-icon {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
      }
    
      .fa-times {
        color: #fff;
        font-size: 2rem;
      }
    
      .nav-links-mobile {
        display: block;
        text-align: center;
        margin: 2rem auto;
        border-radius: 4px;
        width: 80%;
        text-decoration: none;
        font-size: 1.5rem;
        background-color: transparent;
        color: rgb(248, 247, 242);
        padding: 14px 20px;
        border: 1px solid rgb(248, 247, 242);
        transition: all 0.3s ease-out;
      }
    
      .nav-links-mobile:hover {
        background: rgb(248, 247, 242);
        color: #242424;
        transition: 250ms;
      }
    }
    
`