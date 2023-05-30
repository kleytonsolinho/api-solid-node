import type {
  AuthenticateRequest,
  AuthenticateResponse,
} from '@/http/data/dtos/authenticate-dto'
import type { UsersRepository } from '@/repositories/users-repository'
import { compare } from 'bcryptjs'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

export class AuthenticateUseCase {
  constructor(private usersRespository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateRequest): Promise<AuthenticateResponse> {
    const user = await this.usersRespository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, user.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return { user }
  }
}
