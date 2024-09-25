const sampleListings = [
  {
    title: "Cozy Apartment in Downtown",
    description:
      "A comfortable apartment with stunning city views, located in the heart of downtown. Close to amenities and public transportation.",
    image: {
      filename: "Listing image",
      url: "https://plus.unsplash.com/premium_photo-1710294629873-9bf4ddb53e7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    price: 150.0,
    location: "Downtown",
    country: "United States",
  },
  {
    title: "Modern Loft with Rooftop Access",
    description:
      "A sleek, modern loft featuring high ceilings and an open floor plan. Includes access to a shared rooftop terrace with panoramic city views. Perfectly situated near cafes, shops, and public transit.",
    image: {
      filename: "Listing image",
      url: "https://th.bing.com/th/id/OIP.RoGb85XNGDek859u-RTNcQHaE8?rs=1&pid=ImgDetMain",
    },
    price: 200.0,
    location: "Downtown",
    country: "United States",
  },
  {
    title: "Charming Studio Near the Park",
    description:
      "This cozy studio offers a peaceful retreat with easy access to the nearby park. Fully furnished with modern amenities, and within walking distance to local shops and restaurants.",
    image: {
      filename: "Listing image",
      url: "https://antonovich-design.ae/uploads/files/2019/12/antonovich-design-2019M9cmiWIFhMye.jpg",
    },
    price: 120.0,
    location: "Midtown",
    country: "United States",
  },
  {
    title: "Luxury Apartment with Private Balcony",
    description:
      "A spacious, luxury apartment with a private balcony offering spectacular city views. Located in a prime area with exclusive access to a fitness center and swimming pool.",
    image: {
      filename: "Listing image",
      url: "https://th.bing.com/th/id/OIP.99_n4YKg-P3apQz-V4DaJAHaE7?rs=1&pid=ImgDetMain",
    },
    price: 300.0,
    location: "Downtown",
    country: "United States",
  },
  {
    title: "Cozy 2-Bedroom in Historic District",
    description:
      "A charming 2-bedroom apartment located in the historic district, featuring vintage details and modern updates. Close to museums, theaters, and boutique shops.",
    image: {
      filename: "Listing image",
      url: "https://www.thewowstyle.com/wp-content/uploads/2015/01/home-decor-5187c3b1b3fc4b4d520000b9-vivienda-m2-monovolume-architecture-design-villa-moritzing-07-architecture-designs.jpg",
    },
    price: 180.0,
    location: "Historic District",
    country: "United States",
  },
  {
    title: "Contemporary Apartment with Pool Access",
    description:
      "Enjoy the comfort of this contemporary apartment with sleek furnishings and access to a shared pool. Conveniently located near shopping centers and entertainment venues.",
    image: {
      filename: "Listing image",
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/174afd34306237.56cc06f6779c3.jpg",
    },
    price: 220.0,
    location: "Uptown",
    country: "United States",
  },
  {
    title: "Sunny 1-Bedroom with Garden View",
    description:
      "A bright and airy 1-bedroom apartment with large windows overlooking a beautiful garden. Located in a quiet neighborhood, close to parks and local cafes.",
    image: {
      filename: "Listing image",
      url: "https://foyr.com/learn/wp-content/uploads/2019/03/Villa_Mistral-Singapore.jpg",
    },
    price: 160.0,
    location: "Suburbs",
    country: "United States",
  },
  {
    title: "Spacious Penthouse with Ocean Views",
    description:
      "A luxurious penthouse with floor-to-ceiling windows and stunning ocean views. Features a large private terrace, perfect for entertaining. Located near top dining and shopping destinations.",
    image: {
      filename: "Listing image",
      url: "https://i.pinimg.com/originals/0f/be/45/0fbe4509b40e3204d57668b4c7f682b6.jpg",
    },
    price: 450.0,
    location: "Coastal",
    country: "United States",
  },
  {
    title: "Elegant Apartment in Financial District",
    description:
      "An elegant 2-bedroom apartment in the heart of the financial district, featuring modern interiors and a fully equipped kitchen. Perfect for professionals working nearby.",
    image: {
      filename: "Listing image",
      url: "https://th.bing.com/th/id/R.7752d8cb7655b155ea8e8cc777a8bf91?rik=0ZleiK%2bcV2dxvA&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fmodern-villa-design.jpg&ehk=QPLOeBu5ynk83ylui54eRj8ZOmLKiIgCI%2bA9%2f%2bsAYl0%3d&risl=&pid=ImgRaw&r=0",
    },
    price: 350.0,
    location: "Financial District",
    country: "United States",
  },
  {
    title: "Chic Studio in Art District",
    description:
      "A chic studio located in the vibrant art district, featuring stylish decor and high ceilings. Surrounded by galleries, cafes, and cultural venues.",
    image: {
      filename: "Listing image",
      url: "https://thewowstyle.com/wp-content/uploads/2015/01/modern-villa-design-ideas.jpg",
    },
    price: 140.0,
    location: "Art District",
    country: "United States",
  },
  {
    title: "Rustic Cabin in the Mountains",
    description:
      "A cozy rustic cabin nestled in the mountains, offering a peaceful retreat with stunning nature views. Ideal for weekend getaways and outdoor enthusiasts.",
    image: {
      filename: "Listing image",
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/88e63e42489939.57ce6aaccd2dc.jpg",
    },
    price: 180.0,
    location: "Mountains",
    country: "United States",
  },
  {
    title: "Urban Flat with Industrial Design",
    description:
      "A stylish urban flat featuring an industrial design with exposed brick walls and modern finishes. Conveniently located near downtown attractions and nightlife.",
    image: {
      filename: "Listing image",
      url: "https://www.cgarchitect.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMU5CQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e9abc9b814d5f68627f7f634f9968ac4474e5449/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQWxZRk1Eb0tjMkYyWlhKN0Jqb01jWFZoYkdsMGVXbGsiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--a140f81341e053a34b77dbf5e04e777cacb11aff/61e9da21.jpg",
    },
    price: 230.0,
    location: "Downtown",
    country: "United States",
  },
  {
    title: "Lakefront Apartment with Scenic Views",
    description:
      "A tranquil lakefront apartment offering breathtaking scenic views and direct access to walking trails. Includes a private dock and outdoor seating area.",
    image: {
      filename: "Listing image",
      url: "https://i.pinimg.com/originals/6b/e8/59/6be859d024fa08eb64444ae319ae80c4.jpg",
    },
    price: 320.0,
    location: "Lakefront",
    country: "United States",
  },
  {
    title: "Minimalist Studio in Trendy Area",
    description:
      "A minimalist studio with sleek design elements, located in a trendy neighborhood. Close to boutiques, eateries, and public transport.",
    image: {
      filename: "Listing image",
      url: "https://i.pinimg.com/originals/08/0b/30/080b30354b0dbaa97f505395aeb5a37d.jpg",
    },
    price: 130.0,
    location: "Trendy Area",
    country: "United States",
  },
  {
    title: "Loft with Panoramic City Skyline",
    description:
      "A modern loft offering panoramic views of the city skyline, featuring an open floor plan and high-end finishes. Located in the heart of the city's entertainment district.",
    image: {
      filename: "Listing image",
      url: "https://cdnassets.hw.net/ab/c1/fc52560248ab8f3d50a8cee6233d/42a804f679924d2191e92c7085e10595.jpg",
    },
    price: 280.0,
    location: "Entertainment District",
    country: "United States",
  },
  {
    title: "Penthouse with Private Rooftop Pool",
    description:
      "A luxury penthouse with a private rooftop pool and expansive views of the city. Includes premium amenities and located in an exclusive neighborhood.",
    image: {
      filename: "Listing image",
      url: "https://b8architecture.com/dev/wp-content/uploads/2022/10/b8-architecture-modern-luxury-villa-ocean-miami-florida-cover.jpg",
    },
    price: 600.0,
    location: "Luxury District",
    country: "United States",
  },
];

module.exports = { data: sampleListings };
