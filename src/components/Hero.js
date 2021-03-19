import React from 'react';

export default function Hero({ children, hero }) {
  const myHero = hero || 'defaultHero';
  return <header className={myHero}>{children}</header>;
}
