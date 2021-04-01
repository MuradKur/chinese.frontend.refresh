import { AutoComplete, AutoCompleteProps } from 'antd';
import { FC } from 'react';
import './SearchInput.scss';

interface IExternalProps {}

interface IProps extends IExternalProps, AutoCompleteProps {}

const SearchInput: FC<IProps> = (props) => {
  return (
    <div className="Search-input">
      <AutoComplete
        placeholder="Введите название СТО"
        className="search-block--input"
        {...props}
      />
    </div>
  );
};

export default SearchInput;
