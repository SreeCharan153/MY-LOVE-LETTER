import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './Inthandham.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        My dear kundanapu bomma🖤,<br />
        Never have I been so blessed as to fall in love with someone as wonderful as you. From the moment our paths crossed, my world transformed into a tapestry of joy, laughter, and endless love, all because of you.<br/><br/>Your presence in my life is a gift beyond measure, a constant reminder of the beauty and goodness that exists in this world. With you, every moment is imbued with meaning, every day brighter and more fulfilling than the last.<br />i loveeee youuuu :)<br />
        always yours,<br />
        @Sri Charan
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
