import styled from "styled-components";
import {Calendar} from "@local/components/calendar";
import {BoomWidget} from "@local/components/widget";
import {breakpoints} from "@local/components/theme/breakpoints";

export function Content(): JSX.Element {
    return (
        <Grid>
            <Left>
                <Calendar />
            </Left>
            <Right>
                <BoomWidget />
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
  
  background: transparent;
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
`;

const Right = styled(Column)`
  width: 100%;

  // columns
  @media (min-width: ${breakpoints.tablet}) {
    width: 60%;
  }
`;
