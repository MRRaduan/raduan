import React from "react";
import Image from 'next/image'
import * as S from "./styled";

const Hero = () => {
  return (
    <S.Background>
      <S.Title>
        I solve problems by design
        and building web experiences.
        i.e. <span className="italic"> a web developer with a focus on&nbsp;<span className="bold">Frontend</span> and <span className="bold">Design</span>.</span>
      </S.Title>
      <S.ComingSoon>
        - coming soon
      </S.ComingSoon>
    </S.Background>
  );
};

export default Hero;
