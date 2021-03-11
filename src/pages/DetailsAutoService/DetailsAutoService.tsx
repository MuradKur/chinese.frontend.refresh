import { FC } from 'react';
import AutoServiceTable from '../../components/AutoServiceTable/AutoServiceTable';
import Details from '../../shablons/Details/Details';
import './DetailsAutoService.scss';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const DetailsAutoService: FC<IProps> = () => {
  return (
    <div>
      <Details>
        <AutoServiceTable />
      </Details>
    </div>
  );
};

export default DetailsAutoService;
