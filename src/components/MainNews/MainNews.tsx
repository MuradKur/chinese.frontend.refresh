import { FC } from 'react';
import './MainNews.scss';

interface IExternalProps {}

interface IProps extends IExternalProps {}

// interface NewsType {
//   id: number;
//   title: string;
//   date: string;
//   content: string;
// }

const News = [
  {
    id: 0,
    title: 'СПЕЦПРЕДЛОЖЕНИЕ ДЛЯ НОВЫХ КЛИЕНТОВ "ПОПРОБУЙ".',
    date: '13.01.2021',
    content: `
      Если Вы ещё не являетесь нашим клиентом, то воспользуйтесь нашим
      спецпредложением «ПОПРОБУЙ»! Ваша выгода – скидка 15% на услуги
      сервиса. Запишитесь на сервис прямо сейчас Скидка не суммируется с
      дисконтной программой и другими акциями нашей компании.
    `,
  },
  {
    id: 1,
    title: 'ВНИМАНИЕ ВАЖНАЯ ИНФОРМАЦИЯ!',
    date: '11.01.2021',
    content: `
      Уважаемые клиенты! СТО и магазин располагавшиеся по адресу: Полевая
      Сабировская 49 - переехали! С 27 января 2021 года ждём Вас по новому
      адресу: Богатырский пр., д.14, к.2. ( 2-й этаж) Записаться на СТО
    `,
  },

  {
    id: 2,
    title:
      'СПЕЦПРЕДЛОЖЕНИЕ "КОМБО-НАБОРЫ" В СЕТИ РОЗНИЧНЫХ МАГАЗИНОВ КОМПАНИИ"КОРЕАНА"!',
    date: '19.04.2019',
    content: `
      Уважаемые клиенты! При покупке комбо-набора №3* вы получаете скидку
      12% При покупке комбо-набора №4** вы получаете скидку 15%
      Спецпредложение действует во всех розничных магазинах компании
      "Кореана"! * В состав комбо-набора №3 входит - масляный фильтр -
      воздушный фильтр - салонный фильтр ** В состав комбо-набора №4
      входит - масляный фильтр - воздушный фильтр - салонный фильтр -
      топливный фильтр
    `,
  },
];

// const NewsItem: FC<NewsType> = (news) => {
//   const [isLoaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoaded(true);
//     }, news.id * 500);
//   }, [news.id]);

//   const styles: any = {
//     fadeInDown: {
//       animation: 'x 1s',
//       animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
//     }
//   }

//   if (!isLoaded) {
//     return null;
//   }

//   return (
//     <Radium.StyleRoot>
//       <div style={styles.fadeInDown} className="MainNews-block">
//         <a className="MainNews-link" href="/">
//           {news.title}
//         </a>
//         <p className="MainNews-data">{news.date}</p>
//         <p className="MainNews-item">
//           {news.content}
//         </p>
//       </div>
//     </Radium.StyleRoot>
//   )
// }

const MainNews: FC<IProps> = () => {
  return (
    <div>
      <h1 className="MainNews-heading">НОВОСТИ КОМПАНИИ</h1>
      <div className="MainNews-container">
        {News.map((news) => (
          <div
            key={news.id}
            className="MainNews-block wow slideInLeft"
            data-wow-duration="2s">
            <a className="MainNews-link" href="/">
              {news.title}
            </a>
            <p className="MainNews-data">{news.date}</p>
            <p className="MainNews-item">{news.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
