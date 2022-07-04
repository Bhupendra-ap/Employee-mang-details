import React from "react";
import Avatar from "./Avatar";

function Card({ info }) {
  const {
    login,
    url,
    avatar_url,
    followers_url,
    following_url,
    gists_url,
    starred_url,
    subscriptions_url,
    organizations_url,
  } = info;

  return (
    <div className="card">
      <div className="top">
        <h3 className="name" style={{ color: "white" }}>
          {login}
        </h3>
        <Avatar img={avatar_url} />
      </div>
      <div className="bottom">
        <ul style={{ padding: "10px" }}>
          <li>
            <a href={organizations_url}>organizations</a>
          </li>
          <li>
            <a href={subscriptions_url}>subscriptions</a>
          </li>
          <li>
            <a href={gists_url}>gits</a>
          </li>
          <li>
            <a href={starred_url}>starred</a>
          </li>
          <li>
            <a href={following_url}>following</a>
          </li>
          <li>
            <a href={url}>Url</a>
          </li>
          <li>
            <a href={followers_url}>followers</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
