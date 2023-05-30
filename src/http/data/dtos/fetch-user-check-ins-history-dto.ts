import { type CheckIn } from '@prisma/client'

export interface FetchUserCheckInsHistoryUseCaseRequest {
  userId: string
  page: number
}

export interface FetchUserCheckInsHistoryUseCaseResponse {
  checkIns: CheckIn[]
}
