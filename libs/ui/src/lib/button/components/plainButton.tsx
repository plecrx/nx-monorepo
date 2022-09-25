import styled from '@emotion/styled';
import {
  CommonButtonM,
  CommonButtonL,
  CommonButton,
  CommonButtonS,
} from './common.styles';

const PlainButton = styled.button`
  ${CommonButton}
  border: none;
`;

const PlainButtonPrimary = styled(PlainButton)`
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.brand.onPrimary};
  :hover {
    background-color: ${(props) => props.theme.colors.brand.tertiary};
    color: ${(props) => props.theme.colors.brand.onPrimary};
  }
  :active {
    background-color: ${(props) => props.theme.colors.brand.primary};
    color: ${(props) => props.theme.colors.brand.onPrimary};
  }
  :disabled {
    background-color: ${(props) => props.theme.colors.base.disabled};
    color: ${(props) => props.theme.colors.base.onBaseQuaternary};
  }
`;

const PlainButtonSecondary = styled(PlainButton)`
  background-color: ${(props) => props.theme.colors.base.info};
  color: ${(props) => props.theme.colors.brand.primary};
  :hover {
    background-color: ${(props) => props.theme.colors.base.info};
    color: ${(props) => props.theme.colors.brand.tertiary};
  }
  :active {
    background-color: ${(props) => props.theme.colors.base.info};
    color: ${(props) => props.theme.colors.brand.primary};
  }
  :disabled {
    background-color: ${(props) => props.theme.colors.base.info};
    color: ${(props) => props.theme.colors.base.onBaseQuaternary};
  }
`;

export const PlainButtonPrimaryL = styled(PlainButtonPrimary)`
  ${CommonButtonL}
`;

export const PlainButtonPrimaryM = styled(PlainButtonPrimary)`
  ${CommonButtonM}
`;

export const PlainButtonPrimaryS = styled(PlainButtonPrimary)`
  ${CommonButtonS}
`;

export const PlainButtonSecondaryL = styled(PlainButtonSecondary)`
  ${CommonButtonL}
`;

export const PlainButtonSecondaryM = styled(PlainButtonSecondary)`
  ${CommonButtonM}
`;
