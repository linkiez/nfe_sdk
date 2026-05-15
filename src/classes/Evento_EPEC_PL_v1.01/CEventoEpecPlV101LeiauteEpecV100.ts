import { TEventoEpecPlV101LeiauteEpecV100COrgaoAutor } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100COrgaoAutor';

import { TEventoEpecPlV101LeiauteEpecV100DhEmi } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100DhEmi';

import { TEventoEpecPlV101LeiauteEpecV100Ie } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Ie';

import { TEventoEpecPlV101LeiauteEpecV100Uf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Uf';

import { TEventoEpecPlV101LeiauteEpecV100VerAplic } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100VerAplic';

import { TEventoEpecPlV101LeiauteEpecV100Vicms } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Vicms';

import { TEventoEpecPlV101LeiauteEpecV100Vnf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Vnf';

import { TEventoEpecPlV101LeiauteEpecV100Vst } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Vst';

/**
 * Runtime class for CEventoEpecPlV101LeiauteEpecV100.
 */
export class CEventoEpecPlV101LeiauteEpecV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ver Aplic.
     */
    public verAplic?: TEventoEpecPlV101LeiauteEpecV100VerAplic;
    /**
     * Schema property dh Emi.
     */
    public dhEmi?: TEventoEpecPlV101LeiauteEpecV100DhEmi;
    /**
     * Schema property c Orgao Autor.
     */
    public cOrgaoAutor?: TEventoEpecPlV101LeiauteEpecV100COrgaoAutor;
    /**
     * Schema property i E.
     */
    public iE?: TEventoEpecPlV101LeiauteEpecV100Ie;
    /**
     * Schema property u F.
     */
    public uF?: TEventoEpecPlV101LeiauteEpecV100Uf;
    /**
     * Schema property v NF.
     */
    public vNF?: TEventoEpecPlV101LeiauteEpecV100Vnf;
    /**
     * Schema property v ICMS.
     */
    public vICMS?: TEventoEpecPlV101LeiauteEpecV100Vicms;
    /**
     * Schema property v ST.
     */
    public vST?: TEventoEpecPlV101LeiauteEpecV100Vst;
    /**
     * Schema property desc Evento.
     */
    public descEvento?: unknown;
    /**
     * Schema property tp Autor.
     */
    public tpAutor?: unknown;
    /**
     * Schema property tp NF.
     */
    public tpNF?: unknown;

    /**
     * Creates a new schema-backed CEventoEpecPlV101LeiauteEpecV100 instance.
     * Schema context: Runtime class for CEventoEpecPlV101LeiauteEpecV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101LeiauteEpecV100) {
        this["@class"] = ".CEventoEpecPlV101LeiauteEpecV100";


        if (props) {

        	this.verAplic = props.verAplic;
        	this.dhEmi = props.dhEmi;
        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.iE = props.iE;
        	this.uF = props.uF;
        	this.vNF = props.vNF;
        	this.vICMS = props.vICMS;
        	this.vST = props.vST;
        	this.descEvento = props.descEvento;
        	this.tpAutor = props.tpAutor;
        	this.tpNF = props.tpNF;
        }
    }
}
