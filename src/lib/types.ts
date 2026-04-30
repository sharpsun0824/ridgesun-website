export interface Product {
  sku: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
}

export interface Registration {
  id?: number;
  name: string;
  email: string;
  sn: string;
  product_sku: string;
  purchase_date: string;
  created_at?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}
