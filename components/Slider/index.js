import React from 'react';

import './styles.less';

export const Slider = () => {
  return (
    <div className="content-slider">
        <div className="slider">
            <div className="mask">
                <ul>
                    <li>
                        <div className="quote">Work it harder</div>
                    </li>
                    <li>
                        <div className="quote">Make it better</div>
                    </li>
                    <li>
                        <div className="quote">Do it faster</div>
                    </li>
                    <li>
                        <div className="quote">Makes us stronger</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};