import {useLingui} from "@lingui/react";
import styled, {createGlobalStyle} from "styled-components";

type PropTypes = {
    text: undefined | string;
}

export function ErrorMessage({ text }: PropTypes): JSX.Element {
    const { i18n } = useLingui();
    if (undefined === text) {
        return <div />;
    }
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Container>
                    <Message>{i18n._(text)}</Message>
                </Container>
            </Wrapper>
        </>
    );
}

const GlobalStyles = createGlobalStyle`
    body {
      background: black;
    }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
`;

const Container = styled.div`
  max-width: 700px;
  margin: 100px auto;
`;

const Message = styled.div`
  padding: 15px 10px;
  text-align: center;
  font-weight: bold;
  color: white;
  text-shadow: 0 1px 5px #a10101;
  background: red;
  border: 1px dotted yellow;
`;
