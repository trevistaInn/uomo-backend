import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
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
    "uomoProducts": [
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
  })
})

export default router;