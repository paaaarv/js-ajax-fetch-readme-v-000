const app = "I don't do much.";


const token = ed67062e048a4a6b7f0a50424ab31b16daeb1d63
fetch("https://api.github.com/user/repos",
{headers: {Authorizations: `token ${token}`}}).then(resp => resp.json()).then(
  json => console.log(json)
);
