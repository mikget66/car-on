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
    images: ["/images/cars/Toyota Camry.jpeg", "/images/cars/toyota-camry-2.webp"],
    rating: 4.5,
    location: "Los Angeles, CA",
    bookmarked: ["10"],
    kmDriven: 45000,
    ownerShip: "First Owner",
    ownerId: "TOY_2020_001",
    regNumber: "CA-1234",
    engineCapacity: 2000,
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
        spareTyre: 95
      }
    }
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
    images: ["/images/cars/honda-civic.webp"],
    rating: 4.0,
    location: "New York, NY",
    bookmarked: [],
    kmDriven: 68000,
    ownerShip: "Second Owner",
    ownerId: "HON_2019_002",
    regNumber: "NY-5678",
    engineCapacity: 1800,
    inspectionReport: {
      accedental: true,
      tempered: false,
      flooded: false,
      imprerfections: [{
        part: "Left Door",
        issue: "Small dent",
        image: "/images/defects/honda-door-dent.jpg"
      }],
      repaintedParts: [{ part: "Front Bumper", image: "/images/repainted/honda-bumper.jpg" }],
      perfectParts: [{ part: "Interior" }],
      tyers: {
        flTyre: 65,
        frTyre: 63,
        rlTyre: 72,
        rrTyre: 70,
        spareTyre: 90
      }
    }
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
    images: ["/images/cars/Tesla Model 3 .webp", "/images/cars/tesla-model3-2.jpg"],
    rating: 4.9,
    location: "San Francisco, CA",
    bookmarked: ["10"],
    kmDriven: 12000,
    ownerShip: "First Owner",
    ownerId: "TES_2021_003",
    regNumber: "CA-9012",
    engineCapacity: 0,
    inspectionReport: {
      accedental: false,
      tempered: false,
      flooded: false,
      imprerfections: [],
      repaintedParts: [],
      perfectParts: [{ part: "Battery" }, { part: "Electronics" }],
      tyers: {
        flTyre: 92,
        frTyre: 91,
        rlTyre: 89,
        rrTyre: 88,
        spareTyre: 100
      }
    }
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
    images: ["/images/cars/2018-ford-f-150.jpg"],
    rating: 3.8,
    location: "Dallas, TX",
    bookmarked: [],
    kmDriven: 95000,
    ownerShip: "Third Owner",
    ownerId: "FOR_2018_004",
    regNumber: "TX-3456",
    engineCapacity: 3500,
    inspectionReport: {
      accedental: true,
      tempered: true,
      flooded: false,
      imprerfections: [{
        part: "Bed",
        issue: "Scratches",
        image: "/images/defects/ford-bed-scratches.jpg"
      }],
      repaintedParts: [{ part: "Tailgate", image: "/images/repainted/ford-tailgate.jpg" }],
      perfectParts: [{ part: "Engine" }],
      tyers: {
        flTyre: 45,
        frTyre: 43,
        rlTyre: 55,
        rrTyre: 53,
        spareTyre: 75
      }
    }
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
    images: ["/images/cars/2022-chevrolet-malibu.jpg"],
    rating: 4.2,
    location: "Miami, FL",
    bookmarked: ["10"],
    kmDriven: 15000,
    ownerShip: "First Owner",
    ownerId: "CHE_2022_005",
    regNumber: "FL-7890",
    engineCapacity: 2500,
    discountPercentage: 10,
    inspectionReport: {
      accedental: false,
      tempered: false,
      flooded: false,
      imprerfections: [],
      repaintedParts: [{ part: "Hood", image: "/images/repainted/chevrolet-hood.jpg" }],
      perfectParts: [{ part: "Interior" }, { part: "Electronics" }],
      tyers: {
        flTyre: 88,
        frTyre: 87,
        rlTyre: 85,
        rrTyre: 84,
        spareTyre: 95
      }
    }
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
    images: ["/images/cars/2017-nissan-altima.webp"],
    rating: 3.5,
    location: "Seattle, WA",
    bookmarked: [],
    kmDriven: 112000,
    ownerShip: "Fourth Owner",
    ownerId: "NIS_2017_006",
    regNumber: "WA-2345",
    engineCapacity: 2000,
    inspectionReport: {
      accedental: true,
      tempered: true,
      flooded: true,
      imprerfections: [{
        part: "Roof",
        issue: "Water damage",
        image: "/images/defects/nissan-roof.jpg"
      }],
      repaintedParts: [{ part: "Doors", image: "/images/repainted/nissan-doors.jpg" }],
      perfectParts: [],
      tyers: {
        flTyre: 35,
        frTyre: 33,
        rlTyre: 40,
        rrTyre: 38,
        spareTyre: 80
      }
    }
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
    images: ["/images/cars/2020-hyunadi-alentra.jpg"],
    rating: 4.1,
    location: "Chicago, IL",
    bookmarked: ["10"],
    kmDriven: 55000,
    ownerShip: "Second Owner",
    ownerId: "HYU_2020_007",
    regNumber: "IL-6789",
    engineCapacity: 2000,
    inspectionReport: {
      accedental: false,
      tempered: false,
      flooded: false,
      imprerfections: [{
        part: "Trunk",
        issue: "Small scratch",
        image: "/images/defects/hyundai-trunk.jpg"
      }],
      repaintedParts: [],
      perfectParts: [{ part: "Engine" }, { part: "Transmission" }],
      tyers: {
        flTyre: 75,
        frTyre: 73,
        rlTyre: 70,
        rrTyre: 68,
        spareTyre: 85
      }
    }
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
    images: ["/images/cars/2021-kia-soul.jpg"],
    rating: 4.7,
    location: "Phoenix, AZ",
    bookmarked: [],
    kmDriven: 28000,
    ownerShip: "First Owner",
    ownerId: "KIA_2021_008",
    regNumber: "AZ-0123",
    engineCapacity: 2000,
    inspectionReport: {
      accedental: false,
      tempered: false,
      flooded: false,
      imprerfections: [],
      repaintedParts: [],
      perfectParts: [{ part: "Body" }, { part: "Interior" }],
      tyers: {
        flTyre: 90,
        frTyre: 89,
        rlTyre: 88,
        rrTyre: 87,
        spareTyre: 95
      }
    }
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
    images: ["/images/cars/2019-subaru-outback.jpg"],
    rating: 4.0,
    location: "Denver, CO",
    bookmarked: ["10"],
    kmDriven: 75000,
    ownerShip: "Second Owner",
    ownerId: "SUB_2019_009",
    regNumber: "CO-4567",
    engineCapacity: 2500,
    inspectionReport: {
      accedental: true,
      tempered: false,
      flooded: false,
      imprerfections: [{
        part: "Undercarriage",
        issue: "Off-road scratches",
        image: "/images/defects/subaru-undercarriage.jpg"
      }],
      repaintedParts: [{ part: "Front Skid Plate", image: "/images/repainted/subaru-skid.jpg" }],
      perfectParts: [{ part: "AWD System" }],
      tyers: {
        flTyre: 60,
        frTyre: 58,
        rlTyre: 62,
        rrTyre: 60,
        spareTyre: 85
      }
    }
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
    images: ["/images/cars/2021-volkswagen-jetta.jpg"],
    rating: 3.9,
    location: "Atlanta, GA",
    bookmarked: [],
    kmDriven: 42000,
    ownerShip: "First Owner",
    ownerId: "VW_2021_010",
    regNumber: "GA-8901",
    engineCapacity: 2000,
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
        spareTyre: 90
      }
    }
  }
];

export default cars;