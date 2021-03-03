import { FC } from 'react';
import './ContactCard.scss';

interface IExternalProps {
  title?: string;
  phone: string;
  date: string;
}

interface IProps extends IExternalProps {}

const ContactCard: FC<IProps> = ({ title, phone, date }) => {
  return (
    <div className="ContactCard">
      {title && (
        <a href="/" className="ContactCard-title">
          {title}
        </a>
      )}
      {phone && (
        <a href={`tel: ${phone}`} className="ContactCard-phone">
          {phone}
        </a>
      )}
      {date && <span>{date}</span>}
    </div>
  );
};

export default ContactCard;
