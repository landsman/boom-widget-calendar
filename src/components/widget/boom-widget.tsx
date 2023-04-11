import styled from "styled-components";
import {useAppContext} from "@local/runtime";
import {buildBoomWidgetIframeUrl} from "@local/configuration/boom-connect";
import {SelectedDate} from "@local/components/content/selected-date";
import {FlashMessage} from "@local/components/flash-message";
import {BoomWidgetElement} from "@local/components/widget";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";

type PropTypes = {
    themeConfig: CustomizedThemeOverride;
}

export function BoomWidget({ themeConfig }: PropTypes): JSX.Element {
    const { isProduction, selectedEvent, flashMessage } = useAppContext();

    let eventUrl = '#';
    if (selectedEvent) {
        eventUrl = buildBoomWidgetIframeUrl(
            isProduction,
            selectedEvent.localization.localization,
            selectedEvent.localization.slug
        );
    }

    return (
        <Wrapper>
            <SelectedDate />
            <FlashMessage
                text={flashMessage}
            />
            {selectedEvent && (
                <>
                    <BoomWidgetElement
                        eventId={selectedEvent!.id}
                        eventUrl={eventUrl}
                        theme={themeConfig}
                    />
                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
`;
