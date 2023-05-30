import { createValidators } from '@/http/data/validators/check-ins/create-validators'
import { makeCheckInUseCase } from '@/use-cases/factories/make-check-in-use-case'

import { FastifyReply, FastifyRequest } from 'fastify'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const { gymId, latitude, longitude } = createValidators(request)

  const checkInUseCase = makeCheckInUseCase()

  await checkInUseCase.execute({
    gymId,
    userId: request.user.sub,
    userLatitude: latitude,
    userLongitude: longitude,
  })

  return reply.status(201).send()
}
