/* eslint-env mocha */

const expect = require('chai').expect
const UserInfo = require('../plugins/mock-user-info-plugin/components/services/user-info').serviceClass

describe('mock user-info tests', () => {
  const userInfo = new UserInfo()

  const user1 = 'test1'
  const user2 = 'test2'
  const failUser = 'noway'
  const email1 = 'test@test.com'
  const email2 = 'shout-out@bigups.com'

  describe('set up', () => {
    it('boot', done => {
      userInfo.boot({
          messages: { info: s => console.log(s) }
        },
        done
      )
    })

    it('add mock users', () => {
      userInfo.addUser(user1, email1)
      userInfo.addUser(user2, email2)
    })
  })

  describe('verify', () => {
    it('check email', async () => {
      expect(await userInfo.emailFromUserId(user1)).to.eql(email1)
      expect(await userInfo.emailFromUserId(user2)).to.eql(email2)
    })
    it('check userId', async () => {
      expect(await userInfo.userIdFromEmail(email1)).to.eql(user1)
      expect(await userInfo.userIdFromEmail(email2)).to.eql(user2)
    })
  })

  describe('negative tests', () => {
    it('check email', async () => {
      expect(await userInfo.emailFromUserId(null)).to.eql(null)
      expect(await userInfo.emailFromUserId('not-there')).to.eql(null)
    })
    it('check userId', async () => {
      expect(await userInfo.userIdFromEmail(null)).to.eql(null)
      expect(await userInfo.userIdFromEmail('not-found')).to.eql(null)
    })
  })
})