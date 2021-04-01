import { AutoComplete } from 'antd';
import { FC, useCallback, useState } from 'react';
import './SearchInput.scss';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const SearchInput: FC<IProps> = () => {
  const [focused, setFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <div className="Search-input">
      <AutoComplete
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Введите название СТО"
        className="search-block--input"
      />
    </div>
  );
};

export default SearchInput;
