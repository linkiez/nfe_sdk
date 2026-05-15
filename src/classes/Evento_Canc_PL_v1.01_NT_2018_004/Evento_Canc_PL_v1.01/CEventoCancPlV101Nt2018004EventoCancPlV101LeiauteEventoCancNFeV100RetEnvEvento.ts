import { CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento } from './CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento';

import { TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento } from '../../../types/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento {
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
    public retEvento?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
