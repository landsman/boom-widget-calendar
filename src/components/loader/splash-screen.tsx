import styled from "styled-components";
import {PureCssLoader} from "@local/components/loader/pure-css-loader";
import {useAppContext} from "@local/runtime";

export function SplashScreen(): JSX.Element {
    const { isLoading, themeConfig } = useAppContext();
    return (
        <Wrapper active={isLoading}>
            <PureCssLoader
                size={80}
                color={themeConfig.loaderColor}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div<{ active: boolean }>`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background: ${(props) => props.theme.bodyBackground};
  color: #fff;
  
  display: ${(props) => props.active ? 'block' : 'none'};
`;
