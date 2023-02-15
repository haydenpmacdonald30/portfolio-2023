import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";


const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(+false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(+true);
    }, 2000);
  }, []);
  return (
    <WordBanner>

    <motion.div className='banner' variants={banner}>
      <BannerRowTop title={"Hayden MacDonald"}  />
      <BannerRowCenter id={1} title={"ux | ui"} />
      <BannerRowBottom title={"design portfolio"} />
      {/* <h3>Hey there, I'm Hayden -- I create brands, design websites,  shape digital products.</h3>
                    <h3>I create brands, design websites,</h3>
                    <h3>& shape digital products.</h3> */}
    </motion.div>
    </WordBanner>
    
  );
};

const AnimatedLetters = ({ title, disabled, id }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter) => (
      <motion.span
        key={id}
        className='row-letter'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);


const BannerRowTop = ({ title, id }) => {
  return (

        <div className={"banner-row"}>
            <div className='row-col'>
                <AnimatedLetters key={id} title={title} />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 2,
                }}
                className='row-col'>
                <span className='row-message'>
        
                </span>
            </motion.div>
            </div>
  );
};

const BannerRowBottom = ({ title, id }) => {
  return (

        <div className={"banner-row"}>
            <div className='row-col'>
                <AnimatedLetters className='row-col-bottom' key={id} title={title} />
            </div>
            
            </div>
  );
};


const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner'>

        <AnimatedLetters title={title} />
       
      </motion.div>
    </div>
  );
};

export default Banner;



const WordBanner= styled.div`
    height: 500px;
    width: auto;
    color:white; 
    
    .banner {
    z-index: 100;

    .banner-row {
      overflow: hidden;
      display: flex;
      align-items: center;
      @media (max-width: $layout-breakpoint-medium) {
        &:first-child {
          margin-top: 48px;
        }
      }
      &.center {
    
        .row-letter {
          left: 0;
        }
      }
      &.right {
        justify-content: flex-end;
      }
      .row-col-bottom {
          font-size: 20px;
      }

      .row-title,
      .row-letter {
        font-size: 4rem;
        font-weight: 500;
        position: relative;
        letter-spacing: .5rem;
        display: inline-block;
        white-space: nowrap;
        @media (max-width: $layout-breakpoint-xsmall) {
          font-size: 13rem;
        }
      }
      .row-col, row-col-bottom {
        width: 50%;
        display: flex;

        @media (max-width: $layout-breakpoint-medium) {
          width: 70%;
        }
        @media (max-width: 1240px) {
          &:last-child {
            display: none;
          }
        }
        @media (max-width: $layout-breakpoint-xsmall) {
          width: 100%;
          justify-content: flex-start;
        }
        .row-message {
          font-weight: 500;
          font-size: 1.8rem;
          line-height: 2.6rem;
          width: 320px;
        }
      }
      .scroll {
        height: 160px;
        width: 160px;
        border-radius: 100%;
        background: $white;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        left: 160px;
        @media (max-width: $layout-breakpoint-medium) {
          left: 60px;
        }
        @media (max-width: 1240px) {
          display: none;
        }
        span {
          font-size: 18px;
          font-weight: 600;
          margin: 4px 0;
          @media (max-width: $layout-breakpoint-xsmall) {
            font-size: 10px;
            margin: 2px 0;
          }
        }
      }
    }
  }
  
  .transition-image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 800px;
      display: flex;
    }
    &.final {
      display: block;
      top: -300px;
      position: relative;
      width: 90%;
      margin: 0 auto;
      z-index: -100;
      @media (max-width: $layout-breakpoint-xsmall) {
        top: -56px;
      }
      img {
        width: 100%;
        max-width: 100%;
      }
    }
  }
  
`;





    