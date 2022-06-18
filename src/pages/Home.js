import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { supabase } from "../supabaseClient";
import axios from 'axios';

export default function Home() {
  const [get, setGet] = useState(true)
  const [users, setUsers] = useState()
  const history = useHistory();

  useEffect(() => {
    if (supabase.auth.user() === null) {
      history.replace("/login");
    }
  }, [history]);

  useEffect(() => {
    async function makeGetRequest() {

      let res = await axios.get('http://18.222.162.221:3000/todos');

      let data = res.data;
      setUsers(data)
      console.log(data);
    }


    if (get) {
      makeGetRequest();
      setGet(false)
    }
  }, [get]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-xs-12 col-lg-8">
          <div className="card-title text-center mb-3">
            <h4>Home Page</h4>
            <p>Yo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
