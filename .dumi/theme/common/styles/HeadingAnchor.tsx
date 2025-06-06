import { Global, css } from '@emotion/react';
import { useTheme } from 'antd-style';
import React from 'react';

export default () => {
  const token = useTheme();
  return (
    <Global
      styles={css`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          > a[aria-hidden]:first-child {
            float: left;
            width: 20px;
            padding-inline-end: ${token.paddingXXS}px;
            font-size: 0;
            line-height: inherit;
            text-align: right;
            padding-inline-end: ${token.paddingXXS}px;
            margin-inline-start: -${token.marginLG}px;

            [data-direction='rtl'] & {
              float: right;
            }

            &:hover {
              border: 0;
            }

            > .icon-link::before {
              font-size: ${token.fontSizeXL}px;
              content: '#';
              color: ${token.colorTextSecondary};
              font-family: ${token.codeFamily};
            }
          }

          &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
            visibility: hidden;
          }
        }
      `}
    />
  );
};
