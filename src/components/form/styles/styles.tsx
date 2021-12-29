import styled from 'styled-components';

import { colors, fonts, componentStyles } from 'components/ui-provider';

export interface FieldContainerProps {
  inline?: boolean;
  center?: boolean;
}

export const Label = styled('div')<{ isRequired?: boolean }>`
  margin-bottom: 16px;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${componentStyles.text[300].lineHeight};
  color: ${colors.black};
  font-family: ${fonts.nunito};

  ${(props) =>
    props.isRequired &&
    `
      &::after {
        content: " *"
      }
  `}
`;

export const FieldContainer = styled('div')<FieldContainerProps>`
  margin-bottom: 32px;
  ${(props) => props.center && 'text-align: center;'}

  ${({ inline }) =>
    inline &&
    `
      display: flex;
    `}

  > div {
    &:first-child {
      ${({ inline }) =>
        inline &&
        `
        flex: 0 25%;
        margin-top: 12px;
        margin-right: 25px;
    `}
    }

    &:last-child {
      ${({ inline }) =>
        inline &&
        `
        flex: 1 75%;
    `}
    }
  }
`;
