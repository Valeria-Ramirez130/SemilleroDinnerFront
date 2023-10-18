import React from 'react';
import "./AdminLayout.css";
import {LoginAdmin} from "../../pages/Admin"

export function AdminLayout(props) {
    const {children} =props;
    /*Esto es para saber que el usuario no esta log*/
    const auth = null;

    if (!auth) return <LoginAdmin />;

  return (
    <div>
        <p>AdminLayout</p>
        {children}
    </div>
  )
}
