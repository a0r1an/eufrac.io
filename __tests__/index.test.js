/* eslint-env jest */
import {fetchYoutubeFeed, fetchSoundcloudFeed} from '../utils.js'

describe('fetchYoutubeFeed', () => {
  it('returns an object', async () => {
    expect(typeof await fetchYoutubeFeed()).toBe('object');
  })
})

describe('fetchSoundcloudFeed', () => {
  it('returns an object', async () => {
    expect(typeof await fetchSoundcloudFeed()).toBe('object');
  })
})