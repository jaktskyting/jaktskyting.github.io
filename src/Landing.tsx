import { Session } from "@supabase/supabase-js";
import { useAuthed } from "./hooks";
import { supabase } from "./supabaseClient";

export default function Landing() {
  const session = useAuthed();

  return (
    <h1>
      Hei!
      <a
        href=""
        onClick={() => {
          supabase.auth.signOut();
        }}
      >
        Log out
      </a>
    </h1>
  );
}
