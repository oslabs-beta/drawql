import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router';
import currentUser from '../../queries';

const HeaderLogOutButton = () => {
    const { client, data } = useQuery(currentUser);

    //resets Apollo and local store on logout
    const logout = () => {
        window.localStorage.clear();
        client.resetStore();
    };
    if (data && data.user) {
        return (
           //insert logout-button page style here
        );
    }
  
  return (
    //insert logout-button page style here
    <>
      
      <Redirect to="/login" />
        </>
    
   
  )
};

export default HeaderLogOutButton
