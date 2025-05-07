import { z } from "zod"
export const novoBoletimValidation = z.object({
  titulo: z.string().min(1).max(200),
  boletim_tipo_id: z.number(),
  data: z.string().transform(d => new Date(d)),
  conteudo: z.array(
    z.object({
      conteudo_tipo_id: z.number(),
      identificador: z.number()
    })
  ),
  criado_id: z.number()
})

export type novoBoletimControllerProps = z.input<typeof novoBoletimValidation>
export type novoBoletimServiceProps = z.output<typeof novoBoletimValidation>
