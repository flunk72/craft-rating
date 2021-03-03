
const breweryList = [
  {
    id: 1,
    title: '4Brewers'
  },
  {
    id: 2,
    title: 'AFBrew'
  },
  {
    id: 3,
    title: 'Jaws'
  },
  {
    id: 4,
    title: 'Rewort'
  },
  {
    id: 5,
    title: 'Saldens'
  },
  {
    id: 6,
    title: 'Konix'
  },
  {
    id: 7,
    title: 'Zagovor'
  },
  {
    id: 8,
    title: 'Plan B'
  },
  {
    id: 9,
    title: 'Brewlok'
  },
  {
    id: 10,
    title: 'Ostrovica'
  },
  {
    id: 11,
    title: 'Sabotage'
  },
  {
    id: 12,
    title: 'Salfmade'
  },
  {
    id: 13,
    title: 'Bakunin'
  },
  {
    id: 14,
    title: 'Bottle Share'
  }
]

const craftCart = [
  {
    id: 1,
    brewery: '4Brewers',
    name: 'High Dispersion',
    disription: '',
    sort: 'IPA',
    coverImage: 'https://craftbeer78.ru/images_beers/1474/240-craftbeer78.ru-high-dispersion-citra-mosaic-4brewers.jpg'
  },
  {
    id: 2,
    brewery: 'AFBrew',
    name: 'Mosaic',
    disription: '',
    sort: 'AIPA',
    coverImage: 'https://lenta.gcdn.co/globalassets/1/-/49/36/07/187546.png?preset=fulllossywhite'
  },
  {
    id: 3,
    brewery: 'Jaws',
    name: 'Sour Swing',
    disription: '',
    sort: 'Sour Ale',
    coverImage: 'https://lh3.googleusercontent.com/proxy/oiZg4-V83fUq6KvZgYA8VTM14n3d10DcPJ-48zfn7xOL6UwMc0akohvCLxhh91Ods8UzvKkS_L5YOPlCQ1me'
  },
  {
    id: 4,
    brewery: 'Rewort',
    name: 'Grape Babe',
    disription: '',
    sort: 'NE DIPA',
    coverImage: 'http://upivo.ru/images/virtuemart/product/00-00001492_1.jpg'
  },
  {
    id: 5,
    brewery: 'Saldens',
    name: 'Sweet Stout Cola',
    disription: '',
    sort: 'Stout',
    coverImage: 'https://pivokom.ru/upload/iblock/4f3/4f33bc0da1847ca61666939cc531b5a2.JPG'
  },
  {
    id: 6,
    brewery: 'Konix',
    name: 'Black Illusion',
    disription: '',
    sort: 'Milk Stout',
    coverImage: 'https://pivokom.ru/upload/iblock/1db/1db010e8de05a1b97d0d06659361d20a.JPG'
  },
  {
    id: 7,
    brewery: 'Zagovor',
    name: 'Lost in Fiords',
    disription: '',
    sort: 'DDH Tark Kveik IPA',
    coverImage: 'https://2po2.ru/upload/iblock/472/472b37d838faaa4162a579b1fea58f4c.png'
  },
  {
    id: 8,
    brewery: 'Plan B',
    name: 'Elusive Brewing',
    disription: '',
    sort: 'Belgian Pale Ale',
    coverImage: 'https://images.squarespace-cdn.com/content/v1/58e0e8cee3df2870d80b0133/1601899361439-0YGJBT579ORDWR8OGKGV/ke17ZwdGBToddI8pDm48kO02XVHWxY5ilQDrSRO1nrF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p4XabXLlNWpcJMv7FrN_NIm5R4-lN0aWkIuF5HpPXX3jmqacz-lfz79yns2Ur1_Vw/Plan+B+Can+Mockup+JPG.jpg?format=2500w'
  },
  {
    id: 9,
    brewery: 'Brewlok',
    name: 'Koshey',
    disription: '',
    sort: 'Indian Pepper Stout',
    coverImage: 'https://pivokom.ru/upload/iblock/a19/a19edd5653d80675b2866dac2bba69c6.JPG'
  },
  {
    id: 10,
    brewery: 'Ostrovica',
    name: 'Lacto Cafe',
    disription: '',
    sort: 'Lactose Pale Ale with Mango & Passion Fruit',
    coverImage: 'https://s.wine.style/images_gen/102/102710/0_0_orig.jpg'
  },
  {
    id: 11,
    brewery: 'Sabotage',
    name: 'Trouble Brewing',
    disription: '',
    sort: 'IPA',
    coverImage: 'https://www.craftbeersdelivered.com/image/cache/catalog/beer/Trouble%20Brewing%20Sabotage-600x600w.png'
  },
  {
    id: 12,
    brewery: 'Salfmade',
    name: 'Tomato Method',
    disription: '',
    sort: 'Gose',
    coverImage: 'https://craftbeer78.ru/images_beers/1836/500-craftbeer78.ru-tomato-method-selfmade-brewery.jpg'
  },
  {
    id: 13,
    brewery: 'Bakunin',
    name: 'Untitled Art',
    disription: '',
    sort: 'Hazy IPA',
    coverImage: 'https://cdn.shopify.com/s/files/1/0227/0581/products/Untitled-Art-Forward-Hazy-IIPA-16OZ-CAN_620x.jpg?v=1587013203'
  },
  {
    id: 14,
    brewery: 'Bottle Share',
    name: 'Manzylla',
    disription: '',
    sort: 'IPA',
    coverImage: 'https://startpivo.ru/uploads/posts/2019-12/1576263056_pivo-manzylla-ot-bottle-share.jpg'
  }
]
export default class CraftService {
  getBrewerys(){
    return breweryList
  }
  getCrafts(){
    return craftCart
  }
}
