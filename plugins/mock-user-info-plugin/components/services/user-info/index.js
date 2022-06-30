
class MockUserInfoService {
  boot (options) {
    options.messages.info('Mock User-info Service')

    this.id2Email = new Map()
    this.email2Id = new Map()
  } // boot

  addUser (userId, email) {
    this.id2Email.set(userId, email)
    this.email2Id.set(email, userId)
  }

  emailFromUserId (userId) {
    return wrap(this.id2Email.get(userId) || null)
  }

  userIdFromEmail (email) {
    return wrap(this.email2Id.get(email) || null)
  }

  allFromUserId (userId) {
    return { userId }
  }

  groupsFromUserId (userId) {
    throw new Error('user-info.groupsFromUserId not implemented')
  }
} // class MockUserInfoService

function wrap (val) {
  return new Promise((resolve, reject) => resolve(val))
}

module.exports = {
  serviceClass: MockUserInfoService
}
