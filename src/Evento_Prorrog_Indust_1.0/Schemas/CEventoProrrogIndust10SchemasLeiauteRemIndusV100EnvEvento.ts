import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento } from './CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento } from './TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento';

export interface IEventoProrrogIndust10SchemasLeiauteRemIndusV100EnvEvento {
  "@class"?: string;
  evento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento;
  $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento;
}

export class CEventoProrrogIndust10SchemasLeiauteRemIndusV100EnvEvento {
    public "@class"?: string;

    public evento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento;
    public $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento;

    public constructor(props?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100EnvEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasLeiauteRemIndusV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento(props.evento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
