import type { Schema, Struct } from '@strapi/strapi';

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'eye';
  };
  attributes: {
    canonical_url: Schema.Attribute.String;
    meta_description: Schema.Attribute.Text;
    meta_keywords: Schema.Attribute.String;
    meta_robots: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'index, follow'>;
    meta_title: Schema.Attribute.String;
    structured_data: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.seo': SeoSeo;
    }
  }
}
