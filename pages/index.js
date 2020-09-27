import React, { useEffect } from 'react';
import Head from 'next/head';

import IconLogo from 'react-svg-loader!../icons/logo.svg';
import IconMenu from 'react-svg-loader!../icons/menu.svg';

import IconTelegram from 'react-svg-loader!../icons/telegram.svg';
import IconGithub from 'react-svg-loader!../icons/github.svg';
import IconPhone from 'react-svg-loader!../icons/phone.svg';
import IconSwipe from 'react-svg-loader!../icons/swipe.svg';

import { Slider } from '../components/Slider'
import { Accordion } from '../components/Accordion'
import { InfoCard } from '../components/InfoCard'

import * as gtag from '../lib/gtag'

import '../styles/styles.less'


export const config = { amp: 'hybrid' };

const HomePage = () => {
  useEffect(() => {
    gtag.event({
      action: 'home_page',
      category: 'mount',
      label: 'home_page_mounted',
    })
  }, []);

  return(
    <>
      <Head>
        <title>Andrii                Vakhula</title>
        <meta name="description" content="Andrii Vakhula - Personal Site" />
        <meta name="keywords" content="Vakhula, Andrii, Front End, Developer" />
        <meta name="author" content="Andrii Vakhula" />
      </Head>
      {/* <div className="logo">
        <IconLogo/>
      </div> */}
      <div className="links">
        <a href="https://github.com/vakhula" title="my github">
          <IconGithub />
        </a>
        <a href="https://telegram.me/vakhula" title="my telegram">
          <IconTelegram />
        </a>
        <a href="tel:+380634853855" title="my telegram">
          <IconPhone />
        </a>
      </div>
      {/* <span className="iconswipe">
          <IconSwipe />
        </span> */}
      {/* <div className="menu">
        <input type='checkbox' id='nav-tog' />
        <label htmlFor='nav-tog'  className="drop-trigger">
          <span className="hidden">open resume</span>
          <IconMenu/>
        </label>
        <nav className="main-nav">
          <label htmlFor='nav-tog' className='nav-revert'>
            <span className="hidden">close resume</span>
          </label>
          <InfoCard />
          <Accordion />
        </nav>
      </div>
      <Slider /> */}
    </>
  )
}

export default HomePage;
