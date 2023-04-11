import styled from "styled-components";
import {localeWithNames, useLocaleContext} from "@local/configuration/i18n";
import {useAppContext} from "@local/runtime";

export function LocaleSwitcher(): JSX.Element {
    const { isProduction, features } = useAppContext();
    const { switchLocale } = useLocaleContext();
    // only for dev for now
    if (isProduction || !features?.localeSwitcher) {
        return <div />;
    }
    return (
        <Wrapper>
            <Navigation>
                {localeWithNames.map((item) => (
                    <LocaleItem
                        key={item.key}
                        onClick={() => switchLocale(item.key)}
                    >
                        {item.value}
                    </LocaleItem>
                ))}
            </Navigation>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  padding-bottom: 15px;
  text-align: right;
`;

const Navigation = styled.div`
  display: grid;
`;

const LocaleItem = styled.div`
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;
