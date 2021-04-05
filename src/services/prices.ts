export class PricesApi {
  static URL = 'https://app.china-parts.ru/prices';

  static getPricesByArticle = (article: string, brand?: string) => {
    return fetch(
      `${PricesApi.URL}?article=${article}${brand ? '&brand=' + brand : ''}`,
    ).then((response) => response.json());
  };

  static getPricesById = (id: string) => {
    return fetch(`${PricesApi.URL}?id=${id}`).then((response) =>
      response.json(),
    );
  };
}
