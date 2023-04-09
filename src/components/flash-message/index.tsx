import styled from "styled-components";

type PropTypes = {
    text: string;
}

export function FlashMessage({ text }: PropTypes) {
    return (
        <Wrapper>
            {text}
        </Wrapper>
    );
}

const Wrapper = styled.div``;
