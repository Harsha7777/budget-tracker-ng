'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // In a real app, validate credentials against a database
  if (email === 'demo@example.com' && password === 'password') {
    const user = { id: 1, email }
    const session = JSON.stringify(user)
    
    cookies().set('session', session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 1 week
    })

    redirect('/dashboard')
  }

  return { error: 'Invalid credentials' }
}

export async function signOut() {
  cookies().delete('session')
  redirect('/login')
}

export async function getSession() {
  const session = cookies().get('session')
  if (!session) return null

  return JSON.parse(session.value)
}

