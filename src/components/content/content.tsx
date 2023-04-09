import styled from "styled-components";
import {Calendar} from "../calendar";
import {FlashMessage} from "../flash-message";
import {BoomWidget} from "../widget";
import {BoomWidgetConfigThemeTypes} from "../../configuration/boom-widget/properties";

type PropTypes = {
    widgetTheme: BoomWidgetConfigThemeTypes;
}

export function Content({ widgetTheme }: PropTypes): JSX.Element {
    const alertMessageContent = "Alert message content";
    const eventId = "100";
    const eventUrl = "todo";
    return (
        <Wrapper>
            <Grid>
                <Left>
                    <Calendar
                        widgetTheme={widgetTheme}
                    />
                </Left>
                <Right>
                    <FlashMessage
                        text={alertMessageContent}
                    />
                    <BoomWidget
                        theme={widgetTheme}
                        eventId={eventId}
                        eventUrl={eventUrl}
                    />
                </Right>
            </Grid>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

const Grid = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  
  // debug
  margin-top: 30px;
  background: gray;
`;

const Column = styled.div`
  display: flex;
`;

const Left = styled(Column)`
  width: 20%;
  
  // debug
  background: red;
`;

const Right = styled(Column)`
  width: 80%;
  
  // debug
  background: yellow;
`;
