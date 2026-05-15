import { CEventoInsucessoNFePlV102E110192V100DetEvento } from './CEventoInsucessoNFePlV102E110192V100DetEvento';

export interface IEventoInsucessoNFePlV102E110192V100 {
  "@class"?: string;
  detEvento?: CEventoInsucessoNFePlV102E110192V100DetEvento;
}

export class CEventoInsucessoNFePlV102E110192V100 {
    public "@class"?: string;

    public detEvento?: CEventoInsucessoNFePlV102E110192V100DetEvento;

    public constructor(props?: CEventoInsucessoNFePlV102E110192V100) {
        this["@class"] = ".CEventoInsucessoNFePlV102E110192V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoInsucessoNFePlV102E110192V100DetEvento(props.detEvento): undefined;
        }
    }
}
