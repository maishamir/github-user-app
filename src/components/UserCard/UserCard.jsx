import React from "react";
import locIcon from "../../assets/icons/icon-location.svg";
import websiteIcon from "../../assets/icons/icon-website.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import companyIcon from "../../assets/icons/icon-company.svg";
import defaultUser from "../../assets/icons/defaultUser.png";
import "./UserCard.scss";

function UserCard() {
  return (
    <section className="userCard">
      <div className="userInfo">
        <img src={defaultUser} alt=""/>
        <div className="user">
          <h1 className="user__name">The Octocat</h1>
          <h3 className="user__username">@octocat</h3>
          <p className="user__joinDate">Joined 25 Jan 2011</p>
        </div>
      </div>

      <p className="userDescription">
        Lorem ipsun dolor sit amet, consectetuer adipscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>

      <div className="userStats">
        <div className="stat">
          <p className="stat__label">Repos</p>
          <p className="stat__info">8</p>
        </div>
        <div className="stat">
          <p className="stat__label">Followers</p>
          <p className="stat__info">3938</p>
        </div>
        <div className="stat">
          <p className="stat__label">Following</p>
          <p className="stat__info">9</p>
        </div>
      </div>

      <ul className="userSocials">
        <li>
          <img src={locIcon} alt="" />
          <p>San Francisco</p>
        </li>
        <li>
          <img src={websiteIcon} alt="" />
          <a href="">https://github.blog</a>
        </li>
        <li className="unavailable">
          <img src={twitterIcon} alt="" />
          <a href="" >Not available</a>
        </li>
        <li>
          <img src={companyIcon} alt="" />
          <p>@github</p>
        </li>
      </ul>
    </section>
  );
}

export default UserCard;

{
  /* <div className="userInfo">
        [user img] [user's name]
        @[username]
        [date joined]
      </div>

      <p className="userDescription">
        [description of user]
      </p>

      <div className="userStats">
        <div>
          <p className="label">Repos</p>
          <p>[# repos]</p>
        </div>
        <div>
          <p className="label">Followers</p>
          <p>[# followers]</p>
        </div>
        <div>
          <p className="label">Following</p>
          <p>[# following]</p>
        </div>
      </div>

      <ul className="userSocials">
        <li>
          <img src={locIcon} alt="" />
          <p>[location]</p>
        </li>
        <li>
          <img src={websiteIcon} alt="" />
          <a href="">[website]</a>
        </li>
        <li>
          <img src={twitterIcon} alt="" />
          <a href="">[twitter]</a>
        </li>
        <li>
          <img src={companyIcon} alt="" />
          <p>[company]</p>
        </li>
      </ul> */
}
