import styled from "styled-components";
import {localeWithNames, useLocaleContext} from "@local/configuration/i18n";
import {useAppContext} from "@local/runtime";
import {breakpoints} from "@local/components/theme/breakpoints";

export function LocaleSwitcher(): JSX.Element {
    const { isFixed, switchLocale } = useLocaleContext();
    const { isProduction, features } = useAppContext();

    // only for dev for now
    if (isProduction || !features?.localeSwitcher || isFixed) {
        return <div />;
    }

    return (
        <Wrapper>
            <Navigation>
                {localeWithNames.map((item) => (
                    <LocaleItem
                        key={item.key}
                        onClick={() => switchLocale(item.key, true)}
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
  border-radius: ${(props) => props.theme.borderRadius ? props.theme.borderRadius.sm + `px` : 'unset'};
  overflow: hidden;


  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: ${breakpoints.container};
    margin: 0 auto 10px;
  }
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
