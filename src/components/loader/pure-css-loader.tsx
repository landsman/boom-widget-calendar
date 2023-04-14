import styled, {css, keyframes} from "styled-components";

type PropTypes = {
    size: number;
}

/**
 * credits: https://loading.io/css/
 * transformed to styled-components via chatGTP
 */
export function PureCssLoader({ size }: PropTypes): JSX.Element {
    return (
        <Wrapper>
            <Spinner
                color={'#ffffff'}
                size={size}
                dotSize={6}
                dotDistance={18}
            >
                {Array(12).fill(null).map((_, index) => (
                    <div />
                ))}
            </Spinner>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  position: relative;
`;

const ldsSpinner = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

type SpinnerTypes = {
    color: string,
    size: number,
    dotSize: number,
    dotDistance: number
};

const Spinner = styled.div<SpinnerTypes>`
  color: transparent;
  display: inline-block;
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  div {
    transform-origin: ${(props) => {
        const result = props.size / 2;
        return css`${result}px ${result}px`;
    }};
    
    animation: ${ldsSpinner} 1.2s linear infinite;

    &:after {
      content: " ";
      display: block;
      position: absolute;
      top: 3px;
      
      left: ${(props) => {
        const result = props.size / 2 - props.dotSize / 2;
        return css`${result}px`;
      }};
      
      width: ${(props) => props.dotSize}px;
      height: ${(props) => props.dotDistance}px;
      border-radius: 20%;
      background: ${(props) => props.color};
    }
  }

  div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
`;
