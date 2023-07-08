import { IFurniture } from "./IFurniture";

export interface IChair extends IFurniture {
  sitOn(): void;
  isFoldable: boolean;
}

export type NewChairProps = IFurniture & Pick<IChair, "isFoldable">;
