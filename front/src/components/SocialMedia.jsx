import React from "react";
import { BsBehance, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        <a target="_blank" href="https://github.com/Hassen33">
          <BsGithub />
        </a>
      </div>
      <div>
        <a  target="_blank" href="https://www.linkedin.com/in/hassen-bejaoui">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://www.behance.net/hassenbejaoui1">
          <BsBehance />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
