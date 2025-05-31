require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

const githubData = {
  "login": "YashBuilds",
  "id": 177099058,
  "node_id": "U_kgDOCo5RMg",
  "avatar_url": "https://avatars.githubusercontent.com/u/177099058?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/YashBuilds",
  "html_url": "https://github.com/YashBuilds",
  "followers_url": "https://api.github.com/users/YashBuilds/followers",
  "following_url": "https://api.github.com/users/YashBuilds/following{/other_user}",
  "gists_url": "https://api.github.com/users/YashBuilds/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/YashBuilds/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/YashBuilds/subscriptions",
  "organizations_url": "https://api.github.com/users/YashBuilds/orgs",
  "repos_url": "https://api.github.com/users/YashBuilds/repos",
  "events_url": "https://api.github.com/users/YashBuilds/events{/privacy}",
  "received_events_url": "https://api.github.com/users/YashBuilds/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-07-31T07:20:02Z",
  "updated_at": "2025-05-09T10:20:41Z"
}

app.get('/',(req,res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('yashdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github',(req,res)=>{
    res.send(githubData)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`)
})