import { IChair, NewChairProps } from "./IChair";
import { IFurnitureFactory } from "./IFurnitureFactory";
import { ISofa, NewSofaProps } from "./ISofa";
import { ModernChair } from "./ModernChair";
import { ModernSofa } from "./ModernSofa";

export class ModernFurnitureFactory implements IFurnitureFactory {
  createChair(props: NewChairProps): IChair {
    return new ModernChair(props);
  }

  createSofa(props: NewSofaProps): ISofa {
    return new ModernSofa(props);
  }
}
