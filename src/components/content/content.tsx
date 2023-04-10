import styled from "styled-components";
import {Calendar} from "../calendar";
import {FlashMessage} from "../flash-message";
import {BoomWidget} from "../widget";
import {BoomWidgetConfigTypes} from "../../configuration/boom-widget/properties";

type PropTypes = {
    widgetConfig: BoomWidgetConfigTypes;
}

export function Content({ widgetConfig }: PropTypes): JSX.Element {
    const alertMessageContent = "Alert message content";
    return (
        <Wrapper>
            <Grid>
                <Left>
                    <Calendar
                        widgetTheme={widgetConfig.theme}
                    />
                </Left>
                <Right>
                    <FlashMessage
                        text={alertMessageContent}
                    />
                    <BoomWidget
                        theme={widgetConfig.theme}
                        organizerId={widgetConfig.organizerId}
                        eventId={widgetConfig.eventId}
                        eventUrl={widgetConfig.eventUrl}
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
