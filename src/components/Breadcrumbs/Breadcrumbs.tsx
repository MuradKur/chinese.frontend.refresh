import { Breadcrumb } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';
import './Breadcrumbs.scss';

const BreadcrumbsComponent = () => {
  const match = useRouteMatch();
  const routes = match.url.split('/').filter(Boolean);

  if (!routes.length) {
    return null;
  }

  const navs: any = routes.map((item) => {
    let itemLabel = item;

    if (itemLabel.includes('-')) {
      itemLabel = itemLabel.replace('-', '');
    }

    return itemLabel
      .split('')
      .map((c, i) => (i === 0 ? c.toUpperCase() : c))
      .join('');
  });

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Главная</Link>
      </Breadcrumb.Item>
      {navs.map((route: string, index: number) => {
        if (index + 1 === navs.length) {
          return <Breadcrumb.Item key={index}>{route}</Breadcrumb.Item>;
        }

        return (
          <Breadcrumb.Item key={index}>
            <Link to={`/${route.toLowerCase()}`}>{route}</Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbsComponent;
