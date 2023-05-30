import { FastifyRequest } from 'fastify'
import { z } from 'zod'

export function nearbyValidators(request: FastifyRequest) {
  const nearbyQuerySchema = z.object({
    latitude: z.coerce.number().refine((value) => {
      return Math.abs(value) <= 90
    }),
    longitude: z.coerce.number().refine((value) => {
      return Math.abs(value) <= 180
    }),
  })

  const { latitude, longitude } = nearbyQuerySchema.parse(request.query)

  return { latitude, longitude }
}
