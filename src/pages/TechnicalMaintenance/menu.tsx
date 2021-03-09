import {
  AiFillCar,
  AiFillDashboard,
  AiFillGift,
  AiFillSetting,
  AiFillSliders,
  AiOutlineArrowLeft,
  AiTwotoneTool,
} from 'react-icons/ai';
import { BiBroadcast, BiDevices, BiStation } from 'react-icons/bi';
import { IMenuItem } from '../../components/LeftSideBar/LeftSideBar';
import { COLORS } from '../../constants';

export const LeftSideBarMenu: Array<IMenuItem> = [
  {
    id: 1,
    label: {
      type: 'label',
      value: 'Автосерсив',
      link: '/autoservice',
      icon: (
        <AiOutlineArrowLeft color={COLORS.red} size={20} className="mr-1" />
      ),
    },
  },
  {
    id: 2,
    label: {
      type: 'label',
      value: 'Акции автосервисов',
      link: '/',
      icon: <AiFillGift color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 3,
    label: {
      type: 'label',
      value: 'Плановое ТО',
      link: '/',
      icon: <AiFillCar color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 4,
    label: {
      type: 'label',
      value: 'Популярные услуги автосервиса',
      link: '/',
      icon: <AiFillSetting color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 5,
    label: {
      type: 'label',
      value: 'Диагностика и ремонт подвески',
      link: '/',
      icon: <AiFillSliders color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 6,
    label: {
      type: 'label',
      value: 'Ремонт и обслуживание тормозной системы',
      link: '/',
      icon: <AiTwotoneTool color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 7,
    label: {
      type: 'label',
      value: 'Ремонт рулевого уплавления',
      link: '/',
      icon: <AiFillDashboard color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 8,
    label: {
      type: 'label',
      value: 'Ремонт и обслуживание топливной системы',
      link: '/',
      icon: <AiFillCar color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 9,
    label: {
      type: 'label',
      value: 'Компьютерная диагностика',
      link: '/',
      icon: <BiDevices color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 10,
    label: {
      type: 'label',
      value: 'Диагностика, обслуживание и ремонт АКПП',
      link: '/',
      icon: <BiBroadcast color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 11,
    label: {
      type: 'label',
      value: 'Диагностика, обслуживание и ремонт МКППП',
      link: '/',
      icon: <BiStation color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 12,
    label: {
      type: 'label',
      value: 'Диагностика, ремонт, замена двигателя',
      link: '/',
      icon: <BiStation color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 13,
    label: {
      type: 'label',
      value: 'Ремонт автоэлектрики',
      link: '/',
      icon: <BiStation color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 14,
    label: {
      type: 'label',
      value: 'Ремонт и обслуживание кондиционера',
      link: '/',
      icon: <BiStation color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 15,
    label: {
      type: 'label',
      value: 'Развал схождения',
      link: '/',
      icon: <BiStation color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 16,
    label: {
      type: 'label',
      value: 'Шиномонтаж',
      link: '/',
      icon: <BiStation color={COLORS.red} size={20} className="mr-1" />,
    },
  },
  {
    id: 17,
    label: {
      type: 'label',
      value: 'Молярно кузовные работы',
      link: '/',
      icon: <BiStation color={COLORS.red} size={20} className="mr-1" />,
    },
  },
];

export const LeftSideBarSubMenu: Array<IMenuItem> = [
  {
    id: 2,
    label: {
      type: 'label',
      value: 'Акции автосервисов',
      link: '/',
      icon: <AiFillGift size={20} className="mr-1" />,
    },
  },
  {
    id: 3,
    label: {
      type: 'label',
      value: 'Плановое ТО',
      link: '/',
      icon: <AiFillCar size={20} className="mr-1" />,
    },
  },
  {
    id: 4,
    label: {
      type: 'label',
      value: 'Популярные услуги автосервиса',
      link: '/',
      icon: <AiFillSetting size={20} className="mr-1" />,
    },
  },
  {
    id: 5,
    label: {
      type: 'label',
      value: 'Диагностика и ремонт подвески',
      link: '/',
      icon: <AiFillSliders size={20} className="mr-1" />,
    },
  },
];
