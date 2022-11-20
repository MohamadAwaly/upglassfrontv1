import {Brand} from "./brand";

export interface Model {

  idModel?: number;
  code: string;
  modelName: string;
  brand: Brand;
}
