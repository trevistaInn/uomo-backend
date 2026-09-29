import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json(
    {
  "data": {
    "mensStyles": [
      {
        "_id": 1,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shirts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "gender": "MEN",
        "color":["blue", "green", "pink", "yellow", "brown"],
        "size": ["S", "M", "L", "XL"],
        "quantity":0
      },
      {
        "_id": 2,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "polos",
        "price": "75.99",
        "type": "Relaxed Fit Cotton Casual Shirt",
        "brand": "Adidas",
        "discount": "12",
        "rating":4,
        "gender": "MEN",
        "color":["blue", "green", "pink", "yellow"],
        "size": ["XS", "S", "M", "L", "XL", "XXL"],
        "quantity":1
      },
      {
        "_id": 3,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "dresses",
        "price": "50.99",
        "type": "Slim Fit Casual Shirt",
        "brand": "WROGN ",
        "discount": "20",
        "rating":3,
        "gender": "MEN",
        "color":["blue", "green", "pink", "yellow", "brown", "skyblue", "darkkhaki", "orange", "teal", "darkseagreen"],
        "size": ["M", "L", "XXL"],
        "quantity":1
      },
      {
        "_id": 4,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "swimwear",
        "price": "45.99",
        "type": "Pure Cotton Casual Shirt",
        "brand": "Burberry",
        "discount": "5",
        "rating":5,
        "gender": "MEN",
        "color":["blue", "green", "pink", "yellow", "brown", "skyblue", "darkkhaki", "orange", "teal", "darkseagreen" ],
        "size": ["XS", "XXL"],
        "quantity":1
      },
      {
        "_id": 5,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "t-shirts",
        "price": "38.99",
        "type": "Regular Fit Opaque Shirt",
        "brand": "Pepe Jeans",
        "discount": "8",
        "rating":4,
        "gender": "MEN",
        "color":["blue", "green", "pink", "yellow", "brown"],
        "size": ["S", "M", "L"],
        "quantity":1
      },
      {
        "_id": 6,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "tops",
        "price": "25.99",
        "type": "Opaque Cotton Casual Shirt",
        "brand": "Andamen",
        "discount": "17",
        "rating":2,
        "gender": "MEN",
        "color":["blue", "green", "pink", "yellow", "brown"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 7,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "t-shirts",
        "price": "88.99",
        "type": "Solid Fit Casual Shirt",
        "brand": "Andamen",
        "discount":0,
        "rating":1,
        "gender": "MEN",
        "color":["blue", "green", "pink", "yellow", "brown"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 8,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "t-shirts",
        "price": "8.99",
        "type": "Slim Fit Striped Casual Shirt",
        "brand": "Andamen",
        "discount": 18,
        "rating":3,
        "gender": "MEN",
        "color":["blue", "green", "pink"],
        "size": ["XL", "XXL"],
        "quantity":1
      }
    ],
    "womenStyles": [
      {
        "_id": 9,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
         "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "jumpers",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Adidas",
        "discount": 15,
        "rating":5,
        "gender": "women",
        "color":["blue", "green", "pink", "yellow", "brown"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 10,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "cardigans",
        "price": "65.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Rare Rabbit",
        "discount": 20,
        "rating":4,
        "color":["blue", "green", "pink", "yellow"],
        "size": ["S", "M", "L", "XL", "XXXL"],
        "quantity":1,
        "gender": "women"
      },
      {
        "_id": 11,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "man",
        "price": "78.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "discount": 13,
        "rating":5,
        "color":["darkkhaki", "orange", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1,
        "gender": "women"
      },
      {
        "_id": 12,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "jeans",
        "price": "38.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Denim",
        "discount": 15,
        "rating":5,
        "color":["orange", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1,
        "gender": "women"
      },
      {
        "_id": 13,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "jackets",
        "price": "50.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "discount": 10,
        "rating":5,
        "color":["darkkhaki", "orange", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1,
        "gender": "women"
      },
      {
        "_id": 14,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "overcoat",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "DNMX",
        "discount": 18,
        "rating":4,
        "color":["orange", "teal", "darkseagreen"],
        "size": ["XS", "S", "M", "L", "XL", "XXL"],
        "quantity":1,
        "gender": "women"
      },
      {
        "_id": 15,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "jeans",
        "price": "28.39",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Denim",
        "discount": 10,
        "rating":5,
        "color":["blue", "green", "teal", "darkseagreen"],
        "size": ["S", "M", "L"],
        "quantity":1,
        "gender": "women"
      },
      {
        "_id": 16,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "kurtis",
        "price": "99.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Avaasa",
        "discount": 20,
        "rating":3,
        "color":["blue", "teal", "darkseagreen"],
        "size": ["S", "M", "L"],
        "quantity":1,
        "gender": "women"
      }
    ],
    "trendyProducts": [
      {
        "_id": 17,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "sweatshirts",
        "price": "39.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "rating": 5,
        "color":[ "teal", "darkseagreen"],
        "size": ["M", "L", "XXL"],
        "quantity":1
      },
      {
        "_id": 18,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "jumpers",
        "price": "59.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "rating":4,
        "color":["blue", "green", "darkseagreen"],
        "size" : ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 19,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "dresses",
        "price": "49.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "discount": 12,
        "rating":5,
        "color":["blue", "green", "darkseagreen"],
        "size": ["S", "M", "L"],
        "quantity":1
      },
      {
        "_id": 20,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "sweatshirts",
        "price": "45.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "rating":4,
        "color":[ "orange", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 21,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "jeans",
        "price": "75.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "rating":5,
        "color":["blue", "green", "orange", "teal", "darkseagreen"],
        "size": ["S", "M", "L"],
        "quantity":1
      },
      {
        "_id": 22,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "swimwear",
        "price": "39.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "rating":5, 
        "color":["blue", "green", "pink", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 23,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "jackets",
        "price": "69.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "discount": 50,
        "rating":5,
        "color":["blue", "green", "pink", "yellow","darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 24,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "trousers",
        "price": "39.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "discount": 25,
        "rating":4,
        "color":["blue", "green", "yellow", "brown", "skyblue"],
        "size": ["M", "L", "XXL"],
        "quantity":1
      }
    ],
    "limitedEditionProducts": [
      {
        "_id": 25,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "trousers",
        "price": "10.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "discount": 20,
        "rating":3,
        "color":["blue","orange", "teal", "darkseagreen"],
        "size": ["XS", "S", "M", "L", "XL", "XXL"]     ,
        "quantity":1
      },
      {
        "_id": 26,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "trousers",
        "price": "15.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "discount": 15,
        "rating":4,
        "color":[ "orange", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 27,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "9.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "discount": 10,
        "rating":5,
        "color":["blue", "green", "darkseagreen"],
        "size": ["S", "M", "L"],
        "quantity":1
      },
      {
        "_id": 28,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "man",
        "price": "19.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Lee",
        "discount": 35,
        "rating":5,
        "color":["orange", "teal", "darkseagreen"],
        "size" : ["S", "M", "L", "XL"],
        "quantity":1
      }
    ],
    "eastsideProducts": [
      {
        "_id": 29,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "color":["darkkhaki", "orange", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 30,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "color":["blue", "green","orange", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 31,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "color":["blue","teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 32,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "color":["teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 33,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "color":["darkkhaki", "orange", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 34,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "color":[ "orange", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 35,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "color":["blue", "green", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 36,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "color":["blue", "green","teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 37,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "color":["blue","teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 38,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "color":["darkkhaki", "orange", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 39,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "color":["blue", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      },
      {
        "_id": 40,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "images": [
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg",
          "/temp/Mountains.jpg"
        ],
        "style": "shorts",
        "price": "58.99",
        "type": "Printed Cotton Blend Crew Neck",
        "brand": "Bear Brown",
        "rating": 4,
        "color":["blue", "green", "teal", "darkseagreen"],
        "size": ["S", "M", "L", "XL"],
        "quantity":1
      }
    ],
    "categories": [
      {
        "_id": 41,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "style": "Traditional Wear",
        "path": "fashion",
        "category" : "WOMEN"
      },
      {
        "_id": 42,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "style": "Accessories",
        "path": "watches",
        "category" : "SUNGLASSES"
      },
      {
        "_id": 43,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "style": "Jeans",
        "path": "cosmetics",
        "category" : "DENIM"
      },
      {
        "_id": 44,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "style": "Night Wear",
        "path": "babystore",
        "category" : "THE CLASSICS"
      }
    ],
    "winterstyles": [
      {
        "_id": 44,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "style": "WinterStyles1",
        "path": "winter"
      },
      {
        "_id": 45,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "style": "WinterStyles2",
        "path": "winter"
      },
      {
        "_id": 46,
        "image": "/temp/Mountains.jpg",
        "description": "A versatile puffer built for transitional weather with soft insulation, light shell fabric, and a clean silhouette.",
        "style": "WinterStyles3",
        "path": "winter"
      }
    ]
  },
}

  );
});

export default router;