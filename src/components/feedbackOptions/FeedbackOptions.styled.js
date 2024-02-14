import styled from 'styled-components';

export const OptionList = styled.ul`
display: flex;
  gap: ${p => p.theme.spasing(5)};
  margin-bottom: 35px;
`;

export const Button = styled.button`
background-color: inherit;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: ${p => p.theme.weight.accent};
  padding: ${p => p.theme.spasing(3)} ${p => p.theme.spasing(5)};
  border: ${p => p.theme.border};
  border-radius: ${p => p.theme.radius};
  box-shadow: ${p => p.theme.shadow};
    transition: background-color ${p => p.theme.transition.standart};

&:hover,
&:focus {
  background-color: ${p => p.theme.colors.accent};
}
`;