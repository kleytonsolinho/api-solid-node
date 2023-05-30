import type {
  FetchUserCheckInsHistoryUseCaseRequest,
  FetchUserCheckInsHistoryUseCaseResponse,
} from '@/http/data/dtos/fetch-user-check-ins-history-dto'
import { CheckInsRepository } from '@/repositories/check-ins-repository'

export class FetchUserCheckInsHistoryUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUserCheckInsHistoryUseCaseRequest): Promise<FetchUserCheckInsHistoryUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return { checkIns }
  }
}
