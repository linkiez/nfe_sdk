import { CEventosRtcE112130V100GControleEstoque } from './CEventosRtcE112130V100GControleEstoque';

/**
 * Informações por item da Nota de Fornecimento
 */
export class CEventosRtcE112130V100GPerecimento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Valor do crédito IBS referente às aquisições a ser estornado correspondente à quantidade que foi objeto de roubo, perda, furto ou perecimento
     */
    public vIBS?: unknown;
    /**
     * Valor do crédito CBS referente às aquisições a ser estornado correspondente à quantidade que foi objeto de roubo, perda, furto ou perecimento
     */
    public vCBS?: unknown;
    /**
     * Informar a quantidade que foi objeto de roubo, perda, furto ou perecimento
     */
    public gControleEstoque?: CEventosRtcE112130V100GControleEstoque;

    /**
     * Creates a new schema-backed CEventosRtcE112130V100GPerecimento instance.
     * Schema context: Informações por item da Nota de Fornecimento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112130V100GPerecimento) {
        this["@class"] = ".CEventosRtcE112130V100GPerecimento";


        if (props) {

        	this.vIBS = props.vIBS;
        	this.vCBS = props.vCBS;
        	this.gControleEstoque = (props.gControleEstoque) ? new CEventosRtcE112130V100GControleEstoque(props.gControleEstoque): undefined;
        }
    }
}
