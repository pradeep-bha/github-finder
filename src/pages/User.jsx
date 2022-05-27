import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";

import Spinner from "../components/layouts/Spinner";
import GithubContext from "../context/github/GithubContext";
import RepoList from "../components/repos/RepoList";

function User() {
  const params = useParams();

  const { getUser, user, loading, getUserRepos, repos } =
    useContext(GithubContext);

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4 text-left">
          <Link to="/" className="btn btn-ghost font-nunito">
            Back To Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end gap-0">
                <h2 className="card-title mb-0 font-arvo text-white text-left">
                  {name}
                </h2>
                <p className="flex-grow-0 text-white text-left">{login}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title font-arvo text-white mb-4">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p className="text-left">{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-accent font-nunito lg:mb-11"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className="w-full rounded-lg shadow-md bg-base-100 stats text-left">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md font-arvo">Location</div>
                  <div className="text-lg stat-value font-nunito text-white">
                    {location}
                  </div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md font-arvo">Website</div>
                  <div className="text-lg stat-value font-nunito text-white hover:text-green-500">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md font-arvo">Twitter</div>
                  <div className="text-lg stat-value font-nunito text-white hover:text-blue-400">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-success">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5 font-arvo text-left">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl text-white font-nunito text-left">
              {followers}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-success">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5 font-arvo text-left">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl text-white font-nunito text-left">
              {following}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-success">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5 font-arvo text-left">
              Public Repos
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl text-white font-nunito text-left">
              {public_repos}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-success">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5 font-arvo text-left">
              Public Gists
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl text-white font-nunito text-left">
              {public_gists}
            </div>
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    </>
  );
}

export default User;
