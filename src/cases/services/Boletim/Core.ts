import BoletimRepository from "../../repositories/Boletim"
import ConfiguracoesRepository from "../../repositories/Configuracoes"

export default class Core {
  constructor(
    private boletimRepository: BoletimRepository,
    private configuracoesRepository: ConfiguracoesRepository
  ) {}

  public async insereBoletim(params: {
    data: Date
    criado_id: number
    conteudo: {
      conteudo_tipo_id: number
      identificador: number
    }[]
  }): Promise<number> {
    try {
      const numero = await this.configuracoesRepository.numeroBoletim()

      if (!numero) throw new Error("Erro ao iniciar criação do boletim.")

      const novoNumero = numero.valor + 1

      const novoBoletim = await this.boletimRepository.novoBoletim({
        titulo: `Boletim Eletrônico INR nº ${novoNumero}, de ${params.data.toLocaleDateString()}`,
        tipo: 1,
        numero: novoNumero,
        data: params.data,
        criado_id: params.criado_id
      })

      if (!novoBoletim) throw new Error("Erro ao criar o boletim.")

      for (let i = 0; i < params.conteudo.length; i++) {
        switch (params.conteudo[i].conteudo_tipo_id) {
          case 1:
            break
          case 2:
            break
          case 3:
            break
          case 4:
            break
          case 5:
            break
          case 6:
            break
          case 7:
            break
          case 8:
            break
          case 9:
            break
          case 10:
            break
        }
      }

      const verificaNumero =
        await this.configuracoesRepository.updateBoletimValue(novoNumero)

      if (!verificaNumero)
        throw new Error("Erro ao atualizar o número do boletim.")

      if (verificaNumero.updated <= 0)
        throw new Error("Erro ao atualizar o número do boletim.")

      return novoBoletim.boletim_id
    } catch (error: any) {
      throw new Error(
        error.message[0] === "/"
          ? `/core${error.message}`
          : `/core:- ${error.message}`
      )
    }
  }

  public async insereExtra(params: {
    data: Date
    criado_id: number
    conteudo: {
      conteudo_tipo_id: number
      identificador: number
    }[]
  }): Promise<number> {
    try {
      const numero = await this.configuracoesRepository.numeroBoletim()

      if (!numero) throw new Error("Erro ao iniciar criação do boletim.")

      const novoNumero = numero.valor + 1

      const novoBoletim = await this.boletimRepository.novoBoletim({
        titulo: `Edição Extraordinária - Boletim Eletrônico INR nº ${novoNumero}, de ${params.data.toLocaleDateString()}`,
        tipo: 2,
        numero: novoNumero,
        data: params.data,
        criado_id: params.criado_id
      })

      if (!novoBoletim) throw new Error("Erro ao criar o extra.")

      return novoBoletim.boletim_id
    } catch (error: any) {
      throw new Error(
        error.message[0] === "/"
          ? `/core${error.message}`
          : `/core:- ${error.message}`
      )
    }
  }

  public async insereClassificador(): Promise<number> {
    try {
      return 0
    } catch (error: any) {
      throw new Error(
        error.message[0] === "/"
          ? `/core${error.message}`
          : `/core:- ${error.message}`
      )
    }
  }

  public async insereIEPTB(): Promise<number> {
    try {
      return 0
    } catch (error: any) {
      throw new Error(
        error.message[0] === "/"
          ? `/core${error.message}`
          : `/core:- ${error.message}`
      )
    }
  }

  public async insereComunicado(): Promise<number> {
    try {
      return 0
    } catch (error: any) {
      throw new Error(
        error.message[0] === "/"
          ? `/core${error.message}`
          : `/core:- ${error.message}`
      )
    }
  }

  public async insereDivulgacao(): Promise<number> {
    try {
      return 0
    } catch (error: any) {
      throw new Error(
        error.message[0] === "/"
          ? `/core${error.message}`
          : `/core:- ${error.message}`
      )
    }
  }
}
