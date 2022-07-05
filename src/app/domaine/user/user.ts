export class User {
  private readonly _id
  private readonly _email
  private readonly _userType
  private readonly _userReference
  private readonly _status
  private readonly _profilePic

  constructor(id: string, email: string, userType: string, userReference: string, status: string, profilePic: string) {
    this._id = id;
    this._email = email;
    this._userType = userType;
    this._userReference = userReference;
    this._status = status;
    this._profilePic = profilePic;
  }

  get id() {
    return this._id;
  }

  get email() {
    return this._email;
  }

  get userType() {
    return this._userType;
  }

  get userReference() {
    return this._userReference;
  }

  get status() {
    return this._status;
  }

  get profilePic() {
    return this._profilePic;
  }
}

