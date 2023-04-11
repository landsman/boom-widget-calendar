import styled from "styled-components";
import {Calendar} from "@local/components/calendar";
import {BoomWidget} from "@local/components/widget";
import {breakpoints} from "@local/components/theme/breakpoints";
import {useAppContext} from "@local/runtime";

export function Content(): JSX.Element {
    const { themeConfig } = useAppContext();
    return (
        <Grid>
            <Left>
                <Calendar
                    themeConfig={themeConfig}
                />
            </Left>
            <Right>
                <BoomWidget
                    themeConfig={themeConfig}
                />
            </Right>
        </Grid>
    );
}

const Grid = styled.div`
  width: 100%;
  max-width: 100%;
  
  height: auto;

  // columns
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
  
  // debug
  background: gray;
`;

const Column = styled.div`
  display: block;
  width: 100%;
  
  @media (min-width: ${breakpoints.tablet}) {
    width: auto;
    display: inherit;
  }
`;

const Left = styled(Column)`
  width: 100%;

  // columns
  @media (min-width: ${breakpoints.tablet}) {
    width: 40%;
  }
  
  // debug
  background: red;
`;

const Right = styled(Column)`
  width: 100%;

  // columns
  @media (min-width: ${breakpoints.tablet}) {
    width: 60%;
  }
  
  // debug
  background: yellow;
`;
