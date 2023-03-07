import bufandaImg from './img/bufanda.jpg'

const productosData = [
    {
    id:1,
    nombre: 'poncho', 
    precio:5000,
    img: "https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/IMG_20220808_172346.jpg?alt=media&token=64e0a7a5-f5e8-4471-bbdb-91bd9a8c7f45",
    categoria:2,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:2,
    nombre: 'gorro', 
    precio:500,
    img: 'https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/IMG-20200818-WA0003.jpg?alt=media&token=900c0c7a-12d2-47ea-8d68-8fe645d42264',
    categoria:1,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:3,
    nombre: 'bufanda', 
    precio:1500,
    img: 'https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/bufanda.jpg?alt=media&token=9170999c-2a16-4253-96ad-d728ab34b5ac',
    categoria:1,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:4,
    nombre: 'campera', 
    precio:7500,
    img: "https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/IMG_20210201_164319.jpg?alt=media&token=1690de7b-4e8a-4f4b-9129-06e65d11eed0",
    categoria:2,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:5,
    nombre: 'chal', 
    precio:4500,
    img: "https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/IMG_20220731_174028.jpg?alt=media&token=2a83dcbe-90f2-4bd6-9acb-d91c210aed3c",
    categoria:1,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:6,
    nombre: 'remera', 
    precio:10000,
    img: "https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/IMG_20210116_165509.jpg?alt=media&token=1476b5c9-70ec-415e-94a6-0a399184bb3c",
    categoria:2,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:7,
    nombre: 'gorrito bebe', 
    precio:1500,
    img: "https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/IMG-20200818-WA0003.jpg?alt=media&token=900c0c7a-12d2-47ea-8d68-8fe645d42264",
    categoria:3,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:8,
    nombre: 'mantita', 
    precio:3500,
    img: "https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/IMG_20210616_200911.jpg?alt=media&token=e51c5fa9-ac7c-4c61-804f-9a6f7de04d96",
    categoria:3,
    description: 'tejido a mano con lana de excelente calidad'
    }
]

const productos = async() => {
    return productosData
};

export default productos;