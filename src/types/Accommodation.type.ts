/**
 * @description For Accommodation Card Gallery
 */
type AccommodationsCardInfoType = [] | AccommodationCardPropsType[];

/**
 * @description For Accommodation Individual Card
 */
type AccommodationCardPropsType = {
  url: string;
  img: string;
  title: string;
};

type AccommodationsType = [] | AccommodationType[];

type AccommodationType = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};

export type {
  AccommodationsCardInfoType,
  AccommodationCardPropsType,
  AccommodationsType,
  AccommodationType,
};
