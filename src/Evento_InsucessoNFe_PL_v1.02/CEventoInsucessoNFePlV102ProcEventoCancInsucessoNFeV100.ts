import { TEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100ProcEventoNFe } from './TEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100ProcEventoNFe';

export interface IEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100 {
  "@class"?: string;
  procEventoNFe?: TEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100ProcEventoNFe;
}

export class CEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100ProcEventoNFe;

    public constructor(props?: CEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102ProcEventoCancInsucessoNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
