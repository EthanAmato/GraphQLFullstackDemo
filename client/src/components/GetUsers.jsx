import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

export default function GetUsers() {
    const { error, loading, data } = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (data) {
            setUsers(data.getAllUsers);
        }
        console.log(data)
    }, [data]);

    return (
        <div>
            {users.map((val, i) => {
                // if (i > 30) return

                return (
                    <>
                        <h2>{val.firstName + " " + val.lastName}</h2>
                        <ul>
                            <li>{val.email}</li>
                        </ul>
                    </>
                )
            })}
        </div>
    );
}

