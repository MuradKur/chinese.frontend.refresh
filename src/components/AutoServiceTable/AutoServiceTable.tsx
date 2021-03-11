import Button from '../../components/Button/Button';
import React, { FC } from 'react';
import { COLORS } from '../../constants';
import './AutoServiceTable.scss';
import Table from '../../components/Table/Table';

interface IExternalProps {
  className?: string;
}

export const dataSource = Array.from({ length: 6 }).map(() => {
  return {
    modeWork: {
      value: '1400 руб.',
    },
    address: {
      value: ' Kia Ceed (2006 - 2012) ED 1,4/1,6 (бензин) Gamma ',
      className: 'AutoServiceTable-title',
    },
    phone: {
      value: '',
      render() {
        return (
          <div className="d-flex justify-content-end">
            <Button bgColor={COLORS.blue2}>
              {' '}
              <span className="AutoServiceTable-order ">
                {' '}
                <b>
                  {' '}
                  <a href="/"> Заказать услугу </a>{' '}
                </b>{' '}
              </span>{' '}
            </Button>
          </div>
        );
      },
    },
  };
});

export const columns = [
  {
    title: () => {
      return (
        <h3 className="font-weight mb-0 d-flex justify-content-center">Kia</h3>
      );
    },

    key: 'address',
  },
  {
    key: 'modeWork',
  },
  {
    key: 'phone',
  },
];

interface IProps extends IExternalProps {}

const AutoServiceTable: FC<IProps> = ({ className, ...restProps }) => {
  return (
    <div>
      <Table
        className="AutoServiceTable"
        classNameHeader="AutoServiceTable-header"
        data={dataSource}
        // @ts-ignore
        columns={columns}
        {...restProps}
      />
    </div>
  );
};

export default AutoServiceTable;
