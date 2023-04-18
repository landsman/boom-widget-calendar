import styled from "styled-components";
import {useLingui} from "@lingui/react";
import {breakpoints} from "@local/components/theme/breakpoints";

type PropTypes = {
    text: undefined | string;
}

export function FlashMessage({ text }: PropTypes): JSX.Element {
    const { i18n } = useLingui();
    if (undefined === text) {
        return <div />;
    }
    return (
        <FlashMessageWrapper>{i18n._(text)}</FlashMessageWrapper>
    );
}

export const FlashMessageWrapper = styled.div`
  padding: 16px 24px;
  text-align: center;

  max-width: ${breakpoints.container};
  margin: 15px auto;

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 0;
    text-align: left;
    max-width: 100%;
  }
  
  
  color: ${(props) => props.theme.colors!.gray!['4']};
  font-size: 16px;

  background: ${(props) => props.theme.colors!.gray!['0']};
  
  border: ${(props) => props.theme.calendarBorder ? props.theme.calendarBorder: 'unset'};
  border-radius: ${(props) => props.theme.borderRadius ? props.theme.borderRadius.sm + `px` : 'unset'};
`;
