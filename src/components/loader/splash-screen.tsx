import styled from "styled-components";
import {PureCssLoader} from "@local/components/loader/pure-css-loader";

export function SplashScreen(): JSX.Element {
    return (
        <Wrapper>
            <PureCssLoader size={80} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background: ${(props) => props.theme.bodyBackground};
  color: #fff;
`;
