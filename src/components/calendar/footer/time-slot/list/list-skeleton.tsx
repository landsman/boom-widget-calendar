import {ListWrapper} from "@local/components/calendar";
import {useLingui} from "@lingui/react";
import {t} from "@lingui/macro";
import styled from "styled-components";
import {SlotContent, SlotWrapper} from "@local/components/calendar/footer/time-slot/item/design";

export function ListSkeleton(): JSX.Element {
    const { i18n } = useLingui();
    return (
        <ListWrapper>
            <SlotWrapper disabled>
                <SlotContentExtended>
                    <span>{i18n._(t`loading`)}</span>
                </SlotContentExtended>
            </SlotWrapper>
        </ListWrapper>
    );
}

const SlotContentExtended = styled(SlotContent)`
  padding: 5px 15px;
`;
