import { CEventoInsucessoNFePlV102E110193V100DetEvento } from './CEventoInsucessoNFePlV102E110193V100DetEvento';

export interface IEventoInsucessoNFePlV102E110193V100 {
  "@class"?: string;
  detEvento?: CEventoInsucessoNFePlV102E110193V100DetEvento;
}

export class CEventoInsucessoNFePlV102E110193V100 {
    public "@class"?: string;

    public detEvento?: CEventoInsucessoNFePlV102E110193V100DetEvento;

    public constructor(props?: CEventoInsucessoNFePlV102E110193V100) {
        this["@class"] = ".CEventoInsucessoNFePlV102E110193V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoInsucessoNFePlV102E110193V100DetEvento(props.detEvento): undefined;
        }
    }
}
