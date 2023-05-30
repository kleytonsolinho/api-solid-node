import type { Gym } from '@prisma/client'

export interface SearchGymsUseCaseRequest {
  query: string
  page: number
}

export interface SearchGymsCaseResponse {
  gyms: Gym[]
}
