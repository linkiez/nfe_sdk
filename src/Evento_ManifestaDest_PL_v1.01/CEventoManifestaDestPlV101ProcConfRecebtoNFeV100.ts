import { TEventoManifestaDestPlV101ProcConfRecebtoNFeV100ProcEventoNFe } from './TEventoManifestaDestPlV101ProcConfRecebtoNFeV100ProcEventoNFe';

export interface IEventoManifestaDestPlV101ProcConfRecebtoNFeV100 {
  "@class"?: string;
  procEventoNFe?: TEventoManifestaDestPlV101ProcConfRecebtoNFeV100ProcEventoNFe;
}

export class CEventoManifestaDestPlV101ProcConfRecebtoNFeV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoManifestaDestPlV101ProcConfRecebtoNFeV100ProcEventoNFe;

    public constructor(props?: CEventoManifestaDestPlV101ProcConfRecebtoNFeV100) {
        this["@class"] = ".CEventoManifestaDestPlV101ProcConfRecebtoNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
