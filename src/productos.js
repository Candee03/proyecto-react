const productos = [
    {
    numero:1,
    nombre: 'poncho', 
    precio: 20000,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%2025.png?alt=media&token=2db336a7-9ba5-45c6-8878-1189d6165c7e','https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%2026.png?alt=media&token=8345e185-f88e-4253-9d55-3b3935d771a9'],
    categoria:'ropa',
    description: 'Elaborado con lana de algodón y lana pelo de mono. Detalles con perlas y flores artesanales. Modelo único.',
    stock: 1
    },
    {
    numero:2,
    nombre: 'gorro y pocho', 
    precio:15000,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%207.png?alt=media&token=d872e2f4-0e05-4159-9c49-32b309862d30', 'https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%208.png?alt=media&token=cc442c41-d637-46b8-b23d-185ff3c7a747'],
    categoria:'infantil',
    description: 'Conjunto para niña. Lanas de algodón grueso mezclada con lana frizz. Conjunto único.',
    stock: 1
    },
    {
    numero:3,
    nombre: 'bufanda', 
    precio:5000,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%2011.png?alt=media&token=3ce3db10-4516-438c-be6a-3d24ef4b2934','https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%2012.png?alt=media&token=71f74261-5596-4636-8b9f-a5cf36b5abf1'],
    categoria:'accesorios',
    description: 'Elaborada con lana pelo de mono, en colores degradeé. Modelo único. ',
    stock: 1
    },
    {
    numero:4,
    nombre: 'campera', 
    precio:17000,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%208.png?alt=media&token=a6224c61-1d0f-4a38-bf58-9dc5c57d2369'],
    categoria:'ropa',
    description: 'Con lanas de excelente calidad con detalles. Modelo único.',
    stock: 1
    },
    {
    numero:5,
    nombre: 'chal flores', 
    precio:10000,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%2024.png?alt=media&token=5fe43111-ef5d-428b-a420-0f4812fb3394','https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%2023.png?alt=media&token=a28d7489-16f5-4172-b743-7a1225c077e3'],
    categoria:'accesorios',
    description: 'Con lana de algodón grueso. Varios modelos con convinaciones únicas.',
    stock: 4
    },
    {
    numero:6,
    nombre: 'remera', 
    precio:10000,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%207.png?alt=media&token=8d3c06db-8168-40bb-90e8-d4991b64fb75'],
    categoria:'ropa',
    description: 'tejido a mano con lana de excelente calidad',
    stock: 1
    },
    {
    numero:7,
    nombre: 'Conjunto Niño', 
    precio:13500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%202.png?alt=media&token=8dc78f23-261e-4cf8-b1e8-edaa4dc23157'],
    categoria:'infantil',
    description: 'tejido a mano con lana de excelente calidad',
    stock: 2    
    },
    {
    numero:8,
    nombre: 'mantita', 
    precio:3500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%2015.png?alt=media&token=bf08dc10-04d2-4015-90d6-e110acdab2d4','https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%2016.png?alt=media&token=19addaef-6dbb-4a66-a244-f12d4d2c4c04','https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%203.png?alt=media&token=361d209d-1002-42e1-a703-f9152de46cb4'],
    categoria:'infantil',
    description: 'Mantita para cuna de bebé. Tejida con lana de algodón suave.',
    stock: 4
    },
    {
    numero:9,
    nombre: 'chal amarillo', 
    precio:3500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%2021.png?alt=media&token=a7a08a25-46ad-402f-b8a0-06b7b0a4caef','https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%2022.png?alt=media&token=daf182ce-f465-49f5-99e4-03eea9013aec'],
    categoria:'accesorios',
    description: 'Elaborado con hilo peruano ideal para medias estaciones.',
    stock: 3
    },
    {
    numero:10,
    nombre: 'poncho Violeta', 
    precio:15500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%209.png?alt=media&token=53f41a17-c538-4bfa-9866-acdbbeab9bc2'],
    categoria:'ropa',
    description: 'Elaborado con lana de algodón y lana pelo de mono. Modelo único.',
    stock: 1
    },
    {
    numero:11,
    nombre: 'poncho beige', 
    precio:15500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%2010.png?alt=media&token=173da6d5-b153-473e-befc-bc45ad50e84e'],
    categoria:'ropa',
    description: 'Elaborado con lana de algodón y lana pelo de mono. Modelo único.',
    stock: 1
    },
    {
    numero:12,
    nombre: 'poncho con rojo', 
    precio:15500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%2011.png?alt=media&token=d23ccc8b-7dda-4613-9558-5247ec38ffe5'],
    categoria:'ropa',
    description: 'Elaborado con lana de algodón y lana pelo de mono. Modelo único.',
    stock: 1
    },
    {
    numero:13,
    nombre: 'chal azul', 
    precio:3500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%205.png?alt=media&token=ebb1d098-73fe-4ea3-b97d-1c4b8b95c74f','https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Imagen%20de%20WhatsApp%202023-03-24%20a%20las%2018.50%204.png?alt=media&token=7b3e7a69-14ba-44c4-a14b-65acb6e5e149'],
    categoria:'accesorios',
    description: 'Elaborado con lana pelo de mono y de algodón.',
    stock: 1
    },
    {
    numero:14,
    nombre: 'chal multicolor', 
    precio:3500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%206.png?alt=media&token=c534c170-752f-4c2a-beac-823c6c7b9037'],
    categoria:'accesorios',
    description: 'Elaborado con lana pelo de mono y de algodón.',
    stock: 1
    },
    {
    numero:15,
    nombre: 'chal violeta', 
    precio:3500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%204.png?alt=media&token=d427d7bb-8d5c-4373-bc0e-1df23249b871','https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%2018.png?alt=media&token=00f736d6-5705-4c93-baac-287aed9fdd8a'],
    categoria:'accesorios',
    description: 'Elaborado con lana pelo de mono y de algodón. Modelo único',
    stock: 1
    },
    {
    numero:16,
    nombre: 'poncho recto beige', 
    precio:15500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%201.png?alt=media&token=ae2bbe38-d4e0-423e-9762-036e73caa28d','https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/image%202.png?alt=media&token=0766f551-bd7a-4198-9f07-61c3a088722c'],
    categoria:'ropa',
    description: 'Elaborado con lana de algodón. En punta adelante y recto detrás Modelo único.',
    stock: 1
    },
    {
    numero:17,
    nombre: 'chal coral', 
    precio:4000,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Imagen%20de%20WhatsApp%202023-03-24%20a%20las%2018.50%2013.png?alt=media&token=99867726-9daa-40a3-ab19-a9dd49356d5e','https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%2021.png?alt=media&token=7983d173-2a25-4dda-bd77-1b69a673dfb2'],
    categoria:'accesorios',
    description: 'Elaborado con hilo peruano ideal para medias estaciones.',
    stock: 2
    },
    {
    numero:18,
    nombre: 'bufanda prícipe de gales', 
    precio:6000,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%2018.png?alt=media&token=146cc0d5-8d97-469a-afda-5a15d9f17b54','https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%2019.png?alt=media&token=6a041e08-9be4-40bf-b682-89958d56613b'],
    categoria:'accesorios',
    description: 'Elaborada con lana de algodón. Modelo único. ',
    stock: 1
    },
    {
    numero:19,
    nombre: 'gorro blanco', 
    precio:2600,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%2016.png?alt=media&token=c0d66e05-c14d-49a3-97ac-3d07ddaafdec'],
    categoria:'accesorios',
    description: 'Elaborada con lana de algodón.',
    stock: 4
    },
    {
    numero:20,
    nombre: 'gorro negro', 
    precio:2600,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%2015.png?alt=media&token=239226c3-c73d-415a-a1a9-7564b1c3f596'],
    categoria:'accesorios',
    description: 'Elaborada con lana de algodón.',
    stock: 3
    },
    {
    numero:21,
    nombre: 'saquito gris', 
    precio:17500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%2020.png?alt=media&token=e380e945-0fda-4437-b6a0-981cc710ff53'],
    categoria:'infantil',
    description: 'Elaborada con lana de algodón. Tiene bolsillos. Modelo único',
    stock: 1
    },
    {
    numero:22,
    nombre: 'saquito rosa', 
    precio:17500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%2017.png?alt=media&token=485f82f5-bcaf-448b-a4f5-86b0370b4adf'],
    categoria:'infantil',
    description: 'Elaborada con lana de algodón. Tiene bolsillos. Modelo único',
    stock: 1
    },
    {
    numero:23,
    nombre: 'bufanda de corazones', 
    precio:3500,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Group%2012.png?alt=media&token=6f1187a3-6f47-4bd6-b989-b262598bd126'],
    categoria:'infantil',
    description: 'Elaborada con lana de algodón. Modelo único',
    stock: 1
    },
    {
    numero:24,
    nombre: 'chal blanco', 
    precio:5000,
    img: ['https://firebasestorage.googleapis.com/v0/b/dollytienda-b36ab.appspot.com/o/Imagen%20de%20WhatsApp%202023-03-24%20a%20las%2018.50%203.png?alt=media&token=fad39576-5bea-4431-86b1-45bb27315a11'],
    categoria:'accesorios',
    description: 'Elaborada con lana de algodón. Detalles con lana pelo de mono. Modelo único',
    stock: 1
    },
]

export default productos;