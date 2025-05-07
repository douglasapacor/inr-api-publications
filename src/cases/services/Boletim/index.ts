import BoletimRepository from "../../repositories/Boletim"
import ConfiguracoesRepository from "../../repositories/Configuracoes"
import { novoBoletimServiceProps } from "../../schemas/novoBoletim"
import { defaultResponse } from "../../types"
import Core from "./Core"

export default class BoletimService {
  private core: Core

  constructor(
    private boletimRepository: BoletimRepository,
    private configuracoesRepository: ConfiguracoesRepository
  ) {
    this.core = new Core(this.boletimRepository, this.configuracoesRepository)
  }

  async novoBoletim(params: novoBoletimServiceProps): Promise<defaultResponse> {
    try {
      let boletimResponse: number | null = null

      switch (params.boletim_tipo_id) {
        case 1:
          boletimResponse = await this.core.insereBoletim({
            data: params.data,
            criado_id: params.criado_id,
            conteudo: params.conteudo
          })
          break

        case 2:
          boletimResponse = await this.core.insereExtra({
            data: params.data,
            criado_id: params.criado_id,
            conteudo: params.conteudo
          })
          break

        case 3:
          boletimResponse = await this.core.insereClassificador()
          break

        case 4:
          boletimResponse = await this.core.insereIEPTB()
          break

        case 5:
          boletimResponse = await this.core.insereComunicado()
          break

        case 6:
          boletimResponse = await this.core.insereDivulgacao()
          break
      }

      if (!boletimResponse) throw new Error("Erro ao processar.")

      return {
        success: true,
        data: {
          boletim_id: boletimResponse
        }
      }
    } catch (error: any) {
      if (error.message[0] === "/") {
        return {
          success: false,
          message: `/service${error.message}`
        }
      } else {
        return {
          success: false,
          message: error.message
        }
      }
    }
  }
}
