import {Model} from "./model";
import {WindowsType} from "./windows-type";
import {OptionsWindow} from "./options-window";

export interface Window {

  idWindow?: number;
  code: string;
  name: string;
  unitSalePrice?: number;
  totalQty: number;
  model?: Model;
  windowsType: WindowsType;
  optionsWindows: OptionsWindow[];
}
