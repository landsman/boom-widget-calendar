import React from "react";
import styled from "styled-components";
import {GlobalStyle} from "@local/components/layout/theme";
import {LocaleSwitcher} from "@local/components/layout/locale-switcher";

type PropTypes = {
    children: React.ReactNode;
}

export function Layout({ children }: PropTypes): JSX.Element {
    return (
        <Wrapper>
            <GlobalStyle />
            <LocaleSwitcher />
            <Container>
                {children}
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  
  // debug 
  padding-top: 30px;
  padding-bottom: 30px;
  background: gray;
`;

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
