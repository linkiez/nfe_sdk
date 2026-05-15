import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

/**
 * Tipo Redução Base de Cálculo
 */
export class CPl010CNt2022002V130DFeTiposBasicosV100Red {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual de redução de aliquota do cClassTrib
     */
    public pRedAliq?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
    /**
     * Aliquota Efetiva que será aplicada a Base de Calculo (em percentual)
     */
    public pAliqEfet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130DFeTiposBasicosV100Red instance.
     * Schema context: Tipo Redução Base de Cálculo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130DFeTiposBasicosV100Red) {
        this["@class"] = ".CPl010CNt2022002V130DFeTiposBasicosV100Red";


        if (props) {

        	this.pRedAliq = props.pRedAliq;
        	this.pAliqEfet = props.pAliqEfet;
        }
    }
}
