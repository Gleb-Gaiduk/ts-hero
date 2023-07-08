import { IChair, NewChairProps } from "./IChair";

export class ModernChair implements IChair {
  color: string;
  material: string;
  isFoldable: boolean;
  brand: string;
  collection: string;

  constructor(props: NewChairProps) {
    this.color = props.color;
    this.material = props.material;
    this.isFoldable = props.isFoldable;
    this.brand = props.brand;
    this.collection = props.collection;
  }

  get hasLags(): boolean {
    return true;
  }

  sitOn(): void {
    console.log("Sit on chair!");
  }
}
