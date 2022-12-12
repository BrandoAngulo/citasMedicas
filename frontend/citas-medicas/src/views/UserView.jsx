import React from "react";
import { UserForm } from "../components/UserForm";
import { TableUser } from "../components/TableUser";

function UserView() {

    return(
        <>
         <UserForm/>
         <TableUser/>
        </>
       
    )
    
}
export {UserView}