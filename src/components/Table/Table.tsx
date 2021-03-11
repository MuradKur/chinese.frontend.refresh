import { Empty } from 'antd';
import { FC, useCallback } from 'react';
import './Table.scss';

export interface ColumnsType {
  title?: string | (() => React.ReactNode);
  key: string;
}

interface IExternalProps {
  columns?: ColumnsType[];
  classNameHeader?: string;
  className?: string;
  data?: Array<{
    [key: string]: {
      value: any;
      render?: (key?: string) => any;
    };
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

  const renderBody = useCallback(() => {
    if (!data || !columns || data.length === 0 || columns.length === 0) {
      return <Empty />;
    }
    return data.map((item) => {
      return (
        <div className="Table-body--row">
          {columns.map((column) => {
            if (item[column.key]) {
              if (typeof item[column.key].render === 'function') {
                return (
                  <div className="Table-body--cell">
                    {/* @ts-ignore */}
                    {item[column.key].render(item[column.key].value)}
                  </div>
                );
              }
              return (
                <div className="Table-body--cell">{item[column.key].value}</div>
              );
            }

            return null;
          })}
        </div>
      );
    });
  }, [columns, data]);

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
