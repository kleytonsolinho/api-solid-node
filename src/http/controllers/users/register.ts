import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists'
import { makeRegisterUseCase } from '@/use-cases/factories/make-register-use-case'

import { FastifyReply, FastifyRequest } from 'fastify'
import { registerValidators } from '../../data/validators/users/register-validators'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const { name, email, password } = registerValidators(request)

  try {
    const registerUseCase = makeRegisterUseCase()

    await registerUseCase.execute({ name, email, password })
  } catch (err: any) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
