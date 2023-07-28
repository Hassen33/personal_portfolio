import React from "react";
import { BsBehance, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          target="_blank"
          href="https://github.com/Hassen33"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/hassen-bejaoui"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.behance.net/hassenbejaoui1"
          rel="noopener noreferrer"
        >
          <BsBehance />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
