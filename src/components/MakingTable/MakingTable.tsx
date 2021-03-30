import { FC } from 'react';
import './MakingTable.scss';
import Table from '../../components/Table/Table';
import { InputNumber } from 'antd';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const columns2 = [
  {
    key: 'title',
    title: 'Title',
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'brand',
    title: 'Brand',
  },
  {
    key: 'quantity',
    title: 'Quanity',
  },
  {
    key: 'price',
    title: 'Price',
  },
  {
    key: 'amount',
    title: 'Amount',
  },
  {
    key: 'button',
  },
];

const MakingTable: FC<IProps> = () => {
  const data2 = [
    {
      title: {
        render() {
          return <p className="pt-2 pl-5">P575103</p>;
        },
      },
      name: {
        render() {
          return (
            <div>
              <a className="MakingTable-link" href="/">
                Р/к поршень суппорта переднего
              </a>
            </div>
          );
        },
      },
      brand: {
        render() {
          return (
            <div>
              <p className="mb-0">FRENKIT</p>
            </div>
          );
        },
      },
      quantity: {
        render() {
          return <InputNumber min={1} max={10} defaultValue={3} />;
        },
      },
      price: {
        render() {
          return (
            <div>
              <p>440 руб.</p>
            </div>
          );
        },
      },
      amount: {
        render() {
          return <p> 440 руб.</p>;
        },
      },
      button: {
        render() {
          return (
            <div>
              <p className="MakingTable-paragraph">X</p>
            </div>
          );
        },
      },
    },
  ];

  return (
    <div>
      <div className="MakingTable-border mt-1">
        <Table className="wow fadeIn" data={data2} columns={columns2} />
      </div>
    </div>
  );
};

export default MakingTable;
