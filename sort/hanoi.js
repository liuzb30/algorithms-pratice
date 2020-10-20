function hanoi(n, pillarA, pillarB, pillarC) {
  if (n === 1) {
    console.log("move: " + pillarA + "--->" + pillarC);
  } else {
    hanoi(n - 1, pillarA, pillarC, pillarB);
    console.log("move: " + pillarA + "--->" + pillarC);
    hanoi(n - 1, pillarB, pillarA, pillarC);
  }
}

hanoi(3, "A", "B", "C");
