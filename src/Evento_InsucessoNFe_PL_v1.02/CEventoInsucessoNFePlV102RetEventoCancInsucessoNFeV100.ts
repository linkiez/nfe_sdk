import { TEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100RetEnvEvento } from './TEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100RetEnvEvento';

export interface IEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100 {
  "@class"?: string;
  retEnvEvento?: TEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100RetEnvEvento;
}

export class CEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100RetEnvEvento;

    public constructor(props?: CEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102RetEventoCancInsucessoNFeV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
