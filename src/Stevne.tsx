import { Session } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

type AccountProps = {
  session : Session
}

export default function Stevne({ session }: AccountProps) {
  const [loading, setLoading] = useState<boolean>(true)
  const [userId, setUserId] = useState<string|null>(null)
  const [name, setName] = useState<string|null>(null)

  useEffect(() => {
    getStevner()
  }, [session])

  async function getStevner() {
    try {
      console.log("asdasd")
      setLoading(true)
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('stevne')
        .select('navn')
       // .eq('user_id', user!.id)
        .single()

      if (error && status !== 406) {
        console.log("error")
        throw error
      }
      console.log("data or if " + data)
      if (data) {
        console.log("data " + data)
        setName(data.name)
      }
    } catch (error : any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile(username : string|null, website: string|null, avatar_url: string|null) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user!.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user!.email} disabled />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}