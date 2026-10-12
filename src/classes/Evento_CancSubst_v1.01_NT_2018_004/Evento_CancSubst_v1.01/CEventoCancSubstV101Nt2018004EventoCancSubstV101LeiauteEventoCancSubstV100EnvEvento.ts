import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento';

import { TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEnvEvento } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100EnvEvento) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento(props.evento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
