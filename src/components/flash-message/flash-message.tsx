import styled from "styled-components";
import {useLingui} from "@lingui/react";

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
  border: 1px solid black;
  
  // debug
  background: pink;
`;
