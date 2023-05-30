import { FastifyRequest } from 'fastify'
import { z } from 'zod'

export function validateValidators(request: FastifyRequest) {
  const validateCheckInParamsSchema = z.object({
    checkInId: z.string().uuid(),
  })

  const { checkInId } = validateCheckInParamsSchema.parse(request.params)

  return { checkInId }
}
