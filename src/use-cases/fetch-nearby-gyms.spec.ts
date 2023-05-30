import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: 'Tests acamedy description',
      phone: '1199999-9999',
      latitude: -22.8818944,
      longitude: -42.3755776,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: 'Tests acamedy description',
      phone: '1199999-9999',
      latitude: -23.4683067,
      longitude: -47.4836398,
    })

    const { gyms } = await sut.execute({
      userLatitude: -22.8818944,
      userLongitude: -42.3755776,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
