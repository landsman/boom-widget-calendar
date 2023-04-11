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
  margin-bottom: 15px;
  padding: 10px;
  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    text-align: left;
  }
  
  
  
  // todo: client specific, move to theme, somehow!
  color: #FFFFFF;
  font-size: 16px;
  
  background: #251D3F;
  border: 1px solid transparent;
  border-radius: 6px;
`;
