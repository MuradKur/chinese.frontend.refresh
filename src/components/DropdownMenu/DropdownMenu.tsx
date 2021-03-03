import { Dropdown, DropDownProps } from 'antd';
import React, { FC } from 'react';
import './DropdownMenu.scss';

interface IExternalProps {
  navs: React.ReactElement;
  label: string;
  classNameLabel?: string;
  placement?: DropDownProps['placement'];
}

interface IProps extends IExternalProps {}

const DropdownMenu: FC<IProps> = ({
  navs,
  label,
  classNameLabel,
  placement,
}) => {
  return (
    <Dropdown placement={placement || 'bottomCenter'} overlay={navs}>
      <div className={`DropdownMenu-label ${classNameLabel || ''}`}>
        {label}
      </div>
    </Dropdown>
  );
};

export default DropdownMenu;
