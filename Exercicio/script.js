document.addEventListener('DOMContentLoaded', function(){

    const avatar = document.querySelector("#profileAvatar")
    const name = document.querySelector('#profileName')
    const user = document.querySelector('#profileUser')
    const repo = document.querySelector('#repositorios')
    const seguidores = document.querySelector('#seguidores')
    const seguindo = document.querySelector('#seguindo')
    const linkUser = document.querySelector('#link')



    fetch ('https://api.github.com/users/WillGMF')
        .then(function(res) {
            return res.json();
        })
        .then(function (json) {
            
            repo.innerText = json.public_repos;
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            user.innerText = json.login;
            name.innerText = json.name;
            avatar.src = json.avatar_url;
            linkUser.href = json.html_url;
        })

})
