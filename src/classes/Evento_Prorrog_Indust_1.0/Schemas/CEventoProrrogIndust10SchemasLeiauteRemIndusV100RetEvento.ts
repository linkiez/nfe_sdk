import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento } from './CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export class CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Referenced or wildcard schema content not fully resolved by the generator.
     */
    public unknown?: unknown;
    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public infEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento instance.
     * Schema context: Tipo retorno do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
