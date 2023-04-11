import {useLingui} from "@lingui/react";
import {t} from "@lingui/macro";
import styled from "styled-components";

export function Footer(): JSX.Element {
    const { i18n } = useLingui();
    const boomWebsiteLink = 'https://www.boomevents.org';
    return (
        <Wrapper>
            <span>
                {i18n._(t`footer.created_by`)}
                {' '}
            </span>
            <a href={boomWebsiteLink} target={'_blank'} rel="noreferrer">Boom Events</a>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  
  * {
    font-size: 1px;
    color: transparent;
  }
`;
