import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { supabase } from "../supabaseClient";
import axios from 'axios';

export default function Home() {
  const [get, setGet] = useState(true)
  const [ssaqs, setSsaqs] = useState()
  const [tube, setTube] = useState()
  const [ratings, setRatings] = useState()
  const [aa, setAa] = useState()
  const history = useHistory();

  useEffect(() => {
    if (supabase.auth.user() === null) {
      history.replace("/login");
    }
  }, [history]);

  useEffect(() => {
    async function getData() {
      const ssaqsD = await axios.get('http://3.141.1.3:8888/ssaqs');
      const tubeD = await axios.get('http://3.141.1.3:8888/tube');
      const ratingsD = await axios.get('http://3.141.1.3:8888/ratings');
      const aaD = await axios.get('http://3.141.1.3:8888/a_a');

      setSsaqs(ssaqsD.data)
      setTube(tubeD.data)
      setRatings(ratingsD.data)
      setAa(aaD.data)
    }
    if (get) {
      getData();
      setGet(false)
    }
  }, [get]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-xs-12 col-lg-8">
          <div className="card-title text-center mb-3">
            <h4>Home Page</h4>
            <p>Hello Moto</p>
            {ratings && <p>{ratings[1].score}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
