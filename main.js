        const LinksSocialMedia = {
        github: 'italobaracho',
        youtube: 'UCIVnVnsJDyza-ISDc8BhpkQ',
        facebook: 'italo.baracho',
        instagram: 'italobarachor',
        twitter: 'italorangel2011'
      }

      function changeSocialMediaLinks() {
        for (let li of socialLinks.children) {
          const social = li.getAttribute('class')

          li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
        }
      }

      changeSocialMediaLinks()

      function getGitHubProfileInfos(){
        const url = `https://api.github.com/users/${LinkSocialMedia.github}`

      fetch(url)
      .then(response => { response.json() })
      .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userLogin.textContent = data.login
      })
    
      }

      getGitHubProfileInfos()
    
       