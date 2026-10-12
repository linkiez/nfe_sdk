import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento';

import { CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento';

import { TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEvento } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEvento';

/**
 * Tipo procEvento
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100ProcEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento;
    /**
     * Tipo retorno do Evento
     */
    public retEvento?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEvento;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100ProcEvento instance.
     * Schema context: Tipo procEvento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100ProcEvento) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100ProcEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento(props.evento): undefined;
        	this.retEvento = (props.retEvento) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento(props.retEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
