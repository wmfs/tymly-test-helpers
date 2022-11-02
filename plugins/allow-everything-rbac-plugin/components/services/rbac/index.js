const debug = require('debug')('rbac')

class DummyRbacService {
  boot (options) {
    options.messages.info('Dummy RBAC Service - always say yes')

    this.roleMembershipModel = options.bootedServices.storage.models.tymly_roleMembership
  } // boot

  async listUserRoles (userId) {
    const roles = await this.roleMembershipModel.find({
      where: {
        memberId: {
          equals: userId
        }
      },
      fields: ['roleId']
    })

    return ['$everyone', ...roles.map(r => r.roleId)]
  } // getUserRoles

  checkAuthorization (userId, ctx, resourceType, resourceName, action) {
    const text = `User '${userId}' asking for '${action}' on ${resourceType} '${resourceName}'... ` +
      '\n\tAccess permitted - NO ACCESS CONTROL APPLIED'
    debug(text)
    return Promise.resolve(true)
  } // checkRoleAuthorization

  resetCache () {
    this.userMembershipsCache.clear()
  }

  debug () {
    console.log('')
    console.log('Dummy RBAC Index')
    console.log('----------')
    console.log('Anything -> ALLOWED')
    console.log('')
  } // debug
} // RbacService

module.exports = {
  serviceClass: DummyRbacService,
  bootAfter: ['statebox', 'caches', 'storage']
}
