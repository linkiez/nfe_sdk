import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100EnteGov } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100EnteGov';

import { TPlNfGas100EDFeTiposBasicosV100OperCompraGov } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100OperCompraGov';

/**
 * Tipo Compras Governamentais
 */
export class CPlNfGas100EDFeTiposBasicosV100CompraGovReduzido {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Para administração pública direta e suas autarquias e fundações: 1=União 2=Estados 3=Distrito Federal 4=Municípios 5=Consórcio Público 6=Comitê Gestor do IBS
     */
    public tpEnteGov?: TPlNfGas100EDFeTiposBasicosV100EnteGov;
    /**
     * Percentual de redução de aliquota em compra governamental
     */
    public pRedutor?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Tipo da operação com ente governamental: 1 – Fornecimento com pagamento posterior; 2 - Recebimento do pagamento com fornecimento já realizado; 3 – Fornecimento com pagamento já realizado; 4 – Recebimento do pagamento com fornecimento posterior;
     */
    public tpOperGov?: TPlNfGas100EDFeTiposBasicosV100OperCompraGov;

    /**
     * Creates a new schema-backed CPlNfGas100EDFeTiposBasicosV100CompraGovReduzido instance.
     * Schema context: Tipo Compras Governamentais
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EDFeTiposBasicosV100CompraGovReduzido) {
        this["@class"] = ".CPlNfGas100EDFeTiposBasicosV100CompraGovReduzido";


        if (props) {

        	this.tpEnteGov = props.tpEnteGov;
        	this.pRedutor = props.pRedutor;
        	this.tpOperGov = props.tpOperGov;
        }
    }
}
