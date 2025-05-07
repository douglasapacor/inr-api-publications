import {
  novoBoletimControllerProps,
  novoBoletimValidation
} from "../schemas/novoBoletim"
import BoletimService from "../services/Boletim"
import { defaultResponse } from "../types"

export default class BoletimController {
  constructor(private boletimService: BoletimService) {}

  async novoBoletim(
    params: novoBoletimControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await novoBoletimValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.boletimService.novoBoletim(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
