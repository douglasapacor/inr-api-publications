import { NullNumber } from "../../lib/helpers/nullifier"
import { Repository } from "../types"

export default class BoletimRepository extends Repository {
  async novoBoletim(params: {
    titulo: string
    numero: number | null
    tipo: number
    data: Date
    criado_id: number
  }): Promise<{ boletim_id: number } | null> {
    try {
      return this.procedure<{ boletim_id: number }>(
        "criar_boletim",
        params.titulo,
        NullNumber(params.numero),
        params.tipo,
        params.data,
        params.criado_id
      )
    } catch (error: any) {
      throw new Error(`/boletim:- ${error.message}`)
    }
  }
}
