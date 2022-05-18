import React from "react";
import styled from "styled-components";

const SingleUser = ({ user }) => {
  return (
    <div>
      <UserCard>
        <img src={user.picture.large} alt="" />

        <p className="name">
          {user.name.first} {user.name.last}
        </p>

        <p>
          {user.location.city} - {user.location.country}
        </p>
        <p>{user.email}</p>
      </UserCard>
    </div>
  );
};

const UserCard = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #f3f3f3;
  background-color: #eee;
  height: 40vh;
  border-radius: 10px;
  font-family: Sans-Serif;
  margin: 1rem 0;
  transition: all 0.3s ease;
  gap: 0.5rem;
  user-select: none;

  img {
    border-radius: 50%;
  }

  .name {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    font-size: 20px;
  }

  &:hover {
    box-shadow: 0px 0px 10px #f3f3f3;
    transform: translateY(-10px);
  }
`;

export default SingleUser;
