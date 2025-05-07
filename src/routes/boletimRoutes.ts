import express from "express"
import BoletimController from "../cases/controllers/Boletim"
import BoletimRepository from "../cases/repositories/Boletim"
import ConfiguracoesRepository from "../cases/repositories/Configuracoes"
import BoletimService from "../cases/services/Boletim"
import wrapper from "../lib/wrapper"
const boletimRoutes = express.Router()

const configuracoesRepository = new ConfiguracoesRepository()
const boletimRepository = new BoletimRepository()

const boletimService = new BoletimService(
  boletimRepository,
  configuracoesRepository
)

const boletimController = new BoletimController(boletimService)

boletimRoutes.post(
  "/novo",
  wrapper({
    handle: async (req, res) => {
      res.status(200).json(
        await boletimController.novoBoletim({
          titulo: req.body.titulo,
          boletim_tipo_id: req.body.boletim_tipo_id,
          data: req.body.data,
          conteudo: req.body.conteudo,
          criado_id: 32 /* req.user.idusuario */
        })
      )
    },
    settings: {
      level: "free"
    }
  })
)

export default boletimRoutes
