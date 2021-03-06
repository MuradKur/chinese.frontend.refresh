import { Empty } from 'antd';
import { FC, useCallback, useMemo } from 'react';
import './Table.scss';

export interface ColumnsType {
  title?: string | (() => React.ReactNode);
  key: string;
  render?: (item: any) => React.ReactNode;
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
    [key: string]: any;
  }>;
  hideHeader?: boolean;
}

interface IProps extends IExternalProps {}

export interface ITableProps extends IProps {}

const Table: FC<IProps> = ({
  columns,
  hideHeader,
  data,
  className,
  classNameHeader,
  onRowClick,
}) => {
  const style = useMemo(() => {
    return {
      gridTemplateColumns: `repeat(${columns?.length || 1}, ${
        columns?.length ? 100 / (columns.length / 1) + '%' : '1fr'
      })`,
    };
  }, [columns]);

  const renderHeader = useCallback(() => {
    if (!data || !columns || data.length === 0 || columns.length === 0) {
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
  }, [columns, data]);

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
      return <Empty className="pl-3 pt-3 pb-3 pr-3" />;
    }
    return data.map((item, index) => {
      return (
        <div
          className="Table-body--row"
          key={index}
          style={style}
          onClick={handleRowClick(item)}>
          {columns.map((column, idx) => {
            if (item[column.key] !== undefined) {
              if (typeof column.render === 'function') {
                return (
                  <div
                    key={idx}
                    className={`Table-body--cell ${
                      item[column.key].className
                    }`}>
                    {column.render(item)}
                  </div>
                );
              }

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
              if (
                typeof item[column.key] === 'string' ||
                typeof item[column.key] === 'number'
              ) {
                // console.log(item[column.key])
                return (
                  <div
                    key={idx}
                    className={`Table-body--cell ${
                      item[column.key].className
                    }`}>
                    {item[column.key]}
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

            return <div key={idx} className="able-body--cell" />;
          })}
        </div>
      );
    });
  }, [columns, data, handleRowClick, style]);

  return (
    <div className={`Table ${className || ''}`}>
      {!hideHeader && (
        <header
          style={style}
          className={`Table-header ${classNameHeader || ''}`}>
          {renderHeader()}
        </header>
      )}
      <div className="Table-body">{renderBody()}</div>
    </div>
  );
};

export default Table;
