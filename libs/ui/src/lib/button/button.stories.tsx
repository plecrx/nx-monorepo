import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { ElementType } from 'react';
import {
  PlainButtonPrimaryL,
  PlainButtonPrimaryM,
  PlainButtonSecondaryL,
  PlainButtonSecondaryM,
  OutlineButtonPrimaryL,
  OutlineButtonPrimaryM,
  OutlineButtonSecondaryL,
  OutlineButtonSecondaryM,
  ButtonLabelM,
  ButtonLabelL,
} from './button';

const RowLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-bottom: 10px;
`;

const TemplateContainer = styled.div`
  padding: 64px;
`;

const renderButton = (
  Button: ElementType,
  ButtonLabel: ElementType,
  text: string,
  disabled: boolean,
  onClick: () => void
) => (
  <RowLayoutContainer>
    <div>
      <Button disabled={disabled} onClick={onClick}>
        <ButtonLabel>{text}</ButtonLabel>
      </Button>
    </div>
  </RowLayoutContainer>
);

type TemplateProps = {
  text: string;
  disabled: boolean;
  onClick: () => void;
};
const Template: Story<TemplateProps> = ({
  text,
  disabled,
  onClick,
}: TemplateProps) => (
  <TemplateContainer>
    <h2>Plain Button L</h2>
    {renderButton(PlainButtonPrimaryL, ButtonLabelL, text, disabled, onClick)}
    {renderButton(PlainButtonSecondaryL, ButtonLabelL, text, disabled, onClick)}

    <h2>Plain Button M</h2>
    {renderButton(PlainButtonPrimaryM, ButtonLabelM, text, disabled, onClick)}
    {renderButton(PlainButtonSecondaryM, ButtonLabelM, text, disabled, onClick)}

    <h2>Outline Button L</h2>
    {renderButton(OutlineButtonPrimaryL, ButtonLabelL, text, disabled, onClick)}
    {renderButton(
      OutlineButtonSecondaryL,
      ButtonLabelL,
      text,
      disabled,
      onClick
    )}

    <h2>Outline Button M</h2>
    {renderButton(OutlineButtonPrimaryM, ButtonLabelM, text, disabled, onClick)}
    {renderButton(
      OutlineButtonSecondaryM,
      ButtonLabelM,
      text,
      disabled,
      onClick
    )}
  </TemplateContainer>
);

export const PlainButton = Template.bind({});

PlainButton.args = {
  text: 'Button',
  disabled: false,
  onClick: action('onClick'),
};

export default {
  title: 'Buttons',
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;
