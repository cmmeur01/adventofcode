let inputs = [
90014,
136811,
76785,
52456,
100165,
145455,
139492,
147364,
132728,
148120,
125346,
70660,
93908,
65560,
117553,
82640,
102895,
52255,
92105,
131486,
108400,
50206,
143776,
125140,
85110,
99560,
132357,
114882,
54894,
97524,
92970,
96947,
90800,
77099,
105103,
66349,
88495,
105036,
141694,
125727,
84853,
138364,
65577,
148012,
79944,
96503,
119701,
66221,
72469,
93647,
78767,
56419,
53435,
77682,
122753,
144944,
54835,
57744,
131886,
101510,
113730,
94631,
132978,
132739,
64250,
125158,
89069,
112371,
95739,
93349,
78558,
135082,
132015,
144682,
62515,
59722,
70175,
82703,
65827,
78405,
125701,
94987,
70914,
62543,
130058,
83997,
133749,
62224,
116328,
120760,
118160,
76755,
64521,
109956,
113248,
141473,
100546,
74991,
53223,
147635,
];
//part1
//for each input divide by 3, round down, add 2
//add each of these too the total sum

//map each input to a new array and reduce that array to get the sum
let totalFuel = inputs.map(ele => Math.floor(ele / 3) - 2).reduce((acc, currentVal) => acc + currentVal);

console.log(totalFuel);


//part2

// So, for each module mass, calculate its fuel and add it to the total.
//Then, treat the fuel amount you just calculated as the input mass and repeat the process, 
//continuing until a fuel requirement is zero or negative.For example:

// A module of mass 14 requires 2 fuel.This fuel requires no further fuel(2 divided by 3 and rounded down is 0, 
//which would call for a negative fuel), so the total fuel required is still just 2.
// At first, a module of mass 1969 requires 654 fuel.Then, this fuel requires 216 more fuel(654 / 3 - 2). 
//216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel.
//So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
// The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.

const fuelCalc = (mass) => Math.floor(mass / 3) - 2;

let totalWithFuel = (moduleMass) => {
  let totalFuelSum = fuelCalc(moduleMass);
  let modFuel = totalFuelSum;

  while (fuelCalc(modFuel) > 0) {
    totalFuelSum += fuelCalc(modFuel);
    modFuel = fuelCalc(modFuel);
  }

  return totalFuelSum;
};

let totalFuelWithFuel = inputs.map(ele => totalWithFuel(ele)).reduce((acc, currentVal) => acc + currentVal);

console.log(totalFuelWithFuel);






