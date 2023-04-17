import React from "react";
import styled from "styled-components";
import {GlobalStyle} from "@local/components/layout/theme";
import {breakpoints} from "@local/components/theme/breakpoints";

type PropTypes = {
    children: React.ReactNode;
    bodyBackground?: string;
    selectedDayColor?: string;
}

export function Layout({ children, bodyBackground, selectedDayColor }: PropTypes): JSX.Element {
    return (
        <Wrapper>
            <GlobalStyle
                bodyBackground={bodyBackground}
                selectedDayColor={selectedDayColor}
            />
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
