import React from 'react'
import Navbar from '../widgets/Navbar'

import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
function HomePage() {
    const { user, isAuthenticated } = useAuth0();
    return (
      <div>
        <Navbar />

        {/* <JSONPretty data={user} /> */}
        <p>Home Page</p>
        {isAuthenticated ? (
          <>
            <img src={user.picture} />
            <h2>Welcome {user.given_name}</h2>
          </>
        ) : (
          <></>
        )}
      </div>
    );
}

export default HomePage
