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
  discountPercentage?: number;
  kmDriven: number;
  ownerShip: string;
  ownerId: string | number;
  regNumber: string;
  engineCapacity: number;
  inspectionReport: {
    accedental: boolean;
    tempered: boolean;
    flooded: boolean;
    imprerfections: Array<{
      part: string;
      issue: string;
      image: string;
    }>;
    repaintedParts: Array<{
      part: string;
      image: string;
    }>;
    perfectParts: Array<{
      part: string;
    }>;
    tyers: {
      flTyre: number;
      frTyre: number;
      rlTyre: number;
      rrTyre: number;
      spareTyre: number;
    };
  };
};