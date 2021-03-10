import { Table, TableProps } from 'antd';
import Button from '../../components/Button/Button';
import React, { FC } from 'react';
import { COLORS } from '../../constants';
import { ColumnsType } from 'antd/lib/table';
import './AutoServiceTable.scss';

interface IExternalProps {
  className?: string;
}

export const dataSource = [
  {
    key: '1',
    modeWork: '1400 руб.',
    address: ' Kia Ceed (2006 - 2012) ED 1,4/1,6 (бензин) Gamma ',
    phone: '+7(812) 640-77-99',
  },
  {
    key: '2',
    modeWork: '1400 руб.	',
    address: ' Kia Ceed (2006 - 2012) ED 1,4/1,6 (бензин) Gamma ',
    phone: '+7(812) 640-77-99',
  },
];

export const columns: ColumnsType = [
  {
    title: () => {
      return (
        <h3 className="font-weight mb-0 d-flex justify-content-end">Kia</h3>
      );
    },
    dataIndex: 'address',
    key: 'address',
  },
  {
    dataIndex: 'modeWork',
    key: 'modeWork',
  },
  {
    dataIndex: 'phone',
    key: 'phone',
    render() {
      return (
        <Button bgColor={COLORS.blue2}>
          {' '}
          <span className="AutoServiceTable-order ">
            {' '}
            <b>
              {' '}
              <b>
                {' '}
                <a href="/"> Заказать услугу </a>{' '}
              </b>{' '}
            </b>{' '}
          </span>{' '}
        </Button>
      );
    },
  },
];

interface IProps extends IExternalProps, TableProps<any> {}

const AutoServiceTable: FC<IProps> = ({ className, ...restProps }) => {
  return (
    <div>
      <Table
        className="AutoServiceTable"
        showHeader={true}
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        {...restProps}
      />
    </div>
  );
};

export default AutoServiceTable;
