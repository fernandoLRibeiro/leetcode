var Twitter = function () {
  this.tweets = [];
  this.followMap = new Map();
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.tweets.push({ authorId: userId, id: tweetId });
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const newsIds = [];
  for (let i = this.tweets.length - 1; i >= 0 && newsIds.length < 10; --i) {
    const tweet = this.tweets[i];

    const isAuthor = tweet.authorId === userId;
    const isFollowing =
      this.followMap.get(userId) &&
      this.followMap.get(userId).has(tweet.authorId);
    if (isAuthor || isFollowing) newsIds.push(tweet.id);
  }
  return newsIds;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.followMap.has(followerId))
    this.followMap.set(followerId, new Set());

  this.followMap.get(followerId).add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (
    this.followMap.get(followerId) &&
    this.followMap.get(followerId).has(followeeId)
  ) {
    this.followMap.get(followerId).delete(followeeId);
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
