/* eslint-env mocha */

const expect = require('chai').expect
const EnsureCloudStorageFolder = require('../plugins/mock-sharepoint-plugin/components/state-resources/ensure-cloud-storage-folder')
const GetCloudStorageContents = require('../plugins/mock-sharepoint-plugin/components/state-resources/get-cloud-storage-contents')

describe('mock sharepoint tests', () => {

  class TestContext {
    sendTaskSuccess(result) {
      this.result = result
    }
  }


  it('ensure cloud storage folder', () => {
    const context = new TestContext()
    const ensureStateResource = new EnsureCloudStorageFolder()

    ensureStateResource.run({}, context)

    expect(context.result.folderPath).eql('/cloud/storage/folder')
    expect(context.result.url).eql('https://cloud.provider.example/')
  })

  it('get cloud storage contents', () => {
    const context = new TestContext()
    const getContentsStateResource = new GetCloudStorageContents()

    getContentsStateResource.run({}, context)

    expect(context.result.contents).eql([])
  })
})