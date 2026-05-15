import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento } from './CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento';

import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento } from './CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento } from './TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento';

export interface IEventoProrrogIndust10SchemasLeiauteRemIndusV100ProcEvento {
  "@class"?: string;
  evento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento;
  retEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento;
  $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento;
}

export class CEventoProrrogIndust10SchemasLeiauteRemIndusV100ProcEvento {
    public "@class"?: string;

    public evento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento;
    public retEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento;
    public $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento;

    public constructor(props?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100ProcEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasLeiauteRemIndusV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
