import { IChair, NewChairProps } from "./IChair";
import { ISofa, NewSofaProps } from "./ISofa";

export interface IFurnitureFactory {
  createChair(props: NewChairProps): IChair;
  createSofa(props: NewSofaProps): ISofa;
}
