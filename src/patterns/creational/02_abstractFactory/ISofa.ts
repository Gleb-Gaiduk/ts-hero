import { IFurniture } from "./IFurniture";

export interface ISofa extends IFurniture {
  pillowsNumber: number;
  addPillows(): void;
  readonly hasPillows: boolean;
}

export type NewSofaProps = IFurniture & Pick<ISofa, "pillowsNumber">;
