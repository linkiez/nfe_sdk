import { CEventoAverbPlV101LeiauteAverbV100Enquad } from './CEventoAverbPlV101LeiauteAverbV100Enquad';

export interface IEventoAverbPlV101LeiauteAverbV100ItensAverbados {
  "@class"?: string;
  dhEmbarque?: unknown;
  dhAverbacao?: unknown;
  qItem?: unknown;
  enquad?: CEventoAverbPlV101LeiauteAverbV100Enquad;
}

export class CEventoAverbPlV101LeiauteAverbV100ItensAverbados {
    public "@class"?: string;

    public dhEmbarque?: unknown;
    public dhAverbacao?: unknown;
    public qItem?: unknown;
    public enquad?: CEventoAverbPlV101LeiauteAverbV100Enquad;

    public constructor(props?: CEventoAverbPlV101LeiauteAverbV100ItensAverbados) {
        this["@class"] = ".CEventoAverbPlV101LeiauteAverbV100ItensAverbados";


        if (props) {

        	this.dhEmbarque = props.dhEmbarque;
        	this.dhAverbacao = props.dhAverbacao;
        	this.qItem = props.qItem;
        	this.enquad = (props.enquad) ? new CEventoAverbPlV101LeiauteAverbV100Enquad(props.enquad): undefined;
        }
    }
}
