import { Container } from "./styles";

type CheckboxProps = {
  checked: boolean;
  onClick: () => void;
  width?: number;
  height?: number;
  color?: string;
  checkedColor?: string;
  borderWidth?: number;
  borderRadius?: number;
};

const Checkbox = (props: CheckboxProps) => {
  return (
    <Container
      checked={props.checked}
      onClick={props.onClick}
      width={props.width}
      height={props.height}
      color={props.color}
      checkedColor={props.checkedColor}
      borderWidth={props.borderWidth}
      borderRadius={props.borderRadius}
    />
  );
};

export default Checkbox;
