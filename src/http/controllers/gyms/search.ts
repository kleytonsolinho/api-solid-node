import { searchValidators } from '@/http/data/validators/gyms/search-validators'
import { makeSearchGymsUseCase } from '@/use-cases/factories/make-search-gyms-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const { q, page } = searchValidators(request)

  const searchGymUseCase = makeSearchGymsUseCase()

  const { gyms } = await searchGymUseCase.execute({
    query: q,
    page,
  })

  return reply.status(200).send({ gyms })
}
