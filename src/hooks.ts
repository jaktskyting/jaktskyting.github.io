import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { Session } from "@supabase/supabase-js";

export const useNotAuthed = () : (() => void) => {
  const [session, setSession] = useState<Session | null>(supabase.auth.session());
  const navigate = useNavigate();

  const refreshSession = () => {
    setSession(supabase.auth.session());
  };

  useEffect(() => {
    if (!!session) {
      navigate("/");
    }
  }, [session]);

  return refreshSession;
};

export const useAuthed = () : (Session | null) => {
    const [session, setSession] = useState<Session | null>(supabase.auth.session());
    const navigate = useNavigate();
  
//    const refreshSession = () => setSession(supabase.auth.session());
  
//    useEffect(() => refreshSession(), []);
  
    useEffect(() => {
      if (!session) {
        navigate("/login");
      }
    }, [session]);
  
    return session;
  };