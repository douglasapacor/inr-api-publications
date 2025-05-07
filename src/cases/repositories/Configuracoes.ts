import { Repository } from "../types"

export default class ConfiguracoesRepository extends Repository {
  async numeroBoletim(): Promise<{ valor: number } | null> {
    try {
      return await this.procedure<{ valor: number }>("get_be_numero")
    } catch (error: any) {
      throw new Error(`configuracoes -:${error.message}`)
    }
  }

  async numeroClassificador(): Promise<{ valor: number } | null> {
    try {
      return await this.procedure<{ valor: number }>("get_classificador_numero")
    } catch (error: any) {
      throw new Error(`configuracoes -:${error.message}`)
    }
  }

  async numeroIeptb(): Promise<{ valor: number } | null> {
    try {
      return await this.procedure<{ valor: number }>("get_ieptb_numero")
    } catch (error: any) {
      throw new Error(`configuracoes -:${error.message}`)
    }
  }

  async updateBoletimValue(value: number): Promise<{ updated: number } | null> {
    try {
      return await this.procedure<{ updated: number }>(
        "update_boletim_numero",
        value
      )
    } catch (error: any) {
      throw new Error(`configuracoes -:${error.message}`)
    }
  }

  async updateClassificadorValue(
    value: number
  ): Promise<{ updated: number } | null> {
    try {
      return await this.procedure<{ updated: number }>(
        "update_classificador_numero",
        value
      )
    } catch (error: any) {
      throw new Error(`configuracoes -:${error.message}`)
    }
  }

  async updateIeptbValue(value: number): Promise<{ updated: number } | null> {
    try {
      return await this.procedure<{ updated: number }>(
        "update_ieptb_numero",
        value
      )
    } catch (error: any) {
      throw new Error(`configuracoes -:${error.message}`)
    }
  }
}
