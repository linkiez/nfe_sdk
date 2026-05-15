import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

/**
 * Tipo Redução Base de Cálculo
 */
export class CPlNfAg100JDFeTiposBasicosV100Red {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Percentual de redução de aliquota do cClassTrib
     */
    public pRedAliq?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Aliquota Efetiva que será aplicada a Base de Calculo (em percentual)
     */
    public pAliqEfet?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100Red instance.
     * Schema context: Tipo Redução Base de Cálculo
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100Red) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100Red";


        if (props) {

        	this.pRedAliq = props.pRedAliq;
        	this.pAliqEfet = props.pAliqEfet;
        }
    }
}
