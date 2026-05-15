import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta2 } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta2';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaVeic } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaVeic';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2 } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic } from './TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic';

export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalRodov {
  "@class"?: string;
  placaVeic?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaVeic;
  TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic;
  placaCarreta?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta;
  TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta;
  placaCarreta2?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta2;
  TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2;
}

export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalRodov {
    public "@class"?: string;

    public placaVeic?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaVeic;
    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic;
    public placaCarreta?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta;
    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta;
    public placaCarreta2?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta2;
    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2;

    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalRodov) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalRodov";


        if (props) {

        	this.placaVeic = props.placaVeic;
        	this.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic = props.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic;
        	this.placaCarreta = props.placaCarreta;
        	this.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta = props.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta;
        	this.placaCarreta2 = props.placaCarreta2;
        	this.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2 = props.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2;
        }
    }
}
