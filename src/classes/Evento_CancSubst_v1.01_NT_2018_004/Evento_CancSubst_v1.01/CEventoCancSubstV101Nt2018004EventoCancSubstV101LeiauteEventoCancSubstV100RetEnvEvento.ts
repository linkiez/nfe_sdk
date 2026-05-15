import { CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento';

import { TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEnvEvento } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEnvEvento {
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
    public retEvento?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEnvEvento instance.
     * Schema context: Tipo Retorno de Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEnvEvento) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEnvEvento";


        if (props) {

        	this.tpAmb = props.tpAmb;
        	this.verAplic = props.verAplic;
        	this.cOrgao = props.cOrgao;
        	this.cStat = props.cStat;
        	this.xMotivo = props.xMotivo;
        	this.retEvento = (props.retEvento) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento(props.retEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
