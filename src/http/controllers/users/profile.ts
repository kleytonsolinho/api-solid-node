import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  try {
    const getUserProfile = makeGetUserProfileUseCase()

    const { user } = await getUserProfile.execute({ userId: request.user.sub })

    return reply
      .status(200)
      .send({ user: { ...user, password_hash: undefined } })
  } catch (err: any) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: err.message })
    }
    throw err
  }
}
