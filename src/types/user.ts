export interface UserDataStore {
  id: string
  name: string
  phone: string
  email: string
  role: string
  gender: string | null
  bio: string | null
  provider: string | null
  createdAt: string
  updatedAt: string
}
