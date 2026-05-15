import { CEventosRtcE112130V100GControleEstoque } from '../../classes/Eventos_RTC/CEventosRtcE112130V100GControleEstoque';

/**
 * Informações por item da Nota de Fornecimento
 */
export interface IEventosRtcE112130V100GPerecimento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do crédito IBS referente às aquisições a ser estornado correspondente à quantidade que foi objeto de roubo, perda, furto ou perecimento
   */
  vIBS?: unknown;
  /**
   * Valor do crédito CBS referente às aquisições a ser estornado correspondente à quantidade que foi objeto de roubo, perda, furto ou perecimento
   */
  vCBS?: unknown;
  /**
   * Informar a quantidade que foi objeto de roubo, perda, furto ou perecimento
   */
  gControleEstoque?: CEventosRtcE112130V100GControleEstoque;
}
