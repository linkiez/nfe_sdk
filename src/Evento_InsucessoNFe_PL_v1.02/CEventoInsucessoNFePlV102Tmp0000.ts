import { CEventoInsucessoNFePlV102Tmp0000DetEvento } from './CEventoInsucessoNFePlV102Tmp0000DetEvento';

export interface IEventoInsucessoNFePlV102Tmp0000 {
  "@class"?: string;
  detEvento?: CEventoInsucessoNFePlV102Tmp0000DetEvento;
}

export class CEventoInsucessoNFePlV102Tmp0000 {
    public "@class"?: string;

    public detEvento?: CEventoInsucessoNFePlV102Tmp0000DetEvento;

    public constructor(props?: CEventoInsucessoNFePlV102Tmp0000) {
        this["@class"] = ".CEventoInsucessoNFePlV102Tmp0000";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoInsucessoNFePlV102Tmp0000DetEvento(props.detEvento): undefined;
        }
    }
}
