import type { Gym } from '@prisma/client'

export interface FetchNearbyGymsUseCaseRequest {
  userLatitude: number
  userLongitude: number
}

export interface FetchNearbyGymsUseCaseResponse {
  gyms: Gym[]
}
