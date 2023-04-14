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
                        <span>{item.emoji}{' '}{item.value}</span>
                    </LocaleItem>
                ))}
            </Navigation>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 90%;
  display: block;
  padding: 10px;
  margin-bottom: 10px;
  background: ${(props) => props.theme.colors!.gray!['0']};
  border-radius: 6px;
  overflow: hidden;
`;

const Navigation = styled.div`
  display: grid;
`;

const LocaleItem = styled.div`
  display: block;
  margin-top: 10px;
  
  cursor: pointer;
  color: ${(props) => props.theme.colors!.gray!['9']};
  
  &:first-child {
    margin-top: 0;
  }
  
  &:hover {
    text-decoration: underline;
  }
  
  span {
    padding: 15px 20px;
    font-size: 15px;
  }
`;
