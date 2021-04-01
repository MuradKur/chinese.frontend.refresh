export interface PriceArticle {
  article: string;
  brand: string;
  id: string;
  name: string;
}

export interface Article {
  amount: string | number;
  article: string;
  brand: string;
  delivery?: string | number;
  id: string;
  name: string;
  qty: number;
  sclad_id: string;
  sclad_name: string;
  suppliersRating: number;
  harcode?: string;
  num_1c?: string;
  stock?: string;
}

export interface PriceArticleResponse {
  allBrands: string[];
  article: string;
  brand: string;
  otherArticles: Article[];
  othersKoreana: Article[];
  othersPortal: Article[];
  requestedKoreana: Article[];
  requestedPortal: Article[];
}
