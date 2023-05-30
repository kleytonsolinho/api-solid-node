import { FastifyRequest } from 'fastify'
import { z } from 'zod'

export function historyValidators(request: FastifyRequest) {
  const historyQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
  })

  const { page } = historyQuerySchema.parse(request.query)

  return { page }
}
