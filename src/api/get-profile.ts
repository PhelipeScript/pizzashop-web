import { api } from '@/lib/axios'

interface GetProfileResponse {
  name: string
  id: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function GetProfile() {
  const profile = await api.get<GetProfileResponse>('/me')

  return profile.data
}
