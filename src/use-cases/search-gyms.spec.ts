import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to fetch check-in history', async () => {
    await gymsRepository.create({
      title: 'Academia Testes',
      description: 'Tests acamedy description',
      phone: '1199999-9999',
      latitude: -22.8818944,
      longitude: -42.3755776,
    })

    await gymsRepository.create({
      title: 'Javascript Academy',
      description: 'Tests acamedy description',
      phone: '1199999-9999',
      latitude: -22.8818944,
      longitude: -42.3755776,
    })

    const { gyms } = await sut.execute({
      query: 'Academia Testes',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Academia Testes' }),
    ])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 0; i <= 21; i++) {
      await gymsRepository.create({
        title: `Academia Testes ${i}`,
        description: 'Tests acamedy description',
        phone: '1199999-9999',
        latitude: -22.8818944,
        longitude: -42.3755776,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Academia',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Academia Testes 20' }),
      expect.objectContaining({ title: 'Academia Testes 21' }),
    ])
  })
})
