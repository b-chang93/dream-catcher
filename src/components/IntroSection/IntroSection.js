import React from 'react';
import './IntroSection.css'

export default function InfoSection() {

  return (
    <div className="intro_section">
      <div className="intro_info_point">
        <h3>Jot down your dreams</h3>
        <h5>Work with others to perfect the phrasing of that sentence or paragraph you need for your project. Share and be notified real-time of suggestions, comments, and revisions while you collaborate.</h5>
      </div>
      <div className="intro_info_point">
        <h3>Mobile-friendly</h3>
        <h5>For those must journal moments or when you finally remember certain details about your dream you forgot when you woke up.</h5>
      </div>
      <div className="intro_info_point">
        <h3>Share your dreams or make them private</h3>
        <h5>Skip the slides. If you're leading a class, meeting, or a brainstorming session, put your project on a projector and invite others to share ideas onto the screen using their smartphones. Enlarge text by clicking on posts or comments. </h5>
      </div>
    </div>
  );
}
