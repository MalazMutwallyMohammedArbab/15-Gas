import React from 'react'
import Contact from './Contact';
import Features from './Features';
import Market from './Market';
import Services from './Services';

export default function Home() {
  return (
    <div>
      <Features />
      <Services />
      <Market />
      <Contact />
    </div>
  )
}
