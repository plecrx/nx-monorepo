import styled from '@emotion/styled';
import {CommonButtonM, CommonButtonL, CommonButton, CommonButtonS} from './common.styles';

const OutlineButton = styled.button`
  ${CommonButton}
  background-color: transparent;
`;

const OutlineButtonPrimary = styled(OutlineButton)`
  border: 1px solid ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.brand.primary};
  :hover {
    border: 1px solid ${(props) => props.theme.colors.brand.primary};
    background-color: ${(props) => props.theme.colors.hover.hoverSurfacePrimary};
    color: ${(props) => props.theme.colors.brand.primary};
  }
  :active {
    border: 1px solid ${(props) => props.theme.colors.brand.primary};
    color: ${(props) => props.theme.colors.brand.primary};
  }
  :disabled {
    border: 1px solid ${(props) => props.theme.colors.base.onBaseQuaternary};
    color: ${(props) => props.theme.colors.base.onBaseQuaternary};
  }
`;

const OutlineButtonSecondary = styled(OutlineButton)`
  border: none;
  color: ${(props) => props.theme.colors.brand.primary};
  :hover {
    color: ${(props) => props.theme.colors.brand.tertiary};
  }
  :active {
    color: ${(props) => props.theme.colors.brand.primary};
  }
  :disabled {
    color: ${(props) => props.theme.colors.base.onBaseQuaternary};
  }
`;

export const OutlineButtonPrimaryL = styled(OutlineButtonPrimary)`
  ${CommonButtonL}
`;

export const OutlineButtonPrimaryM = styled(OutlineButtonPrimary)`
  ${CommonButtonM}
`;

export const OutlineButtonPrimaryS = styled(OutlineButtonPrimary)`
  ${CommonButtonS}
`;

export const OutlineButtonSecondaryL = styled(OutlineButtonSecondary)`
  ${CommonButtonL}
`;

export const OutlineButtonSecondaryM = styled(OutlineButtonSecondary)`
  ${CommonButtonM}
`;

export const OutlineButtonSecondaryS = styled(OutlineButtonSecondary)`
  ${CommonButtonS}
`;
