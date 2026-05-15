import { CPl010CNt2022002V130LeiauteNFeV400ObsCont } from './CPl010CNt2022002V130LeiauteNFeV400ObsCont';

import { CPl010CNt2022002V130LeiauteNFeV400ObsFisco } from './CPl010CNt2022002V130LeiauteNFeV400ObsFisco';

import { CPl010CNt2022002V130LeiauteNFeV400ProcRef } from './CPl010CNt2022002V130LeiauteNFeV400ProcRef';

/**
 * Informações adicionais da NF-e
 */
export class CPl010CNt2022002V130LeiauteNFeV400InfAdic {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Campo de uso livre do contribuinte informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto
     */
    public obsCont?: CPl010CNt2022002V130LeiauteNFeV400ObsCont;
    /**
     * Campo de uso exclusivo do Fisco informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto
     */
    public obsFisco?: CPl010CNt2022002V130LeiauteNFeV400ObsFisco;
    /**
     * Grupo de informações do processo referenciado
     */
    public procRef?: CPl010CNt2022002V130LeiauteNFeV400ProcRef;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400InfAdic instance.
     * Schema context: Informações adicionais da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400InfAdic) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400InfAdic";


        if (props) {

        	this.obsCont = (props.obsCont) ? new CPl010CNt2022002V130LeiauteNFeV400ObsCont(props.obsCont): undefined;
        	this.obsFisco = (props.obsFisco) ? new CPl010CNt2022002V130LeiauteNFeV400ObsFisco(props.obsFisco): undefined;
        	this.procRef = (props.procRef) ? new CPl010CNt2022002V130LeiauteNFeV400ProcRef(props.procRef): undefined;
        }
    }
}
