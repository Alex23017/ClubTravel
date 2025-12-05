import type { Schema, Struct } from '@strapi/strapi'

export interface SharedHotdealslist extends Struct.ComponentSchema {
  collectionName: 'components_shared_hotdealslists'
  info: {
    displayName: 'hotdealslist'
  }
  attributes: {
    category: Schema.Attribute.BigInteger
    food: Schema.Attribute.String
    hotel: Schema.Attribute.String
    price: Schema.Attribute.BigInteger
    tour: Schema.Attribute.String
  }
}

export interface SharedHotelSelect extends Struct.ComponentSchema {
  collectionName: 'components_shared_hotel_selects'
  info: {
    displayName: 'hotelSelect'
  }
  attributes: {
    category: Schema.Attribute.Integer
    food: Schema.Attribute.String
    hotel: Schema.Attribute.String
    price: Schema.Attribute.BigInteger
    tour: Schema.Attribute.String
  }
}

export interface SharedHotelsOpen extends Struct.ComponentSchema {
  collectionName: 'components_shared_hotels_opens'
  info: {
    displayName: 'hotelsOpen'
  }
  attributes: {
    category: Schema.Attribute.Integer
    food: Schema.Attribute.String
    hotel: Schema.Attribute.String
    openListSelect: Schema.Attribute.Component<'shared.hotel-select', true>
    price: Schema.Attribute.BigInteger
    tour: Schema.Attribute.String
  }
}

export interface SharedHotopenlist extends Struct.ComponentSchema {
  collectionName: 'components_shared_hotopenlists'
  info: {
    displayName: 'Hotopenlist'
  }
  attributes: {
    category: Schema.Attribute.BigInteger
    food: Schema.Attribute.String
    hotel: Schema.Attribute.String
    price: Schema.Attribute.BigInteger
    tour: Schema.Attribute.String
  }
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists'
  info: {
    displayName: 'list'
  }
  attributes: {
    opa: Schema.Attribute.String
  }
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media'
  info: {
    displayName: 'Media'
    icon: 'file-video'
  }
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>
  }
}

export interface SharedOpenResult extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_results'
  info: {
    displayName: 'openResult'
  }
  attributes: {
    dataOpen: Schema.Attribute.String
    durationOpen: Schema.Attribute.String
    foodOpen: Schema.Attribute.String
    placeOpen: Schema.Attribute.String
    priceOpen: Schema.Attribute.BigInteger
    typeOpen: Schema.Attribute.String
  }
}

export interface SharedOrder extends Struct.ComponentSchema {
  collectionName: 'components_shared_orders'
  info: {
    displayName: 'order'
  }
  attributes: {
    title: Schema.Attribute.String
  }
}

export interface SharedPosition extends Struct.ComponentSchema {
  collectionName: 'components_shared_positions'
  info: {
    displayName: 'position'
  }
  attributes: {
    description: Schema.Attribute.Text
    name: Schema.Attribute.String
  }
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes'
  info: {
    displayName: 'Quote'
    icon: 'indent'
  }
  attributes: {
    body: Schema.Attribute.Text
    title: Schema.Attribute.String
  }
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts'
  info: {
    description: ''
    displayName: 'Rich text'
    icon: 'align-justify'
  }
  attributes: {
    body: Schema.Attribute.RichText
  }
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos'
  info: {
    description: ''
    displayName: 'Seo'
    icon: 'allergies'
    name: 'Seo'
  }
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required
    shareImage: Schema.Attribute.Media<'images'>
  }
}

export interface SharedServiceList extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_lists'
  info: {
    displayName: 'serviceList'
  }
  attributes: {
    list: Schema.Attribute.Component<'shared.services', true>
    listPosition: Schema.Attribute.Component<'shared.position', false>
    position: Schema.Attribute.Component<'shared.position', false>
  }
}

export interface SharedServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_services'
  info: {
    displayName: 'services'
  }
  attributes: {
    subServices: Schema.Attribute.Component<'shared.sub-services', true>
    title: Schema.Attribute.String
  }
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders'
  info: {
    description: ''
    displayName: 'Slider'
    icon: 'address-book'
  }
  attributes: {
    files: Schema.Attribute.Media<'images', true>
  }
}

export interface SharedSubServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_services'
  info: {
    displayName: 'subServices'
  }
  attributes: {
    name: Schema.Attribute.String
  }
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.hotdealslist': SharedHotdealslist
      'shared.hotel-select': SharedHotelSelect
      'shared.hotels-open': SharedHotelsOpen
      'shared.hotopenlist': SharedHotopenlist
      'shared.list': SharedList
      'shared.media': SharedMedia
      'shared.open-result': SharedOpenResult
      'shared.order': SharedOrder
      'shared.position': SharedPosition
      'shared.quote': SharedQuote
      'shared.rich-text': SharedRichText
      'shared.seo': SharedSeo
      'shared.service-list': SharedServiceList
      'shared.services': SharedServices
      'shared.slider': SharedSlider
      'shared.sub-services': SharedSubServices
    }
  }
}
