import locIcon from "../../assets/icons/icon-location.svg";
import websiteIcon from "../../assets/icons/icon-website.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import companyIcon from "../../assets/icons/icon-company.svg";
import defaultUser from "../../assets/icons/defaultUser.png";
import "./UserCard.scss";

function UserCard({ userInfo }) {
  if (!userInfo) return <div>Loading...</div>;

  const joinDate = new Date(userInfo.created_at);
  console.log(joinDate);

  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const joined = joinDate.toLocaleDateString("en-GB", options);
  console.log(joined);

  return (
    <section className="userCard">
      <div className="userInfo">
        <img src={userInfo.avatar_url} alt="" />
        <div className="userDeets">
          <div className="userDeets__user">
            <h1 className="userDeets__user-name">{userInfo.name}</h1>
            <h3 className="userDeets__user-username">
              <a href={userInfo.html_url} target="_blank">
                @{userInfo.login}
              </a>
            </h3>
          </div>
          <p className="userDeets__joinDate">Joined {joined}</p>
        </div>
      </div>

      <p className="userDescription">
        {userInfo.bio ? (
          <p> {userInfo.bio}</p>
        ) : (
          <p>
            <em>This user doesn't have a bio</em>
          </p>
        )}
      </p>

      <div className="userStats">
        <div className="stat">
          <p className="stat__label">Repos</p>
          <p className="stat__info">{userInfo.public_repos}</p>
        </div>
        <div className="stat">
          <p className="stat__label">Followers</p>
          <p className="stat__info">{userInfo.followers}</p>
        </div>
        <div className="stat">
          <p className="stat__label">Following</p>
          <p className="stat__info">{userInfo.following}</p>
        </div>
      </div>

      <div className="userSocials">
        <div className="userSocials__section">
          <div className="userSocials__item">
            <img src={locIcon} alt="" />
            <p>{userInfo.location ? userInfo.location : "Not Available"}</p>
          </div>
          <div className="userSocials__item">
            <img src={websiteIcon} alt="" />
            <a href={userInfo?.blog} target="_blank">
              {userInfo.blog ? userInfo.blog : "Not Available"}
            </a>
          </div>
        </div>

        <div className="userSocials__section">
          <div className="userSocials__item unavailable">
            <img src={twitterIcon} alt="" />
            <a href={userInfo?.twitter_username} target="_blank">
              {userInfo.twitter_username
                ? userInfo.twitter_username
                : "Not Available"}
            </a>
          </div>
          <div className="userSocials__item">
            <img src={companyIcon} alt="" />
            <p>{userInfo.company ? userInfo.company : "Not Available"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserCard;
