import type {
  FetchNearbyGymsUseCaseRequest,
  FetchNearbyGymsUseCaseResponse,
} from '@/http/data/dtos/fetch-nearby-gyms-dto'
import { GymsRepository } from '@/repositories/gym-repository'

export class FetchNearbyGymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: FetchNearbyGymsUseCaseRequest): Promise<FetchNearbyGymsUseCaseResponse> {
    const gyms = await this.gymsRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    })

    return { gyms }
  }
}
