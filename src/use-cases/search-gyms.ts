import type {
  SearchGymsCaseResponse,
  SearchGymsUseCaseRequest,
} from '@/http/data/dtos/search-gyms'
import { GymsRepository } from '@/repositories/gym-repository'

export class SearchGymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    query,
    page,
  }: SearchGymsUseCaseRequest): Promise<SearchGymsCaseResponse> {
    const gyms = await this.gymsRepository.searchMany(query, page)

    return { gyms }
  }
}
