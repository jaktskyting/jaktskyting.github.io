import { useState } from "react";
import { supabase } from "./supabaseClient";
import { useNotAuthed } from "./hooks";

const Login = () => {
  const [loginType, setLoginType] = useState<"magicLink" | "emailAndPassword">(
    "emailAndPassword"
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const refreshSession = useNotAuthed();

  const handleMagicLinkLogin = async (email: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAndPasswordLogin = async (
    email: string,
    password: string
  ) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      refreshSession();
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderEmailLogin = () => {
    return (
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + React</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleMagicLinkLogin(email);
            }}
            className={"button block"}
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Send magic link</span>}
          </button>
        </div>
      </div>
    );
  };

  const renderEmailAndPasswordLogin = () => {
    return (
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + React</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="inputField"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleEmailAndPasswordLogin(email, password);
            }}
            className={"button block"}
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Login</span>}
          </button>
        </div>
      </div>
    );
  };

  const renderLogin = () => {
    if (loginType === "magicLink") {
      return renderEmailLogin();
    } else {
      return renderEmailAndPasswordLogin();
    }
  };

  return <div className="row flex flex-center">{renderLogin()}</div>;
};

export default Login;
