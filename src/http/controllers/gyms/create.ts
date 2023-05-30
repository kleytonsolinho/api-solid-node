import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists'

import { createValidators } from '@/http/data/validators/gyms/create-validators'
import { makeCreateGymUseCase } from '@/use-cases/factories/make-create-gym-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const { title, description, phone, latitude, longitude } =
    createValidators(request)

  try {
    const createGymUseCase = makeCreateGymUseCase()

    await createGymUseCase.execute({
      title,
      description,
      phone,
      latitude,
      longitude,
    })
  } catch (err: any) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
