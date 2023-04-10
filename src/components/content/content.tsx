import styled from "styled-components";
import {Calendar} from "../calendar";
import {FlashMessage} from "../flash-message";
import {BoomWidget} from "../widget";
import {BoomWidgetConfigTypes} from "../../configuration/boom-widget/properties";
import {useAppContext} from "../../runtime";

type PropTypes = {
    widgetConfig: BoomWidgetConfigTypes;
}

export function Content({ widgetConfig }: PropTypes): JSX.Element {
    const { flashMessage } = useAppContext();
    return (
        <Grid>
            <Left>
                <Calendar
                    widgetTheme={widgetConfig.theme}
                />
            </Left>
            <Right>
                <FlashMessage
                    text={flashMessage}
                />
                <BoomWidget
                    theme={widgetConfig.theme}
                    organizerId={widgetConfig.organizerId}
                    eventId={widgetConfig.eventId}
                    eventUrl={widgetConfig.eventUrl}
                />
            </Right>
        </Grid>
    );
}

const Grid = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  
  // debug
  background: gray;
`;

const Column = styled.div`
  display: flex;
`;

const Left = styled(Column)`
  width: 40%;
  
  // debug
  background: red;
`;

const Right = styled(Column)`
  width: 60%;
  
  // debug
  background: yellow;
`;
