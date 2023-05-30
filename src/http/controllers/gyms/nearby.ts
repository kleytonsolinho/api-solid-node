import { nearbyValidators } from '@/http/data/validators/gyms/nearby-validators'
import { makeFetchNearbyGymsUseCase } from '@/use-cases/factories/make-fetch-nearby-gyms-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function nearby(request: FastifyRequest, reply: FastifyReply) {
  const { latitude, longitude } = nearbyValidators(request)

  const fetchNearByGymsUseCase = makeFetchNearbyGymsUseCase()

  const { gyms } = await fetchNearByGymsUseCase.execute({
    userLatitude: latitude,
    userLongitude: longitude,
  })

  return reply.status(200).send({ gyms })
}
