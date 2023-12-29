import React from 'react';
import { Link } from "react-router-dom";

export default function Linkspage() {
  return (
    <div>
 <Link to="/" > Form </Link>
 <Link to="/list" >  Users List  </Link>
 <Link to="/update" > Update page  </Link>
 <Link to="/filter" > Filter page  </Link>

    </div>
  );
}
