const Profile = {
  photo: document.getElementById("profile.photo"),
  name: document.getElementById("profile.name"),
  job: document.getElementById("profile.job"),
  location: document.getElementById("profile.location"),
  phone: document.getElementById("profile.phone"),
  mail: document.getElementById("profile.mail"),

  softSkills: document.getElementById("profile.skills.softSkills"),
}



function updateProfileInfo(profileData) {
  Profile.photo.src = profileData.photo
  Profile.photo.alt = profileData.name
  
  Profile.name.innerText = profileData.name

  Profile.job.innerText = profileData.job
  
  Profile.location.innerText = profileData.location

  Profile.phone.innerText = profileData.phone
  Profile.phone.href = `tel: ${profileData.phone}`

  Profile.mail.innerText = profileData.mail
  Profile.mail.href  = `mailto: ${profileData.mail}`
  
}

function updateSoftSkills(profileData) {
  Profile.softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}


(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updateSoftSkills(profileData)
})()