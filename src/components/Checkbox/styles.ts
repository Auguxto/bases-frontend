import styled from "styled-components";

export const Container = styled.div<{
  width?: number;
  height?: number;
  color?: string;
  checkedColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  checked: boolean;
}>`
  width: ${(props) => (props.width ? `${props.width}px` : "20px")};
  height: ${(props) => (props.height ? `${props.height}px` : "20px")};

  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}px` : "2px"};

  background-color: ${(props) =>
    props.checked
      ? props.checkedColor
        ? props.checkedColor
        : "#FFC107"
      : props.color
      ? props.color
      : "#FFFFFF"};

  border: ${(props) => (props.borderWidth ? `${props.borderWidth}px` : "1px")}
    solid
    ${(props) =>
      props.checked
        ? props.checkedColor
          ? props.checkedColor
          : "#FFC107"
        : props.color
        ? props.color
        : "#C4C4C4"};

  cursor: pointer;
`;
