import CityImg from '../../assets/images/ik.png';
import NikeImg from '../../assets/images/nk.png';
import YankariImg from '../../assets/images/yankari.jpeg';

export const groupTrips = [
  {
    id: 0,
    img: CityImg,
    resortName: 'Zuma Rock Hiking',
    resortDescription:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius, possimus alias hic ipsa voluptatum.',
    resortLocation: 'Abuja, Nigeria',
    resortPrice: '50,000',
    tourDate: '17th November, 2022',
    tourAgent: 'John Doe',
  },
  {
    id: 1,
    img: NikeImg,
    resortName: 'Nike Art - Sip and Paint',
    resortDescription:
      'Come and have fun with your friends and family this weekend. Food, games and fun activities',
    resortLocation: 'Abuja, Nigeria',
    resortPrice: '30,000',
    tourDate: '22th November, 2022',
    tourAgent: 'Bernard Brown',
  },
  {
    id: 2,
    img: YankariImg,
    resortName: 'Yankari Game Reserve',
    resortDescription:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius, possimus alias hic ipsa voluptatum.',
    resortLocation: 'Bauchi, Nigeria',
    resortPrice: '80,000',
    tourDate: '2nd December, 2022',
    tourAgent: 'John Doe',
  },
];

export const cities = [
  {
    id: 0,
    img: CityImg,
    resortName: 'Ikogosi Warm Spring Resort',
    resortLocation: 'Ekiti State, Nigeria',
    resortRating: '4.2 | 67 Reviews',
    hasRating: true,
  },
  {
    id: 1,
    img: NikeImg,
    resortName: 'Nike Art Gallery',
    resortLocation: 'Lagos State, Nigeria',
    resortRating: '3.8 | 67 Reviews',
    hasRating: true,
  },
  {
    id: 2,
    img: YankariImg,
    resortName: 'Yankari Game Resort',
    resortLocation: 'Bauchi State, Nigeria',
    resortRating: '4.8 | 67 Reviews',
    hasRating: true,
  },
  {
    id: 3,
    img: NikeImg,
    resortName: 'Ikogosi Warm Spring Resort',
    resortLocation: 'Ekiti State, Nigeria',

    resortRating: 'No Reviews Yet',
    hasRating: false,
  },
];
