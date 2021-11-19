import { InputProps } from "./InputTypes";
import * as S from "./styles";

const Input = ({
  label,
  icon: Icon,
  iconDir = "left",
  iconClass,
  ...rest
}: InputProps): JSX.Element => {
  return (
    <S.Container iconDir={iconDir}>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        {Icon && <Icon className={`icon ${String(iconClass)}`} />}
        <S.Input iconDir={iconDir} {...rest} />
      </S.InputContainer>
    </S.Container>
  );
};
export default Input;
