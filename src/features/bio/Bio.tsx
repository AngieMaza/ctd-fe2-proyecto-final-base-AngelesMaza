import { useState } from "react";
import { SimpsonsNames, SIMPSONS_INFO } from "./constants";
import * as Styled from "./styled";

const Bio = () => {
  const [bioActive, setBioActive] = useState(SIMPSONS_INFO[SimpsonsNames.BART]);

  const onClick: (name: SimpsonsNames) => void = (name) =>
    setBioActive(SIMPSONS_INFO[name]);

  const createButtons = () => {
    return Object.keys(SIMPSONS_INFO).map((name: string) => (
      <Styled.BioButton isActive={bioActive.id === name ? true : false}
        key={name as string}
        onClick={() => onClick(name as SimpsonsNames)}
      >
        {name}
      </Styled.BioButton>
    ));
  };

  return (
    <Styled.BioContainer>
      <Styled.ButtonsContainer>{createButtons()}</Styled.ButtonsContainer>
      <div>
        <div>
          <Styled.BioImage
            src={bioActive.image}
            alt={bioActive.name}
          />
        </div>
        <div>
          <Styled.BioTitle>{bioActive.name}</Styled.BioTitle>
          <Styled.BioDescription>{bioActive.description}</Styled.BioDescription>
        </div>
      </div>
    </Styled.BioContainer>
  );
};

export default Bio;
