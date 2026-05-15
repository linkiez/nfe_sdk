import { TEventoInsucessoNFePlV102RetEventoInsucessoNFeV100RetEnvEvento } from './TEventoInsucessoNFePlV102RetEventoInsucessoNFeV100RetEnvEvento';

export interface IEventoInsucessoNFePlV102RetEventoInsucessoNFeV100 {
  "@class"?: string;
  retEnvEvento?: TEventoInsucessoNFePlV102RetEventoInsucessoNFeV100RetEnvEvento;
}

export class CEventoInsucessoNFePlV102RetEventoInsucessoNFeV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoInsucessoNFePlV102RetEventoInsucessoNFeV100RetEnvEvento;

    public constructor(props?: CEventoInsucessoNFePlV102RetEventoInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102RetEventoInsucessoNFeV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
