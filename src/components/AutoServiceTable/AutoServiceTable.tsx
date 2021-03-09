import { Table, TableProps } from 'antd';
import React, { FC } from 'react';

interface IExternalProps {
  className?: string;
}

export const dataSource = [
  {
    key: '1',
    modeWork: 'пн-вс: 09:00-21:00',
    address: 'Народного Ополчения пр., д.201',
    phone: '+7(812) 640-77-99',
  },
  {
    key: '2',
    modeWork: 'пн-вс: 09:00-21:00',
    address: 'Народного Ополчения пр., д.201',
    phone: '+7(812) 640-77-99',
  },
];

interface IProps extends IExternalProps, TableProps<any> {}

const AutoServiceTable: FC<IProps> = ({ className, ...restProps }) => {
  return (
    <div>
      <Table
        showHeader={false}
        pagination={false}
        className={`wow fadeIn ${className}`}
        {...restProps}
      />
    </div>
  );
};

export default AutoServiceTable;
