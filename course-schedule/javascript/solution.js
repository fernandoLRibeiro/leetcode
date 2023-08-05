/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let preMap = {};
  for (let i = 0; i < numCourses; ++i) {
    preMap[i] = [];
  }
  for (let [course, pre] of prerequisites) {
    preMap[course].push(pre);
  }
  let visited = new Set();

  const dfs = (course) => {
    if (visited.has(course)) {
      return false;
    }

    if (preMap[course] === []) {
      return true;
    }

    visited.add(course);

    for (pre of preMap[course]) {
      if (!dfs(pre)) {
        return false;
      }
    }

    visited.delete(course);
    preMap[course] = [];

    return true;
  };

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;
};
