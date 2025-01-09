import lodash from 'lodash';
import chalk from 'chalk';

const array = [1, 2, 3, 3, 3, 4, 5, 5, 5, 6, 7, 8, 8, 8, 9, 10];

// Using a function from lodash library to get unique numbers from the array
const uniqueNums = lodash.uniq(array);
console.log(chalk.yellow(uniqueNums));

console.log(chalk.blueBright('Hello, with chalk!'));