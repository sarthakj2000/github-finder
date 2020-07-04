//init github
const github = new Github();
//init Ui
const ui = new UI();
//search input
const searchUser = document.getElementById('searchUser');
//search input event listener
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;
  if (userText !== '') {
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        //show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
