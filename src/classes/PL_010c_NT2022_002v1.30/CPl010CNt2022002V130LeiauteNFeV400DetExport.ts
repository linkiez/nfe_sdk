import { CPl010CNt2022002V130LeiauteNFeV400ExportInd } from './CPl010CNt2022002V130LeiauteNFeV400ExportInd';

/**
 * Detalhe da exportação
 */
export class CPl010CNt2022002V130LeiauteNFeV400DetExport {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Exportação indireta
     */
    public exportInd?: CPl010CNt2022002V130LeiauteNFeV400ExportInd;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400DetExport instance.
     * Schema context: Detalhe da exportação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400DetExport) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400DetExport";


        if (props) {

        	this.exportInd = (props.exportInd) ? new CPl010CNt2022002V130LeiauteNFeV400ExportInd(props.exportInd): undefined;
        }
    }
}
