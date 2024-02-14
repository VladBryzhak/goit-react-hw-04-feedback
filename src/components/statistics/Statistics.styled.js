import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spasing(18)};
`;

export const ListItem = styled.li`
  & + & {
    margin-top: ${p => p.theme.spasing(5)};
  }
`;

export const StatisticDate = styled.p`
  font-size: 24px;
  font-weight: ${p => p.theme.weight.accent};
`;