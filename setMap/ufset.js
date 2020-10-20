class UFSets {
  constructor() {
    this.parent = [];
  }

  init(size) {
    for (let i = 0; i < size; i++) {
      this.parent[i] = -1;
    }
  }

  find(item) {
    while (this.parent[item] >= 0) {
      item = this.parent[item];
    }
    return item;
  }

  union(root1, root2) {
    // this.parent[root1] += this.parent[root2]
    this.parent[root2] = root1;
  }

  buildRelation(i, j) {
    let root1 = this.find(i);
    let root2 = this.find(j);
    if (root1 !== root2) {
      this.union(root1, root2);
    }
  }

  isFriend(i, j) {
    let root1 = this.find(i);
    let root2 = this.find(j);
    return root1 === root2;
  }

  getFriendGroupCount() {
    let count = 0;
    this.parent.forEach((item) => {
      if (item < 0) {
        count++;
      }
    });
    return count;
  }
}

module.exports = UFSets;

// var friends = [
//   [0, 7],
//   [1, 6],
//   [4, 8],
//   [8, 2],
//   [9, 0],
//   [3, 5],
//   [1, 2],
// ];

// var ufset = new UFSets();
// ufset.init(10);
// friends.forEach((item) => {
//   const [i, j] = item;
//   ufset.buildRelation(i, j);
// });

// console.log("朋友圈个数为 " + ufset.getFriendGroupCount());
// console.log(ufset.isFriend(2, 6));
// console.log(ufset.isFriend(6, 8));
// console.log(ufset.isFriend(4, 8));
// console.log(ufset.isFriend(9, 7));
// console.log(ufset.isFriend(2, 4));
// console.log(ufset.isFriend(2, 7));
