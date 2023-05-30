import { FastifyRequest } from 'fastify'
import { z } from 'zod'

export function authenticateValidators(request: FastifyRequest) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = authenticateBodySchema.parse(request.body)

  return { email, password }
}
