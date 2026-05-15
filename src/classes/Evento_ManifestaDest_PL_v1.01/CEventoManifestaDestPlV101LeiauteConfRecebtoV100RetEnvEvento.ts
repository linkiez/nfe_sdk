import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento } from './CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoManifestaDestPlV101LeiauteConfRecebtoV100RetEnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão do Aplicativo que recebeu o Evento
     */
    public verAplic?: unknown;
    /**
     * Código do òrgao que registrou o Evento
     */
    public cOrgao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge;
    /**
     * Código do status da registro do Evento
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do registro do Evento
     */
    public xMotivo?: unknown;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101LeiauteConfRecebtoV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100RetEnvEvento) {
        this["@class"] = ".CEventoManifestaDestPlV101LeiauteConfRecebtoV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
