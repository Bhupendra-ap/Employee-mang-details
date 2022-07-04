const contacts = [
  {
    id: 1,

    login: "defunkt",
    imgURL: "https://avatars.githubusercontent.com/u/2?v=4",
    url: "https://api.github.com/users/defunkt",
    email: "b@beyonce.com",
    followers_url: "https://api.github.com/users/wycats/followers",
    following_url: "https://api.github.com/users/wycats/following{/other_user}",
    gists_url: "https://api.github.com/users/wycats/gists{/gist_id}",
    starred_url: "https://api.github.com/users/wycats/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/wycats/subscriptions",
    organizations_url: "https://api.github.com/users/wycats/orgs",
  },
  {
    id: 2,
    login: "pjhyett",
    imgURL: "https://avatars.githubusercontent.com/u/3?v=4",
    url: "https://api.github.com/users/pjhyett",
    email: "jack@nowhere.com",
    followers_url: "https://api.github.com/users/ezmobius/followers",
    following_url:
      "https://api.github.com/users/ezmobius/following{/other_user}",
    gists_url: "https://api.github.com/users/ezmobius/gists{/gist_id}",
    starred_url: "https://api.github.com/users/ezmobius/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ezmobius/subscriptions",
    organizations_url: "https://api.github.com/users/ezmobius/orgs",
  },
  {
    id: 3,
    login: "wycats",
    imgURL: "https://avatars.githubusercontent.com/u/4?v=4",
    url: "https://api.github.com/users/wycats",
    email: "gmail@chucknorris.com",
    followers_url: "https://api.github.com/users/ivey/followers",
    following_url: "https://api.github.com/users/ivey/following{/other_user}",
    gists_url: "https://api.github.com/users/ivey/gists{/gist_id}",
    starred_url: "https://api.github.com/users/ivey/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ivey/subscriptions",
    organizations_url: "https://api.github.com/users/ivey/orgs",
  },
];

export default contacts;

/*
<div>
      {
        <button
          className="btn btn-primary"
          id="1"
          onClick={(e) => {
            HandleCounter(counter - 10);
            fetchEmployee();
          }}
          style={{ margin: 75 }}
        >
          Previous
        </button>
      }
      {
        <button
          className="btn btn-primary"
          id="2"
          onClick={(e) => {
            HandleCounter(counter + 10);
            fetchEmployee();
          }}
        >
          Next
        </button>
      }
*/
