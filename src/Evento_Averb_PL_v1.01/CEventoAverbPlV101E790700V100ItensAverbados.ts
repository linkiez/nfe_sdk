import { CEventoAverbPlV101E790700V100Enquad } from './CEventoAverbPlV101E790700V100Enquad';

export interface IEventoAverbPlV101E790700V100ItensAverbados {
  "@class"?: string;
  dhEmbarque?: unknown;
  dhAverbacao?: unknown;
  qItem?: unknown;
  enquad?: CEventoAverbPlV101E790700V100Enquad;
}

export class CEventoAverbPlV101E790700V100ItensAverbados {
    public "@class"?: string;

    public dhEmbarque?: unknown;
    public dhAverbacao?: unknown;
    public qItem?: unknown;
    public enquad?: CEventoAverbPlV101E790700V100Enquad;

    public constructor(props?: CEventoAverbPlV101E790700V100ItensAverbados) {
        this["@class"] = ".CEventoAverbPlV101E790700V100ItensAverbados";


        if (props) {

        	this.dhEmbarque = props.dhEmbarque;
        	this.dhAverbacao = props.dhAverbacao;
        	this.qItem = props.qItem;
        	this.enquad = (props.enquad) ? new CEventoAverbPlV101E790700V100Enquad(props.enquad): undefined;
        }
    }
}
