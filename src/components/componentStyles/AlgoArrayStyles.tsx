import styled from "styled-components";

type SortLineStyleProps = {
  isPivot: boolean;
  lineHue: number;
};

export const SortLine = styled.div<SortLineStyleProps>`
  position: absolute;
  background-color: ${(props) =>
    props.isPivot
      ? `hsl(300, 83%, 65%)`
      : `hsl(${props.lineHue}, 83%, 65%)`};
  border: 1px solid;

  &:hover > div {
    display: block;
  }
`;

export const SortLines = styled.div`
  position: relative;
  transform: translate(-50%, -50%);
  transform: rotate(180deg);
  max-width: 100%;
  background-color: #fafafa;
  width: 100%;
  height: 300px;
  border-radius: 15px;
`;
