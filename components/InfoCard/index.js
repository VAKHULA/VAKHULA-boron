import React from 'react';

import { AmpWrap } from '../../pages/_document';

import './styles.less';

export const InfoCard = () => {
  return (
    <div className="card">
      <div>
        <AmpWrap
            nonAmp={
              <>
                <img className="avatar" src="./avatar.jpg" alt="avatar" />
              </>
            }
          />
      </div>
      <div>
        <div className="contacts">
          <a href="tel:+380634853855">(063) 485 38 55</a> | <a href="mailto:andrii.vakhula@gmail.com">andrii.vakhula@gmail.com</a>
        </div>
        <h2 className="name">Vakhula Andrii</h2>
        <div className="position">Front-End Developer</div>
      </div>
    </div>
  );
};
