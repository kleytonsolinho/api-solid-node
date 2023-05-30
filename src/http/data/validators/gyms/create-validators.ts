import { FastifyRequest } from 'fastify'
import { z } from 'zod'

export function createValidators(request: FastifyRequest) {
  const createGymBodySchema = z.object({
    title: z.string(),
    description: z.string(),
    phone: z.string(),
    latitude: z.number().refine((value) => {
      return Math.abs(value) <= 90
    }),
    longitude: z.number().refine((value) => {
      return Math.abs(value) <= 180
    }),
  })

  const { title, description, phone, latitude, longitude } =
    createGymBodySchema.parse(request.body)

  return { title, description, phone, latitude, longitude }
}
