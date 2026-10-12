import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100DetEvento } from './CEventoManifestaDestPlV101LeiauteConfRecebtoV100DetEvento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 91 para identificar o Ambiente Nacional
     */
    public cOrgao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge;
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
     * Tipo Versão do EnvEvento
     */
    public verEvento?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento;
    /**
     * Evento da confirmação de recebimento e210200
     */
    public detEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100DetEvento;
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
     * Creates a new schema-backed CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento instance.
     * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento) {
        this["@class"] = ".CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgao", "tpAmb", "chNFe", "dhEvento", "verEvento"]);
        	this.detEvento = (props.detEvento) ? new CEventoManifestaDestPlV101LeiauteConfRecebtoV100DetEvento(props.detEvento): undefined;
            assignSchemaProperties(this, props, ["verAplic", "cStat", "xMotivo", "nProt"]);
        }
    }
}
