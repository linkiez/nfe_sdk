import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento } from './CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100RetEnvEvento {
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
    public cOrgao?: unknown;
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
    public retEvento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100RetEnvEvento) {
        this["@class"] = ".CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
