import { FC, useCallback } from 'react';
import { List } from 'antd';
import './NewCard.scss';
import { NewsType } from '../../typings/graphql';
import { Link } from 'react-router-dom';

interface IExternalProps {
  data: NewsType[];
}

interface IProps extends IExternalProps {}

const NewsCards: FC<IProps> = ({ data }) => {
  const renderItem = useCallback((item: NewsType) => {
    return (
      <List.Item className="NewCard wow fadeInRight" key={item.title}>
        <List.Item.Meta
          title={
            <Link className="NewCard-title" to={`/news/${item.id}`}>
              {item.title}
            </Link>
          }
          description={item.dateCreated}
        />
        {item.content}
      </List.Item>
    );
  }, []);

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={data}
      renderItem={renderItem}
    />
  );
};

export default NewsCards;
