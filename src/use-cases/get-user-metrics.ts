import type {
  GetUserMetricsRequest,
  GetUserMetricsResponse,
} from '@/http/data/dtos/get-user-metrics-dto'
import { CheckInsRepository } from '@/repositories/check-ins-repository'

export class GetUserMetricsUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMetricsRequest): Promise<GetUserMetricsResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return { checkInsCount }
  }
}
