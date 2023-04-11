import React from "react";
import styled from "styled-components";
import {GlobalStyle} from "@local/components/layout/theme";
import {LocaleSwitcher} from "@local/components/layout/locale-switcher";
import {breakpoints} from "@local/components/theme/breakpoints";

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
  max-width: 100%;
  
  height: auto;
  overflow: hidden;
  
  // debug 
  padding-top: 30px;
  padding-bottom: 30px;
  background: gray;
`;

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  
  margin: 0 auto;
  overflow: hidden;

  @media (min-width: ${breakpoints.tablet}) {
    width: 960px;
  }
`;
