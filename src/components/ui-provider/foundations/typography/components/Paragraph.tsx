import { variant } from 'styled-system';

import { ParagraphScale } from '../../../Theme';
import { styledWrapper as styled } from '../../../utils/primitives';

import { typographyBase, TypographyBaseProps } from '../utils';

export interface ParagraphProps extends TypographyBaseProps {
  /** Size value of the text. */
  scale?: ParagraphScale;
}

/**
 * Paragraph component provided as a styled component primitive.
 */
const Paragraph = styled('p')<ParagraphProps>`
  ${variant({
    prop: 'scale',
    scale: 'componentStyles.paragraph',
    variants: {
      400: {},
      300: {},
    },
  })}

  ${typographyBase}
`;

Paragraph.defaultProps = {
  scale: 400,
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
