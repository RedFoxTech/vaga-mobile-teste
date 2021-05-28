import React, {useEffect, useState} from 'react';

import {
  Container,
  Content,
  StatBase,
  StatContainer,
  StatContent,
  StatContentBase,
  StatText,
  TotalBaseContent,
  TotalBaseText,
} from './styles';
import Theme from '../../styles/theme';

interface PropsStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PropsStats {
  stats: Array<PropsStat>;
  background: string;
}

const Stats: React.FC<PropsStats> = ({stats, background}) => {
  const [statsBase, setStatsBase] = useState<Array<number>>([]);
  const [totalBase, setTotalBase] = useState(0);

  useEffect(() => {
    stats.map(stat => {
      setStatsBase(oldValue => [...oldValue, stat.base_stat]);
    });
  }, [stats]);

  useEffect(() => {
    if (statsBase.length > 0) {
      setTotalBase(statsBase.reduce((total, current) => total + current));
    }
  }, [statsBase, totalBase]);

  return (
    <Container>
      <Content>
        {stats &&
          stats.map((stat, index) => (
            <StatContainer
              key={index}
              style={{
                backgroundColor:
                  Theme.colors.type[
                    stat.stat.name.replace(/-(?!>)/g, '').toLocaleLowerCase()
                  ],
              }}>
              <StatContent>
                <StatText>{stat.stat.name.replace('special', 'sp')}</StatText>
                <StatContentBase>
                  <StatBase>{stat.base_stat}</StatBase>
                </StatContentBase>
              </StatContent>
            </StatContainer>
          ))}
      </Content>
      <TotalBaseContent style={{borderBottomColor: background}}>
        {totalBase.toString() && (
          <>
            <TotalBaseText>Total:</TotalBaseText>
            <TotalBaseText style={{marginLeft: 15}}>
              {totalBase.toString()}
            </TotalBaseText>
          </>
        )}
      </TotalBaseContent>
    </Container>
  );
};

export default Stats;
