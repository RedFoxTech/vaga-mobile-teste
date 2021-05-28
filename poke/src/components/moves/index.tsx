import React from 'react';

import {Container, MoveContainer, MoveText} from './styles';

interface PropsMoves {
  moves: Array<PropsMove>;
  background: string;
}

interface PropsMove {
  move: {
    name: string;
  };
}

const Moves: React.FC<PropsMoves> = ({moves, background}) => {
  return (
    <Container>
      {moves &&
        moves.map((move, index) => (
          <MoveContainer key={index} style={{backgroundColor: background}}>
            <MoveText>{move.move.name}</MoveText>
          </MoveContainer>
        ))}
    </Container>
  );
};

export default Moves;
