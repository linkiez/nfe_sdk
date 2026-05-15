import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento } from './CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge } from './TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento } from './TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento';

export interface IEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEnvEvento {
  "@class"?: string;
  tpAmb?: unknown;
  verAplic?: unknown;
  cOrgao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge;
  cStat?: unknown;
  xMotivo?: unknown;
  retEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento;
  $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento;
}

export class CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEnvEvento {
    public "@class"?: string;

    public tpAmb?: unknown;
    public verAplic?: unknown;
    public cOrgao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge;
    public cStat?: unknown;
    public xMotivo?: unknown;
    public retEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento;
    public $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento;

    public constructor(props?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEnvEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
