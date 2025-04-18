const cars = [
  {
    id: 1,
    year: 2020,
    carBrand: "Toyota",
    carModel: "Camry",
    price: 24000,
    topSpeed: 130,
    fuelType: "Gasoline",
    transmission: "Automatic",
    images: [
      "/images/cars/Toyota Camry.avif",
      "/images/cars/Toyota Camry-2.avif",
      "/images/cars/Toyota Camry-3.avif",
      "/images/cars/Toyota Camry-4.avif",
      "/images/cars/Toyota Camry-5.avif",
    ],
    rating: 4.5,
    location: "Los Angeles, CA",
    bookmarked: ["10"],
    kmDriven: 45000,
    ownerShip: "First Owner",
    ownerId: "TOY_2020_001",
    regNumber: "CA-1234",
    engineCapacity: 2000,
    spareKey: true,
    new: false,
    safetyFeatures: {
      airbagNo: 6,
      ABS: true,
    },
    inspectionReport: {
      accedental: false,
      tempered: false,
      flooded: false,
      imprerfections: [],
      repaintedParts: [],
      perfectParts: [{ part: "Engine" }, { part: "Transmission" }],
      tyers: {
        flTyre: 85,
        frTyre: 83,
        rlTyre: 78,
        rrTyre: 77,
        spareTyre: 95,
      },
      driven: {
        type: "City Driven",
        description: "Mostly used for short trips within a city.",
      },
    },
  },
  {
    id: 2,
    year: 2019,
    carBrand: "Honda",
    carModel: "Civic",
    price: 22000,
    topSpeed: 125,
    fuelType: "Gasoline",
    transmission: "Manual",
    images: [
      "/images/cars/honda-civic.webp",
      "/images/cars/honda-civic-2.webp",
      "/images/cars/honda-civic-3.webp",
      "/images/cars/honda-civic-4.webp",
      "/images/cars/honda-civic-5.webp",
      "/images/cars/honda-civic-6.webp",
      "/images/cars/honda-civic-7.webp",
      "/images/cars/honda-civic-8.webp",
    ],
    rating: 4.0,
    location: "New York, NY",
    bookmarked: [],
    kmDriven: 68000,
    ownerShip: "Second Owner",
    ownerId: "HON_2019_002",
    regNumber: "NY-5678",
    engineCapacity: 1800,
    spareKey: false,
    new: false,
    safetyFeatures: {
      airbagNo: 4,
      ABS: true,
    },
    inspectionReport: {
      accedental: true,
      tempered: false,
      flooded: false,
      imprerfections: [
        {
          part: "Left Door",
          issue: "Small dent",
          image: "/images/defects/honda-door-dent.jpg",
        },
      ],
      repaintedParts: [
        {
          part: "Front Bumper",
          image: "/images/repainted/honda-bumper.jpg",
        },
      ],
      perfectParts: [{ part: "Interior" }],
      tyers: {
        flTyre: 65,
        frTyre: 63,
        rlTyre: 72,
        rrTyre: 70,
        spareTyre: 90,
      },
      driven: {
        type: "Uber Car",
        description: "Used for ride-sharing services.",
      },
    },
  },
  {
    id: 3,
    year: 2021,
    carBrand: "Tesla",
    carModel: "Model 3",
    price: 35000,
    topSpeed: 162,
    fuelType: "Electric",
    transmission: "Automatic",
    images: [
      "/images/cars/Tesla Model 3 .jpg",
      "/images/cars/Tesla Model 3 -2.jpg",
      "/images/cars/Tesla Model 3 -3.jpg",
      "/images/cars/Tesla Model 3 -4.jpg",
      "/images/cars/Tesla Model 3 -5.jpg",
    ],
    rating: 4.9,
    location: "San Francisco, CA",
    bookmarked: ["10"],
    kmDriven: 0,
    ownerShip: "No previous owners",
    ownerId: "TES_2021_003",
    regNumber: null,
    engineCapacity: 0,
    spareKey: true,
    new: true,
    safetyFeatures: {
      airbagNo: 8,
      ABS: true,
    },
    inspectionReport: {
      accedental: null,
      tempered: null,
      flooded: null,
      imprerfections: null,
      repaintedParts: null,
      perfectParts: null,
      tyers: {
        flTyre: 100,
        frTyre: 100,
        rlTyre: 100,
        rrTyre: 100,
        spareTyre: 100,
      },
      driven: {
        type: "Personal Use",
        description: "Used by an individual for daily commuting.",
      },
    },
  },
  {
    id: 4,
    year: 2018,
    carBrand: "Ford",
    carModel: "F-150",
    price: 30000,
    topSpeed: 120,
    fuelType: "Gasoline",
    transmission: "Automatic",
    images: [
      "/images/cars/2018-ford-f-150.jpg",
      "/images/cars/2018-ford-f-150-2.jpg",
      "/images/cars/2018-ford-f-150-3.jpg",
      "/images/cars/2018-ford-f-150-4.jpg",
      "/images/cars/2018-ford-f-150-5.jpg",
    ],
    rating: 3.8,
    location: "Dallas, TX",
    bookmarked: [],
    kmDriven: 95000,
    ownerShip: "Third Owner",
    ownerId: "FOR_2018_004",
    regNumber: "TX-3456",
    engineCapacity: 3500,
    spareKey: true,
    new: false,
    safetyFeatures: {
      airbagNo: 6,
      ABS: true,
    },
    inspectionReport: {
      accedental: true,
      tempered: true,
      flooded: false,
      imprerfections: [
        {
          part: "Bed",
          issue: "Scratches",
          image: "/images/defects/ford-bed-scratches.jpg",
        },
      ],
      repaintedParts: [
        {
          part: "Tailgate",
          image: "/images/repainted/ford-tailgate.jpg",
        },
      ],
      perfectParts: [{ part: "Engine" }],
      tyers: {
        flTyre: 45,
        frTyre: 43,
        rlTyre: 55,
        rrTyre: 53,
        spareTyre: 75,
      },
      driven: {
        type: "Off-Road Driven",
        description:
          "Frequently driven on rough terrains (e.g., dirt roads, mountains).",
      },
    },
  },
  {
    id: 5,
    year: 2022,
    carBrand: "Chevrolet",
    carModel: "Malibu",
    price: 25000,
    topSpeed: 130,
    fuelType: "Gasoline",
    transmission: "Automatic",
    images: [
      "/images/cars/2022-chevrolet-malibu.jpg",
      "/images/cars/2022-chevrolet-malibu-2.jpg",
      "/images/cars/2022-chevrolet-malibu-3.jpg",
      "/images/cars/2022-chevrolet-malibu-4.jpg",
      "/images/cars/2022-chevrolet-malibu-5.jpg",
      "/images/cars/2022-chevrolet-malibu-6.jpg",
    ],
    rating: 4.2,
    location: "Miami, FL",
    bookmarked: ["10"],
    kmDriven: 0,
    ownerShip: "No previous owners",
    ownerId: "CHE_2022_005",
    regNumber: null,
    engineCapacity: 2500,
    spareKey: true,
    new: true,
    safetyFeatures: {
      airbagNo: 6,
      ABS: true,
    },
    inspectionReport: {
      accedental: null,
      tempered: null,
      flooded: null,
      imprerfections: null,
      repaintedParts: null,
      perfectParts: null,
      tyers: {
        flTyre: 100,
        frTyre: 100,
        rlTyre: 100,
        rrTyre: 100,
        spareTyre: 100,
      },
      driven: {
        type: "Company Fleet",
        description: "Used as part of a company’s vehicle fleet.",
      },
    },
  },
  {
    id: 6,
    year: 2017,
    carBrand: "Nissan",
    carModel: "Altima",
    price: 19000,
    topSpeed: 130,
    fuelType: "Diesel",
    transmission: "CVT",
    images: [
      "/images/cars/2017-nissan-altima-2.jpg",
      "/images/cars/2017-nissan-altima-2.avif",
      "/images/cars/2017-nissan-altima-1.jpg",
    ],
    rating: 3.5,
    location: "Seattle, WA",
    bookmarked: [],
    kmDriven: 112000,
    ownerShip: "Fourth Owner",
    ownerId: "NIS_2017_006",
    regNumber: "WA-2345",
    engineCapacity: 2000,
    spareKey: false,
    new: false,
    safetyFeatures: {
      airbagNo: 4,
      ABS: true,
    },
    inspectionReport: {
      accedental: true,
      tempered: true,
      flooded: true,
      imprerfections: [
        {
          part: "Roof",
          issue: "Water damage",
          image: "/images/defects/nissan-roof.jpg",
        },
      ],
      repaintedParts: [
        {
          part: "Doors",
          image: "/images/repainted/nissan-doors.jpg",
        },
      ],
      perfectParts: [],
      tyers: {
        flTyre: 35,
        frTyre: 33,
        rlTyre: 40,
        rrTyre: 38,
        spareTyre: 80,
      },
      driven: {
        type: "Rental Car",
        description: "Previously used as a rental vehicle.",
      },
    },
  },
  {
    id: 7,
    year: 2020,
    carBrand: "Hyundai",
    carModel: "Elantra",
    price: 21000,
    topSpeed: 120,
    fuelType: "Gasoline",
    transmission: "Manual",
    images: [
      "/images/cars/2020-hyunadi-alentra.jpg",
      "/images/cars/2020-hyunadi-alentra-2.jpg",
      "/images/cars/2020-hyunadi-alentra-3.jpg",
    ],
    rating: 4.1,
    location: "Chicago, IL",
    bookmarked: ["10"],
    kmDriven: 55000,
    ownerShip: "Second Owner",
    ownerId: "HYU_2020_007",
    regNumber: "IL-6789",
    engineCapacity: 2000,
    spareKey: true,
    new: false,
    safetyFeatures: {
      airbagNo: 6,
      ABS: true,
    },
    inspectionReport: {
      accedental: false,
      tempered: false,
      flooded: false,
      imprerfections: [
        {
          part: "Trunk",
          issue: "Small scratch",
          image: "/images/defects/hyundai-trunk.jpg",
        },
      ],
      repaintedParts: [],
      perfectParts: [{ part: "Engine" }, { part: "Transmission" }],
      tyers: {
        flTyre: 75,
        frTyre: 73,
        rlTyre: 70,
        rrTyre: 68,
        spareTyre: 85,
      },
      driven: {
        type: "Highway Driven",
        description: "Primarily used for long-distance highway travel.",
      },
    },
  },
  {
    id: 8,
    year: 2021,
    carBrand: "Kia",
    carModel: "Soul",
    price: 23000,
    topSpeed: 130,
    fuelType: "Gasoline",
    transmission: "Automatic",
    images: [
      "/images/cars/2021-kia-soul.avif",
      "/images/cars/2021-kia-soul-2.avif",
      "/images/cars/2021-kia-soul-3.avif",
      "/images/cars/2021-kia-soul-4.avif",
      "/images/cars/2021-kia-soul-5.avif",
      "/images/cars/2021-kia-soul-6.avif",
    ],
    rating: 4.7,
    location: "Phoenix, AZ",
    bookmarked: [],
    kmDriven: 0,
    ownerShip: "No previous owners",
    ownerId: "KIA_2021_008",
    regNumber: null,
    engineCapacity: 2000,
    spareKey: true,
    new: true,
    safetyFeatures: {
      airbagNo: 6,
      ABS: true,
    },
    inspectionReport: {
      accedental: null,
      tempered: null,
      flooded: null,
      imprerfections: null,
      repaintedParts: null,
      perfectParts: null,
      tyers: {
        flTyre: 100,
        frTyre: 100,
        rlTyre: 100,
        rrTyre: 100,
        spareTyre: 100,
      },
      driven: {
        type: "Weekend Car",
        description:
          "Driven occasionally, mainly on weekends or special occasions.",
      },
    },
  },
  {
    id: 9,
    year: 2019,
    carBrand: "Subaru",
    carModel: "Outback",
    price: 27000,
    topSpeed: 130,
    fuelType: "Diesel",
    transmission: "Automatic",
    images: [
      "/images/cars/2019-subaru-outback.jpg",
      "/images/cars/2019-subaru-outback-2.jpg",
      "/images/cars/2019-subaru-outback-3.jpg",
      "/images/cars/2019-subaru-outback-4.jpg",
      "/images/cars/2019-subaru-outback-5.jpg",
      "/images/cars/2019-subaru-outback-6.jpg",
    ],
    rating: 4.0,
    location: "Denver, CO",
    bookmarked: ["10"],
    kmDriven: 75000,
    ownerShip: "Second Owner",
    ownerId: "SUB_2019_009",
    regNumber: "CO-4567",
    engineCapacity: 2500,
    spareKey: true,
    new: false,
    safetyFeatures: {
      airbagNo: 6,
      ABS: true,
    },
    inspectionReport: {
      accedental: true,
      tempered: false,
      flooded: false,
      imprerfections: [
        {
          part: "Undercarriage",
          issue: "Off-road scratches",
          image: "/images/defects/subaru-undercarriage.jpg",
        },
      ],
      repaintedParts: [
        {
          part: "Front Skid Plate",
          image: "/images/repainted/subaru-skid.jpg",
        },
      ],
      perfectParts: [{ part: "AWD System" }],
      tyers: {
        flTyre: 60,
        frTyre: 58,
        rlTyre: 62,
        rrTyre: 60,
        spareTyre: 85,
      },
      driven: {
        type: "Commercial Use",
        description: "Used for business purposes, such as deliveries.",
      },
    },
  },
  {
    id: 10,
    year: 2021,
    carBrand: "Volkswagen",
    carModel: "Jetta",
    price: 23000,
    topSpeed: 140,
    fuelType: "Diesel",
    transmission: "Automatic",
    images: [
      "/images/cars/2021-volkswagen-jetta.jpg",
      "/images/cars/2021-volkswagen-jetta-2.jpg",
      "/images/cars/2021-volkswagen-jetta-3.jpg",
      "/images/cars/2021-volkswagen-jetta-4.jpg",
      "/images/cars/2021-volkswagen-jetta-5.jpg",
      "/images/cars/2021-volkswagen-jetta-6.jpg",
    ],
    rating: 3.9,
    location: "Atlanta, GA",
    bookmarked: [],
    kmDriven: 42000,
    ownerShip: "First Owner",
    ownerId: "VW_2021_010",
    regNumber: "GA-8901",
    engineCapacity: 2000,
    spareKey: true,
    new: false,
    safetyFeatures: {
      airbagNo: 6,
      ABS: true,
    },
    inspectionReport: {
      accedental: false,
      tempered: false,
      flooded: false,
      imprerfections: [],
      repaintedParts: [],
      perfectParts: [{ part: "Engine" }, { part: "Suspension" }],
      tyers: {
        flTyre: 78,
        frTyre: 76,
        rlTyre: 74,
        rrTyre: 73,
        spareTyre: 90,
      },
      driven: {
        type: "Taxi",
        description: "Used as a taxi service vehicle.",
      },
    },
  },
];
export default cars;