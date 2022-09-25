import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import {
  ColorsType,
  DarkLightPaletteType,
  PaletteColorsType,
} from '../types/types';
import { plecrx } from '.';

type ColorBlockProps = {
  color: string;
  label: string;
  colorText: string;
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const LightContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const DarkContainer = styled(LightContainer)`
  background: black;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const ColorContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 16px;
  border-radius: 16px;
  background: ${(p) => p.color};
  border: 2px solid #d9d9d9;
  width: 130px;
  height: 124px;
`;

const ColorLabel = styled.div<{ color: string }>`
  font-style: normal;
  font-weight: 500;
  font-size: 12.8px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${(p) => p.color};
`;

const ColorNamespace = styled.div<{ color: string }>`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: ${(p) => p.color};
  margin-top: 16px;
  text-transform: capitalize;
`;

const ColorBlock = ({ color, colorText, label }: ColorBlockProps) => (
  <ColorContainer color={color}>
    <ColorLabel color={colorText}>{label}</ColorLabel>
  </ColorContainer>
);

const getTextColor = (colors: ColorsType, color: string) => {
  const colorName = `on${color[0].toUpperCase()}${color.slice(1)}`;
  if (Object.keys(colors).find((key) => key === colorName)) {
    return colors[colorName as keyof typeof colors];
  }

  return 'black';
};

const renderBlock = (colors: ColorsType) =>
  Object.keys(colors).map((color) => (
    <ColorBlock
      key={`color-${color}`}
      color={colors[color as keyof typeof colors]}
      colorText={getTextColor(colors, color)}
      label={color}
    />
  ));

const renderNamespaces = (theme: PaletteColorsType, color: string) =>
  Object.keys(theme).map((namespace) => (
    <div key={`namespace-${namespace}`}>
      <ColorNamespace color={color}>{namespace}</ColorNamespace>
      <Wrapper>{renderBlock(theme[namespace as keyof typeof theme])}</Wrapper>
    </div>
  ));

type TemplateTypes = {
  palette: DarkLightPaletteType;
};
const Template: Story<TemplateTypes> = ({ palette }: TemplateTypes) => (
  <Container>
    <LightContainer>
      <h1>Light</h1>
      {renderNamespaces(palette.light.colors, 'black')}
    </LightContainer>
    <DarkContainer>
      <h1>Dark</h1>
      {renderNamespaces(palette.dark.colors, 'white')}
    </DarkContainer>
  </Container>
);

export const Plecrx = Template.bind({});
Plecrx.args = { palette: plecrx };

export default {
  title: 'Styles/Palette',
} as Meta;
