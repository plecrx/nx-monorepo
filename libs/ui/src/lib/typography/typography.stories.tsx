import { Meta } from '@storybook/react';
import styled from '@emotion/styled';
import * as Typo from './typography';

const orderedFontList = [
  Typo.Platinum,
  Typo.Gold,
  Typo.Silver,
  Typo.Iron,
  Typo.Mercury,
  Typo.Nitrogen,
  Typo.Oxygen,
  Typo.Cobalt,
  Typo.Osmium,
  Typo.Copper,
  Typo.Nickel,
  Typo.Krypton,
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Typography = () => (
  <Container>
    {orderedFontList.map((Element) => (
      <Element>
        {Element.displayName} : The quick brown fox jumps over the lazy dog
      </Element>
    ))}
  </Container>
);
Typography.args = {
  color: 'black',
};

export default {
  title: 'Styles/Typography',
} as Meta;
