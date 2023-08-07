/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const output = [];
  let prereq = {};

  for (let i = 0; i < numCourses; ++i) {
    prereq[i] = [];
  }

  for (let [course, pre] of prerequisites) {
    prereq[course].push(pre);
  }

  const visited = new Set();
  const cycle = new Set();

  const dfs = (course) => {
    if (cycle.has(course)) {
      return false;
    }
    if (visited.has(course)) {
      return true;
    }

    cycle.add(course);

    for (pre of prereq[course]) {
      if (!dfs(pre)) return false;
    }

    cycle.delete(course);
    visited.add(course);
    output.push(course);

    return true;
  };

  for (let c = 0; c < numCourses; ++c) {
    if (!dfs(c)) return [];
  }

  return output;
};
