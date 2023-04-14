import {EventType} from "@local/api/view/events/types/event-type";
import {ListWrapper, TimeSlot} from "@local/components/calendar/footer/time-slot";

type PropTypes = {
    events: EventType[]; // todo: change to small DTO
}

export function ListOfSlots({ events }: PropTypes): JSX.Element {
    return (
        <ListWrapper>
            {events.map((item) => (
                <TimeSlot
                    key={item.id}
                    id={item.id}
                    dateFrom={item.dateFrom}
                    dateTo={item.dateTo}
                />
            ))}
        </ListWrapper>
    );
}
