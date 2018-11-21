import React from 'react';
import './IntroSection.css'

export default function InfoSection() {

  return (
    <div className="intro_section">
      <div className="intro_info_point">
        <h3>Jot down your dreams</h3>
        <h5>Ever have a really good dream, but you can't seem to remember all the details later when you want to share it? Worry not! Easily write down your dreams anytime, anywhere.</h5>
      </div>
      <div className="intro_info_point">
        <h3>Mobile-friendly</h3>
        <h5>For those must journal moments or when you finally remember certain details about your dream you forgot when you woke up.</h5>
      </div>
      <div className="intro_info_point">
        <h3>Share your dreams or make them private</h3>
        <h5>Share your dreams publicly, with friends, or make it private so it can only be seen by you!</h5>
      </div>
    </div>
  );
}
