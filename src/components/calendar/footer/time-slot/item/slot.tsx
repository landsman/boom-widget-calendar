import React from "react";
import {useAppContext} from "@local/runtime";
import {SlotContent, SlotWrapper} from "@local/components/calendar/footer/time-slot/item/design";
import {SlotText} from "@local/components/calendar/footer/time-slot/item/text";

type PropTypes = {
    id: string;
    dateFrom: string;
    dateTo: string;
};

export function TimeSlot({ id, dateFrom, dateTo }: PropTypes): JSX.Element {
    const { selectedEvent, setSelectedTimeSlot, setSelectedEvent } = useAppContext();
    const isActive = selectedEvent?.id === id;

    const handleSelectItem = (eventId: string): void => {
        if (isActive) {
            return;
        }
        setSelectedTimeSlot({
            from: dateFrom,
            to: dateTo,
        });
        setSelectedEvent(eventId);
    }

    return (
        <SlotWrapper>
            <SlotContent
                active={isActive}
                onClick={() => handleSelectItem(id)}
            >
                <SlotText
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                />
            </SlotContent>
        </SlotWrapper>
    );
}

