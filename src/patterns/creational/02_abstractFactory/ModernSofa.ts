import { ISofa, NewSofaProps } from "./ISofa";

export class ModernSofa implements ISofa {
  color: string;
  material: string;
  brand: string;
  collection: string;
  pillowsNumber: number;

  constructor(props: NewSofaProps) {
    this.color = props.color;
    this.material = props.material;
    this.brand = props.brand;
    this.collection = props.collection;
    this.pillowsNumber = props.pillowsNumber;
  }

  get hasPillows() {
    return this.pillowsNumber > 0;
  }

  addPillows(): void {
    console.log("Pillows were added!");
  }
}
