export interface ApiResponse<T> {
  code: number;
  data: T;
}

// Fabricated for this demo only
export interface SiteBannerData {
  alertText: string;
  ctaText: string;
  url: string;
}

export interface SearchQueryResult {
  results: {
    gifts: ProductData[];
  };
  total: number;
  pages: number;
  current_page: number;
  category_banner_image_web: string;
}

// Generated from JSON by QuickType

export interface ProductQueryResult {
  [index: number]: ProductData;
  hidden_related_gifts: string[];
}

export interface ProductData {
  id: number;
  order_id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  stock: string;
  qty_available: null;
  partner_availability_request: string;
  onetimesend: string;
  shipnational: string;
  ship_message: string;
  virtual: boolean;
  shipping: string;
  shippingcost: number;
  location: string;
  partner: string;
  shipmessage: string;
  country: string;
  option_available: string;
  option_lable: null;
  shippingmethod: string;
  waybill_confirmation: string;
  harmonized_tariff_code: string;
  donation: string;
  option_available_choice: string;
  option_available_landing: string;
  visibility: string;
  oos_text: null;
  is_email: number;
  is_address: number;
  no_rlp: number;
  default_image: ProductImage;
  message: string;
  locations: Location[];
  available_in_kiosk: boolean;
  image: string;
  additional_info: null;
  default_category: string;
  category: Category;
  personalizable: number;
  personalization_options: null;
  restriction_warning: number;
  adult_signature: boolean;
  option_label: null;
  stock_name: string;
  zip_code_set_titles: string;
  images: ProductImage[];
  merchant: Merchant;
  gift_options: any[];
  meta: ProductMetadata;
  shippingmessage: ShippingMessage;
}

export interface Category {
  id: number;
  order_id: number;
  order_id_web_ca: number;
  order_id_trending_ca: null;
  order_id_web_us: number;
  order_id_trending_us: null;
  type: string;
  created_at: string;
  updated_at: string;
  home_display: string;
  slideshow: string;
  image: string;
  image_lowres: string;
  image1: string;
  image_lowres1: string;
  status: string;
  image5: string;
  image6: string;
  banner_image_web: null;
  country: string;
  location: string;
  showinold: string;
  textonly: string;
  banneronly: string;
  cat_home: string;
  headerimage: null;
  hidden_cat: string;
  restriction_warning: number;
  default_image: string;
  status_name: string;
  country_names: string;
  url: string;
}

export interface ProductImage {
  id: number;
  gift_id: number;
  image: string;
  is_default: string;
  is_order: number;
  image_id: null;
  is_soft_deleting: boolean;
}

export interface Location {
  id: number;
  country_id: number;
  name: string;
  status: string;
  lat: string;
  long: string;
  area: string;
  created_at: string;
  is_default: string;
  order_id: string;
  is_soft_deleting: boolean;
}

export interface Merchant {
  partnername: string;
  order_description_character_limit: null;
}

export interface ProductMetadata {
  gift_id: number;
  num_views: number;
  num_likes: number;
  num_orders: number;
  age: number;
  last_order_days: number;
  week_num_views: null;
  week_num_likes: null;
  week_num_orders: null;
  month_num_views: null;
  month_num_likes: null;
  month_num_orders: null;
  score_boost: number;
  major_keywords: null;
  minor_keywords: null;
  updated_at: string;
  is_soft_deleting: boolean;
}

export interface ShippingMessage {
  id: number;
  message: string;
  created_at: string;
  is_soft_deleting: boolean;
}
