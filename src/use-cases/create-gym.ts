import type {
  CreateGymUseCaseRequest,
  CreateGymUseCaseResponse,
} from '@/http/data/dtos/create-gym-dto'
import { GymsRepository } from '@/repositories/gym-repository'

export class CreateGymUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  }: CreateGymUseCaseRequest): Promise<CreateGymUseCaseResponse> {
    const gym = await this.gymsRepository.create({
      title,
      description,
      phone,
      latitude,
      longitude,
    })

    return { gym }
  }
}
