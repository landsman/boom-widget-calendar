import styled from "styled-components";

type PropTypes = {
    text: undefined | string;
}

export function FlashMessage({ text }: PropTypes): JSX.Element {
    if (undefined === text) {
        return <div />;
    }
    return (
        <Wrapper>{text}</Wrapper>
    );
}

const Wrapper = styled.div``;
