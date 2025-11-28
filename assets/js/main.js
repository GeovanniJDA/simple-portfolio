const Profile = {
  photo: document.getElementById("profile.photo"),
  name: document.getElementById("profile.name"),
  job: document.getElementById("profile.job"),
  location: document.getElementById("profile.location"),
  phone: document.getElementById("profile.phone"),
  mail: document.getElementById("profile.mail"),

  softSkills: document.getElementById("profile.skills.softSkills"),
  hardSkills: document.getElementById("profile.skills.hardSkills"),

  languages: document.getElementById("profile.skills.languages"),

  portfolio: document.getElementById("profile.portfolio"),

  professionalExperience: document.getElementById(
    "profile.professionalExperience"
  ),
};

function updateProfileInfo(profileData) {
  Profile.photo.src = profileData.photo;
  Profile.photo.alt = profileData.name;

  Profile.name.innerText = profileData.name;

  Profile.job.innerText = profileData.job;

  Profile.location.innerText = profileData.location;

  Profile.phone.innerText = profileData.phone;
  Profile.phone.href = `tel: ${profileData.phone}`;

  Profile.mail.innerText = profileData.mail;
  Profile.mail.href = `mailto: ${profileData.mail}`;
}

function updateSoftSkills(profileData) {
  Profile.softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  Profile.hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.name}" alt="${skill.name}"></li>`
    )
    .join("");
}

function updateLanguages(profileData) {
  Profile.languages.innerHTML = profileData.languages
    .map((languages) => `<li>${languages}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  Profile.portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `
          <li>
            <h3 ${project.github ? 'class="github"' : ""}>${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
          </li>
    `;
    })
    .join("");
}

function updateProfessionalExperience(profileData) {
  Profile.professionalExperience.innerHTML =
    profileData.professionalExperience.map((experience) => {
      return `
    <li>
      <h3 class="title">${experience.name}</h3>
      <span class="period" >${experience.period}</span>
      <p>${experience.description}</p>
  </li>
    `;
    }).join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateProfessionalExperience(profileData);
})();
