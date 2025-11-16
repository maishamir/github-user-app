import React from 'react'
import locIcon from "../../assets/icons/icon-location.svg";
import websiteIcon from "../../assets/icons/icon-website.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import companyIcon from "../../assets/icons/icon-company.svg";

function UserCard() {
  return (
    <section className="userCard">
      <div className="userInfo">
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
      </ul>
    </section>
  )
}

export default UserCard
