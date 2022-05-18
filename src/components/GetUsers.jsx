import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import SingleUser from "./SingleUser";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=5");
    setUsers(response.data.results);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <UserDiv>
        <ul>
          {users.map((user, idx) => (
            <li>
              <SingleUser user={user} key={idx} />
            </li>
          ))}
        </ul>
      </UserDiv>
    </div>
  );
};

const UserDiv = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ul {
    display: flex;
    align-item: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  li {
    width: 500px;
    display: flex;
    align-item: center;
    justify-content: center;
  }
`;

export default GetUsers;
