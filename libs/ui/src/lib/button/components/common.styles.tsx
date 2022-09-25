import { css } from '@emotion/react';

export const CommonButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  div + span {
    padding-left: 16px;
  }
  div:only-child {
    padding-left: 0;
  }
  div {
    padding-left: 8px;
  }
`;

export const CommonButtonL = css`
  height: 48px;
  min-width: 48px;
  padding: 12px 8px;
`;

export const CommonButtonM = css`
  height: 40px;
  min-width: 40px;
  padding: 10px 8px;
`;

export const CommonButtonS = css`
  height: 32px;
  width: 32px;
  padding: 8px;
`;
