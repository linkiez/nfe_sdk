import { TEventoInsucessoNFePlV102EventoInsucessoNFeV100Evento } from './TEventoInsucessoNFePlV102EventoInsucessoNFeV100Evento';

export interface IEventoInsucessoNFePlV102EventoInsucessoNFeV100 {
  "@class"?: string;
  evento?: TEventoInsucessoNFePlV102EventoInsucessoNFeV100Evento;
}

export class CEventoInsucessoNFePlV102EventoInsucessoNFeV100 {
    public "@class"?: string;

    public evento?: TEventoInsucessoNFePlV102EventoInsucessoNFeV100Evento;

    public constructor(props?: CEventoInsucessoNFePlV102EventoInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102EventoInsucessoNFeV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
