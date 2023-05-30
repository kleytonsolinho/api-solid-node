import { FastifyRequest } from 'fastify'
import { z } from 'zod'

export function registerValidators(request: FastifyRequest) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  return { name, email, password }
}
