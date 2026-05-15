import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta2 } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta2';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaVeic } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaVeic';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2 } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic } from './TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic';

export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalRodov {
  "@class"?: string;
  placaVeic?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaVeic;
  TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic;
  placaCarreta?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta;
  TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta;
  placaCarreta2?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta2;
  TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2;
}

export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalRodov {
    public "@class"?: string;

    public placaVeic?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaVeic;
    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic;
    public placaCarreta?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta;
    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta;
    public placaCarreta2?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta2;
    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2;

    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalRodov) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalRodov";


        if (props) {

        	this.placaVeic = props.placaVeic;
        	this.TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic = props.TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic;
        	this.placaCarreta = props.placaCarreta;
        	this.TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta = props.TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta;
        	this.placaCarreta2 = props.placaCarreta2;
        	this.TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2 = props.TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2;
        }
    }
}
