import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    if (supabase.auth.user() === null) {
      history.replace("/login");
    }
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-xs-12 col-lg-8">
          <div className="card-title text-center mb-3">
            <h4>Home Page</h4>
            <p>You have sucessfully logged in!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
