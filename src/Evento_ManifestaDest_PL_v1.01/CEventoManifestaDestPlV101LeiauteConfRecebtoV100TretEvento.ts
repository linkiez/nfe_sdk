import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento } from './CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento } from './TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento';

export interface IEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento;
  $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento;
}

export class CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento;
    public $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento;

    public constructor(props?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento) {
        this["@class"] = ".CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
