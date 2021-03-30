import { Empty } from 'antd';
import { FC, useCallback } from 'react';
import './Table.scss';

export interface ColumnsType {
  title?: string | (() => React.ReactNode);
  key: string;
}

export interface TableItem {
  value?: any;
  render?: (key?: string) => any;
  className?: string;
}

interface IExternalProps {
  columns?: ColumnsType[];
  classNameHeader?: string;
  className?: string;
  onRowClick?: (data: TableItem) => void;
  data?: Array<{
    [key: string]: TableItem;
  }>;
  hideHeader?: boolean;
}

interface IProps extends IExternalProps {}

const Table: FC<IProps> = ({
  columns,
  hideHeader,
  data,
  className,
  classNameHeader,
  onRowClick,
}) => {
  const renderHeader = useCallback(() => {
    if (!columns) {
      return null;
    }
    return columns.map((column) => {
      if (column.title === 'undefined' || column.title === null) {
        return null;
      }

      if (typeof column.title === 'function') {
        return (
          <div key={column.key} className="Table-header--title">
            {column.title()}
          </div>
        );
      }

      return (
        <div key={column.key} className="Table-header--title">
          {column.title}
        </div>
      );
    });
  }, [columns]);

  const handleRowClick = useCallback(
    (data: TableItem) => {
      return () => {
        if (onRowClick) {
          onRowClick(data);
        }
      };
    },
    [onRowClick],
  );

  const renderBody = useCallback(() => {
    if (!data || !columns || data.length === 0 || columns.length === 0) {
      return <Empty />;
    }
    return data.map((item, index) => {
      return (
        <div
          className="Table-body--row"
          key={index}
          onClick={handleRowClick(item)}>
          {columns.map((column, idx) => {
            if (item[column.key]) {
              if (typeof item[column.key].render === 'function') {
                return (
                  <div
                    key={idx}
                    className={`Table-body--cell ${
                      item[column.key].className
                    }`}>
                    {/* @ts-ignore */}
                    {item[column.key].render(item[column.key].value)}
                  </div>
                );
              }
              return (
                <div
                  key={idx}
                  className={`Table-body--cell ${item[column.key].className}`}>
                  {item[column.key].value}
                </div>
              );
            }

            return null;
          })}
        </div>
      );
    });
  }, [columns, data, handleRowClick]);

  return (
    <div className={`Table ${className || ''}`}>
      {!hideHeader && (
        <header className={`Table-header ${classNameHeader || ''}`}>
          {renderHeader()}
        </header>
      )}
      <div className="Table-body">{renderBody()}</div>
    </div>
  );
};

export default Table;
