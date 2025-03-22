export type Car = {
  id: number;
  year: number;
  carBrand: string;
  carModel: string;
  price: number;
  topSpeed: number;
  fuelType: string;
  transmission: string;
  images: string[];
  rating: number;
  location: string;
  bookmarked: (number | string)[];
  kmDriven: number;
  ownerShip: string;
  ownerId: string | number;
  regNumber: string | null;
  engineCapacity: number;
  spareKey: boolean;
  new: boolean;
  discountPercentage?: number;
  safetyFeatures: {
    airbagNo: number;
    ABS: boolean;
  };
  owner: {
    id: string;
    name: string;
    phone: string;
    whatsapp: string;
    email: string;
    image: string;
    location: string;
    type: " Individual" | "Dealership";
  };
  inspectionReport: {
    accedental: boolean | null;
    tempered: boolean | null;
    flooded: boolean | null;
    imprerfections: Array<{
      part: string;
      issue: string;
      image: string;
    }> | null;
    repaintedParts: Array<{
      part: string;
      image: string;
    }> | null;
    perfectParts: Array<{
      part: string;
    }> | null;
    tyres: {
      flTyre: number;
      frTyre: number;
      rlTyre: number;
      rrTyre: number;
      spareTyre: number;
    };
    driven: {
      type:
        | "City Driven"
        | "Uber Car"
        | "Highway Driven"
        | "Off-Road Driven"
        | "Company Fleet"
        | "Personal Use"
        | "Rental Car"
        | "Taxi"
        | "Weekend Car"
        | "Commercial Use"
        | "Government Vehicle"
        | "Courier/Delivery"
        | "new";
      description: string;
    };
  };
};
