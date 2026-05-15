import { TEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100EnvEvento } from './TEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100EnvEvento';

export interface IEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100 {
  "@class"?: string;
  envEvento?: TEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100EnvEvento;
}

export class CEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100 {
    public "@class"?: string;

    public envEvento?: TEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100EnvEvento;

    public constructor(props?: CEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102EnvEventoCancInsucessoNFeV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
