import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CardContent.css';

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  { id: 1, title: 'Capabilities', content: 'Capabilities content goes here.' },
  { id: 2, title: 'Innovation', content: 'Innovation content goes here.' },
  { id: 3, title: 'Business', content: 'Business content goes here.' }
];

const CardContent = () => {
  const [activeCard, setActiveCard] = useState(cardsData[0]);

  useEffect(() => {
    const cards = gsap.utils.toArray('.card-content-card');

    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=100`,
          end: () => `top top+=40`,
          scrub: true,
          markers: true,
          invalidateOnRefresh: true
        },
        ease: 'none',
        scale: () => 1 - (cards.length - index) * 0.025
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        markers: true,
        id: 'pin',
        end: 'max',
        invalidateOnRefresh: true
      });
    });
  }, []);

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  return (
    <div className="card-content-container">
      <div className="card-content-left">
        <h1>Stacking Cards</h1>
        <div className="card-content-cards">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              className={`card-content-card ${activeCard.id === card.id ? 'active' : ''}`}
              onClick={() => handleCardClick(card)}
              style={{ top: `${40 + index * 5}px` }}
            >
              {card.title}
            </div>
          ))}
        </div>
      </div>
      <div className="card-content-right">
        <h1>{activeCard.title}</h1>
        <p>{activeCard.content}</p>
      </div>
    </div>
  );
};

export default CardContent;
