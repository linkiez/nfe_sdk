import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100DetEvento } from './CEventoProrrogIndust10SchemasLeiauteRemIndusV100DetEvento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
     */
    public cOrgao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge;
    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Chave de Acesso NF-e vinculada
     */
    public chNFe?: unknown;
    /**
     * Schema property dh Evento.
     */
    public dhEvento?: unknown;
    /**
     * informações específicas do evento
     */
    public detEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100DetEvento;
    /**
     * Versão do Aplicativo que recebeu o Evento
     */
    public verAplic?: unknown;
    /**
     * Código do status da registro do Evento
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do registro do Evento
     */
    public xMotivo?: unknown;
    /**
     * Código do órgão de autor do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
     */
    public cOrgaoAutor?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge;
    /**
     * Número do protocolo de registro do evento
     */
    public nProt?: unknown;

    //choice

    /**
     * CNPJ Destinatário
     * @param arg - Branch value assigned to CNPJDest.
     */
    public CNPJDest(arg: unknown) {
        delete((this as any).CPFDest);
        (this as any).CNPJDest = arg;
    }

    //choice

    /**
     * CPF Destiantário
     * @param arg - Branch value assigned to CPFDest.
     */
    public CPFDest(arg: unknown) {
        delete((this as any).CNPJDest);
        (this as any).CPFDest = arg;
    }

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento instance.
     * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento) {
        this["@class"] = ".CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgao", "tpAmb", "chNFe", "dhEvento"]);
        	this.detEvento = (props.detEvento) ? new CEventoProrrogIndust10SchemasLeiauteRemIndusV100DetEvento(props.detEvento): undefined;
            assignSchemaProperties(this, props, ["verAplic", "cStat", "xMotivo", "cOrgaoAutor", "nProt"]);
        }
    }
}
