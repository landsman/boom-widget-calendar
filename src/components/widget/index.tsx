import styled from "styled-components";

type PropTypes = {
    eventId: string;
}

export function BoomWidget({ eventId }: PropTypes): JSX.Element {
    return (
        <Wrapper>
            <>
                boom widget: {eventId}
            </>
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;
