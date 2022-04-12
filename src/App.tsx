import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'
import { Session } from '@supabase/supabase-js'
import Stevne from "./Stevne";

const Home = () => {
  const [session, setSession] = useState<Session|null>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!(session?.user) ? <Auth /> : <Stevne key={session.user.id} session={session} />}
    </div>
  )
}

export default Home;