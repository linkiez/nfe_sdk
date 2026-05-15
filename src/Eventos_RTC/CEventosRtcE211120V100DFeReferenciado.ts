export interface IEventosRtcE211120V100DFeReferenciado {
  "@class"?: string;
  chaveAcesso?: unknown;
  nItem?: unknown;
}

export class CEventosRtcE211120V100DFeReferenciado {
    public "@class"?: string;

    public chaveAcesso?: unknown;
    public nItem?: unknown;

    public constructor(props?: CEventosRtcE211120V100DFeReferenciado) {
        this["@class"] = ".CEventosRtcE211120V100DFeReferenciado";


        if (props) {

        	this.chaveAcesso = props.chaveAcesso;
        	this.nItem = props.nItem;
        }
    }
}
