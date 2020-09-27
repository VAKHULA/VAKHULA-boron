import React, { useState,useEffect,useRef } from 'react';

import IcontTiangle from 'react-svg-loader!../../icons/triangle.svg';
import { attributes as experience } from '../../content/experience.md';
import './styles.less';

const c = [
    {
        title: 'experience',
        timeline: [
            {
                time: '2018 - present',
                desc: 'Scimus Solution – Lviv, Ukraine',
            },
            {
                time: '2006 – 2012',
                desc: '2012 – 2017 MANAGER/ENGINEER – Lviv, Ukraine',
            }
        ]

    },
    {
        title: 'EDUCATION',
        timeline: [
            {
                time: '2017',
                desc: 'FRONTEND COURSE – SKILLUP, Lviv, Ukraine',
            },
            {
                time: '2006 – 2012',
                desc: 'MASTERS IN CHEMISTRY – Ivan Franko National University of Lviv, Ukraine',
            }
        ]
    },
    {
        title: 'QUALIFICATION',
        content: 'Ability to meet the deadlines and deliverables ||         English: beginner'
    },
    {
        title: 'SKILLS',
        list: ['HTML5', 'CSS3', 'LESS', 'ES6', 'React', 'Redux', 'Webpack', 'NextJS']
    },
]

const AccordionItem = ({title, content, list, timeline, index }) => {
  let [isContentVisible, setContentVisible] = useState(false)
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.scrollIntoView({block: "start", behavior: "smooth"});
  });
    return (
        <div className="accordion_item" ref={inputEl}>
            <div
                className="heading"
                onClick={() => {
                    setContentVisible(isContentVisible = !isContentVisible)}
                }
                aria-controls={`#accordion-${index}`}
                aria-expanded={isContentVisible}
                id={`#control-${index}`}
            >
                <IcontTiangle className={`toggle_icon${isContentVisible ? ' selected' : ''}`} />
                <div className="title">
                    {title}
                </div>
            </div>
            <div
                className={`content${isContentVisible ? ' selected' : ''}`}
                aria-hidden={!isContentVisible}
                id={`accordion-${index}`}
            >
                <div>
                    {content &&
                        <p className="content">{content}</p>
                    }
                    {list &&
                        <ul className="skills">
                            {list.map((item, idx) => (
                                <li key={idx} className="skill">{item}</li>
                            ))}
                        </ul>
                    }
                    {timeline &&
                        <dl>
                            {timeline.map((item, idx) => (
                                <>
                                    <dt key={idx}>
                                        <time>{item.time}</time>
                                    </dt>
                                    <dd>{item.desc}</dd>
                                </>
                            ))}
                        </dl>
                    }
                </div>
            </div>
        </div>
    )
}

export function Accordion() {
  return (
    <div className="container">
       <AccordionItem title={experience.title} timeline={experience.item} index={0} />
       <AccordionItem title={c[1].title} timeline={c[1].timeline} index={1} />
       <AccordionItem title={c[3].title} list={c[3].list} index={3} />
    </div>
  );
}