
export class UserRegister {

    constructor(username, email, password, accountType, photoUrl, discipline, studentClass, confirmed) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.accountType = accountType;
        this.photoUrl = photoUrl;
        this.discipline = discipline;
        this.studentClass = studentClass;
        this.confirmed = confirmed;
      }

}

export class User {

  constructor(id, username, email, password, accountType, photoUrl, discipline, studentClass, confirmed) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.accountType = accountType;
    this.photoUrl = photoUrl;
    this.discipline = discipline;
    this.studentClass = studentClass;
    this.confirmed = confirmed;
  }
  
}