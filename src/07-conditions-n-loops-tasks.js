/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let repl = '';
  if (num % 3 === 0) repl += 'Fizz';
  if (num % 5 === 0) repl += 'Buzz';
  if (repl !== '') return repl;
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i += 1) res *= i;
  return res;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = Math.floor(n1); i <= Math.min(Math.floor(n2), n2); i += 1) sum += i;
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  const max = Math.max(a, b, c);
  if (a === max && b + c > a) return true;
  if (b === max && a + c > b) return true;
  if (c === max && a + b > c) return true;
  return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  if (rect1.left + rect1.width > rect2.left
      && rect1.top + rect1.height > rect2.top
      && rect1.left <= rect2.left
      && rect1.top <= rect2.top
  ) return true;
  if (rect2.left + rect2.width > rect1.left
      && rect2.top + rect2.height > rect1.top
      && rect2.left <= rect1.left
      && rect2.top <= rect1.top
  ) return true;
  return false;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  let cx = circle.center.x;
  let cy = circle.center.y;
  let px = point.x;
  let py = point.y;
  if (circle.center.x !== 0) {
    cx = 0;
    px = px + cx - circle.center.x;
  }
  if (circle.center.y !== 0) {
    cy = 0;
    py = py + cy - circle.center.y;
  }
  if (Math.sqrt(px * px + py * py) < circle.radius) return true;
  return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.indexOf(str[i], i + 1) === -1 && str.indexOf(str[i]) === i) return str[i];
  }
  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const first = String(Math.min(a, b));
  const second = String(Math.max(a, b));
  let leftBrack;
  let rightBrack;
  if (isStartIncluded) leftBrack = '['; else leftBrack = '(';
  if (isEndIncluded) rightBrack = ']'; else rightBrack = ')';
  return leftBrack.concat(first, ', ', second, rightBrack);
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return parseInt(String(num).split('').reverse().join(''), 10);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(test) {
  let s = 0;
  let digit = 0;
  let doubleDigit = true;
  const ccn = String(test);

  for (let i = ccn.length - 2; i >= 0; i -= 1) {
    if (doubleDigit) {
      digit = Number(ccn[i]) * 2;
      if (digit >= 10) digit = 1 + (digit % 10);
    } else digit = Number(ccn[i]);
    doubleDigit = !doubleDigit;
    s += digit;
  }
  return (((10 - (s % 10)) % 10) === (Number(ccn[ccn.length - 1])));
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let sum = num;
  do {
    sum = String(sum).split('').reduce((akk, value) => (akk - (-value)), 0);
  } while (sum > 9);
  return sum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const a1 = '[]';
  const a2 = '{}';
  const a3 = '<>';
  const a4 = '()';
  let lenold = str.length + 1;
  let tmp = str;
  while (lenold > tmp.length) {
    lenold = tmp.length;
    tmp = tmp.replace(a1, '');
    tmp = tmp.replace(a2, '');
    tmp = tmp.replace(a3, '');
    tmp = tmp.replace(a4, '');
  }
  if (tmp.length > 0) return false;
  return true;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  let val = num;
  let str = '';
  let maxStepenVal = 1;
  let maxStepen = 0;
  let ostatok = '';
  while (maxStepenVal <= num) {
    maxStepenVal *= n;
    maxStepen += 1;
  }
  if (maxStepenVal > num) {
    maxStepen -= 1;
    maxStepenVal /= n;
  }
  for (let i = maxStepen; i > 0; i -= 1) {
    ostatok = val % maxStepenVal;
    str += (val - ostatok) / maxStepenVal;
    val = ostatok;
    maxStepenVal /= n;
  }
  return str + ostatok;
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const newarr = pathes.map((item) => (item.split('/')));
  let res = '';
  for (let j = 0; j < newarr[0].length; j += 1) {
    const tmp = newarr[0][j];
    for (let i = 1; i < newarr.length; i += 1) {
      if (tmp !== newarr[i][j]) {
        if (j !== 0 && res[res.length - 1] !== '/') return res.concat('/');
        return (res);
      }
    }
    if (res.length === 0) res = res.concat('/'); else
    if (res[res.length - 1] !== '/') res = res.concat('/');
    res = res.concat(tmp);
  }
  return res;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const c = new Array(m1.length);
  if (m1.length > 1) {
    for (let k = 0; k < m2[0].length; k += 1) { // идем по строкам второго массива
      const tmp = new Array(m2.length); // создаем  подмассив равный m1 x
      tmp.fill(0);
      c[k] = tmp;
      for (let j = 0; j < m2[0].length; j += 1) {
        for (let i = 0; i < m1.length; i += 1) {
          if (m1[i][k] !== undefined && m2[k][j] !== undefined && c[k][j] !== undefined) {
            c[k][j] += m1[i][k] * m2[k][j];
          }
        }
      }
    }
  } else {
    const tmp = new Array(m1.length);
    tmp.fill(0);
    c[0] = tmp;
    for (let j = 0; j < m2.length; j += 1) {
      for (let i = 0; i < m1.length; i += 1) {
        c[0][0] += m1[0][j] * m2[j][0];
      }
    }
  }
  return c;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  function twoFromThree(v1, v2, v3, val) {
    let n = 0;
    if (v1 === val) n += 1;
    if (v2 === val) n += 1;
    if (v3 === val) n += 1;
    if ((n === 2) && (v1 === undefined || v2 === undefined || v3 === undefined)) return true;
    return false;
  }

  function checkWinnerHorizontal(desc, val) {
    if ((desc[0][0] === val) && (desc[0][1] === val) && (desc[0][2] === val)) return true;
    if ((desc[1][0] === val) && (desc[1][1] === val) && (desc[1][2] === val)) return true;
    if ((desc[2][0] === val) && (desc[2][1] === val) && (desc[2][2] === val)) return true;
    return false;
  }

  function checkWinnerVertical(desc, val) {
    if ((desc[0][0] === val) && (desc[1][0] === val) && (desc[2][0] === val)) return true;
    if ((desc[0][1] === val) && (desc[1][1] === val) && (desc[2][1] === val)) return true;
    if ((desc[0][2] === val) && (desc[1][2] === val) && (desc[2][2] === val)) return true;
    return false;
  }
  function checkWinnerDiagonals(desc, val) {
    if ((desc[0][0] === val) && (desc[1][1] === val) && (desc[2][2] === val)) return true;
    if ((desc[0][2] === val) && (desc[1][1] === val) && (desc[2][0] === val)) return true;
    return false;
  }
  function checkWinner(desc, val) {
    if (checkWinnerHorizontal(desc, val)) return true;
    if (checkWinnerVertical(desc, val)) return true;
    if (checkWinnerDiagonals(desc, val)) return true;
    return false;
  }

  function checkWinner2(desc, val) {
    let n = 0;
    if (twoFromThree(desc[0][0], desc[0][1], desc[0][3], val)) n += 1;
    if (twoFromThree(desc[1][0], desc[1][1], desc[1][3], val)) n += 1;
    if (twoFromThree(desc[2][0], desc[2][1], desc[2][3], val)) n += 1;
    if (n === 2) return true;

    n = 0;
    if (twoFromThree(desc[0][0], desc[1][0], desc[2][0], val)) n += 1;
    if (twoFromThree(desc[0][1], desc[1][1], desc[2][1], val)) n += 1;
    if (twoFromThree(desc[0][2], desc[1][2], desc[2][2], val)) n += 1;
    if (n === 2) return true;
    return false;
  }

  const desc = position;
  if (checkWinner(desc, 'X')) return 'X';
  if (checkWinner(desc, '0')) return '0';
  if (checkWinner2(desc, 'X')) return 'X';
  if (checkWinner2(desc, '0')) return '0';
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
