import styled from "styled-components";
import {useLingui} from "@lingui/react";
import {breakpoints} from "@local/components/theme/breakpoints";
import { ReactComponent as SvgIcon } from '@local/components/flash-message/flash-message-tickets-icon.svg';

type PropTypes = {
    text: undefined | string;
}

export function FlashMessage({ text }: PropTypes): JSX.Element {
    const { i18n } = useLingui();
    if (undefined === text) {
        return <div />;
    }
    return (
        <FlashMessageWrapper>
            <span><SvgIcon /></span>
            <span>{i18n._(text)}</span>
        </FlashMessageWrapper>
    );
}

export const FlashMessageWrapper = styled.div`
  padding: 16px 24px;
  text-align: center;

  max-width: ${breakpoints.container};
  margin: 15px auto;

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 0;
    max-width: 100%;
  }
  
  color: ${(props) => props.theme.colors!.gray!['4']};
  font-size: 16px;

  background: ${(props) => props.theme.flashMessageBg};
  
  border: ${(props) => props.theme.calendarBorder ? props.theme.calendarBorder: 'unset'};
  border-radius: ${(props) => props.theme.borderRadius ? props.theme.borderRadius.sm + `px` : 'unset'};

  @media (max-width: ${breakpoints.tablet}) {
    border: 0;
  }
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: 16px;

    vertical-align: middle;
    display: inline-block;
    
    path {
      fill: ${(props) => props.theme.colors!.gray!['4']};
    }
  }
`;
