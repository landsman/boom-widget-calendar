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
        <Wrapper>{i18n._(text)}</Wrapper>
    );
}

const Wrapper = styled.div`
  padding: 10px;
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
  
  border: 1px solid transparent;
  border-radius: ${(props) => props.theme.borderRadius ? props.theme.borderRadius.sm + `px` : 'unset'};
`;
