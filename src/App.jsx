import React from 'react';
import PropertyList from './propertylist';
import styles from './App.module.css';

const properties = [
  {
    id: 1,
    name: 'Aarambh',
    pictureUrl: 'https://newprojects.99acres.com/projects/group_satellite/satellite_aarambh/images/fubad7m_1710402307_479873338_large.jpg',
    price: 6623000 ,
    details: '1 BHK Apartment | 1 RK Studio Apartment, Malad, East Mumbai'
  },
  {
    id: 2,
    name: 'Aparna Newlands ',
    pictureUrl: 'https://newprojects.99acres.com/projects/aparna_constructions_and_estates/aparna_newlands/images/umytqdg_1709891883_478448800_large.jpg',
    price: 19300000,
    details: '2, 3 BHK Apartment, Tellapur, Hyderabad'
  },
  {
    id: 3,
    name: 'Jindal Air',
    pictureUrl: 'https://newprojects.99acres.com/projects/jindal_builders_and_developers/jindal_imperia/images/cuxgssx_1710143979_479047998_large.jpg',
    price: 4500000,
    details: '1, 2, 3 BHK Apartment, Panvel, Navi Mumbai'
  },
  {
    id: 4,
    name: 'Platinum East Woods',
    pictureUrl: 'https://newprojects.99acres.com/projects/platinum_narya_infra/platinum_east_woods/images/e7sbdaw_1709099857_476292976_large.jpg',
    price: 23000000,
    details: '2, 3, 4 BHK Apartment, Whitefield, Bangalore East'
  },
  {
    id: 5,
    name: 'Forestville by Oberoi Realty',
    pictureUrl: 'https://newprojects.99acres.com/projects/oberoi_realty/oberoi_kolshet/images/jbkgth2_1699603386_455804830_large.jpg',
    price: 18700000,
    details: '3 BHK Apartment, Kolshet, Thane'
  },
  {
    id: 6,
    name: 'Natasha Atlantis',
    pictureUrl: 'https://newprojects.99acres.com/projects/natasha_developers/natasha_atlantis/images/nc7x9de_1692338990_440259602_med.jpg',
    price: 910000,
    details: '1, 2 BHK Apartment in Vikhroli East, Mumbai'
  },
  {
    id: 7,
    name: 'Sheth Montana',
    pictureUrl: 'https://newprojects.99acres.com/projects/sheth__developers/sheth_monatana/images/u1mcf7l9_med.jpg',
    price: 800000,
    details: '2, 3, 4, 5, 7 BHK Apartment in Mulund West, Mumba'
  },
  {
    id: 8,
    name: 'Sumadhuras Gardens By The Brook',
    pictureUrl: 'https://newprojects.99acres.com/projects/sumadhura_infracon/sumadhuras_gardens_by_the_brook/images/4condpt_1709012700_476067460_large.jpg',
    price: 16500000,
    details: '2, 3 BHK Apartment, Shamshabad, Hyderabad'
  }

];

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Real Estate Properties</h1>
      <PropertyList properties={properties} />
    </div>
  );
};

export default App;