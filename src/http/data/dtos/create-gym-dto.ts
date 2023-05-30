import type { Gym } from '@prisma/client'

export interface CreateGymUseCaseRequest {
  title: string
  description: string
  phone: string
  latitude: number
  longitude: number
}

export interface CreateGymUseCaseResponse {
  gym: Gym
}
