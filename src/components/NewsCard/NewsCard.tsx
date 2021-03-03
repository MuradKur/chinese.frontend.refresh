import { FC, useCallback } from 'react';
import { List } from 'antd';
import './NewCard.scss';

interface IExternalProps {}

interface IProps extends IExternalProps {}

const listData: any = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    description: '20.02.2000',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)',
  });
}

const NewsCards: FC<IProps> = () => {
  const renderItem = useCallback((item) => {
    return (
      <List.Item
        className="NewCard wow fadeInRight"
        key={item.title}
        actions={[<div>Ваша выгода 15%</div>]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }>
        <List.Item.Meta
          title={
            <a className="NewCard-title" href={item.href}>
              {item.title}
            </a>
          }
          description={item.description}
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
      dataSource={listData}
      renderItem={renderItem}
    />
  );
};

export default NewsCards;
