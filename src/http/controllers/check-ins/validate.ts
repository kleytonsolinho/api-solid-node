import { validateValidators } from '@/http/data/validators/check-ins/metrics-validators'
import { makeValidateCheckInUseCase } from '@/use-cases/factories/make-validate-check-in-use-case'

import { FastifyReply, FastifyRequest } from 'fastify'

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const { checkInId } = validateValidators(request)

  const validateCheckInUseCase = makeValidateCheckInUseCase()

  await validateCheckInUseCase.execute({
    checkInId,
  })

  return reply.status(204).send()
}
