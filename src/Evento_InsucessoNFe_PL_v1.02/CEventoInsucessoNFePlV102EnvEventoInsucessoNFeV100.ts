import { TEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100EnvEvento } from './TEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100EnvEvento';

export interface IEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100 {
  "@class"?: string;
  envEvento?: TEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100EnvEvento;
}

export class CEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100 {
    public "@class"?: string;

    public envEvento?: TEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100EnvEvento;

    public constructor(props?: CEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100) {
        this["@class"] = ".CEventoInsucessoNFePlV102EnvEventoInsucessoNFeV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
