import { TEventoInsucessoNFePlV102EventoCancInsucessoNFeV100Evento } from './TEventoInsucessoNFePlV102EventoCancInsucessoNFeV100Evento';

export interface IEventoInsucessoNFePlV102EventoCancInsucessoNFeV100 {
  "@class"?: string;
  evento?: TEventoInsucessoNFePlV102EventoCancInsucessoNFeV100Evento;
}

export class CEventoInsucessoNFePlV102EventoCancInsucessoNFeV100 {
    public "@class"?: string;

    public evento?: TEventoInsucessoNFePlV102EventoCancInsucessoNFeV100Evento;

    public constructor(props?: CEventoInsucessoNFePlV102EventoCancInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102EventoCancInsucessoNFeV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
