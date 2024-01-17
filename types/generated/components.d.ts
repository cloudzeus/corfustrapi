import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactHotelContacts extends Schema.Component {
  collectionName: 'components_contact_hotel_contacts';
  info: {
    displayName: 'Hotel Contacts';
    icon: 'phone';
    description: '';
  };
  attributes: {
    contactPhone: Attribute.String;
    contactEmail: Attribute.Email;
    contactAddress: Attribute.String;
    contactZip: Attribute.String;
    contactDescription: Attribute.String;
  };
}

export interface ContactSocialMedia extends Schema.Component {
  collectionName: 'components_contact_social_medias';
  info: {
    displayName: 'Social Media Links';
    description: '';
  };
  attributes: {
    socailMediaName: Attribute.Enumeration<
      ['Facebook', 'Instagram', 'Youtube', 'Linkedin', 'TikTok']
    >;
    socialMediaLink: Attribute.String;
  };
}

export interface FacilitiesRoomArea extends Schema.Component {
  collectionName: 'components_facilities_room_areas';
  info: {
    displayName: 'Room Areas';
    description: '';
  };
  attributes: {
    roomAreaName: Attribute.String;
    roomBed: Attribute.Component<'facilities.room-beds', true>;
    roomAreaImages: Attribute.Media;
  };
}

export interface FacilitiesRoomBeds extends Schema.Component {
  collectionName: 'components_facilities_room_beds';
  info: {
    displayName: 'Room Beds';
  };
  attributes: {
    roomBedType: Attribute.String;
    bedSleeps: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.hotel-contacts': ContactHotelContacts;
      'contact.social-media': ContactSocialMedia;
      'facilities.room-area': FacilitiesRoomArea;
      'facilities.room-beds': FacilitiesRoomBeds;
    }
  }
}
