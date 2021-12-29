import { css } from 'styled-components';
import 'components/ui-provider/fonts/nunito.css';
import { typeScale, colors, fonts } from '../../../utils/variables';

const base = css`
  :root {
    font-size: ${typeScale.body.fontSize}px;
    line-height: ${typeScale.body.lineHeight}px;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: ${fonts.nunito};
    color: ${colors.black};
    font-size: ${typeScale.body.fontSize}px;
    line-height: ${typeScale.body.lineHeight}px;
  }

  a {
    color: ${colors.black};
    text-decoration: none;
    font-family: ${fonts.nunito};

    &:hover {
      color: ${colors.orange};
      text-decoration: none;

      svg {
        path {
          fill: ${colors.orange};
        }
      }
    }

    &:active {
      color: ${colors.orange};
    }

    &.disabled {
      color: ${colors.gray1};
    }

    &.is-active {
      color: ${colors.orange};

      svg {
        path {
          fill: ${colors.orange};
        }
      }
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  #root {
    transition: all 0.5s cubic-bezier(0.15, 1, 0.3, 1);

    &.pushed-legend-right {
      transform: translateX(-280px);
    }
  }

  .noscroll {
    overflow: hidden;
  }

  .noselect {
    user-select: none;
  }

  .full-size {
    height: 100%;
    width: 100%;
  }

  .full-size-layout {
    height: 100%;
    min-height: 100vh;
    width: 100%;
  }

  .center {
    text-align: center;
  }

  .icon-middle {
    &::before {
      vertical-align: middle;
    }
  }

  .pointer {
    cursor: pointer;
  }

  /* https://github.com/reach/reach-ui/blob/master/packages/skip-nav/styles.css */
  [data-reach-skip-link] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
  }

  [data-reach-skip-link]:focus {
    padding: 1px;
    position: fixed;
    top: 10px;
    left: 10px;
    background: ${colors.white};
    z-index: 100;
    width: auto;
    height: auto;
    clip: auto;
  }
`;

export default base;
