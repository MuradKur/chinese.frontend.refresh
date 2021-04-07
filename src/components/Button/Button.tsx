import { Button } from 'antd';
import { FC } from 'react';
import { COLORS } from '../../constants';
import './Button.scss';

interface IExternalProps {
  color?: string;
  bgColor?: string;
  customStyles?: { [key: string]: string | number };
  onClick?: (e?: any) => void;
  onMouseMove?: (e: any) => void;
  onMouseOut?: (e: any) => void;
  className?: string;
  disabled?: boolean;
}

export interface IButtonProps extends IExternalProps {}

interface IProps extends IExternalProps {}

const CustomButton: FC<IProps> = ({
  onClick,
  className,
  onMouseOut,
  bgColor,
  color,
  customStyles,
  children,
  onMouseMove,
  disabled,
}) => {
  const style = {
    backgroundColor: disabled ? COLORS.lightgray : bgColor || COLORS.red,
    color: color || COLORS.white,
  };

  return (
    <Button
      onMouseOut={onMouseOut}
      onMouseMove={onMouseMove}
      className={`button ${className}`}
      style={{ ...style, ...customStyles }}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}>
      {children}
    </Button>
  );
};

export default CustomButton;
