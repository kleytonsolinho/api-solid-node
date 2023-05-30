import { FastifyRequest } from 'fastify'
import { z } from 'zod'

export function searchValidators(request: FastifyRequest) {
  const searchQuerySchema = z.object({
    q: z.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { q, page } = searchQuerySchema.parse(request.query)

  return { q, page }
}
