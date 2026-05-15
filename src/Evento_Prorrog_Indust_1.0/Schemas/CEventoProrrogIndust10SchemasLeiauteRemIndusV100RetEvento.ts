import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento } from './CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento } from './TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento';

export interface IEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento;
  $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento;
}

export class CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento;
    public $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento;

    public constructor(props?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
