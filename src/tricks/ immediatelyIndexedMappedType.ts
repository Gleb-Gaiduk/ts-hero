// Example 1
type Fruit = "apple" | "banana" | "orange";
/**
 * | {
 *   thisFruit: 'apple';
 *   allFruit: 'apple' | 'banana' | 'orange';
 * }
 * | {
 *   thisFruit: 'banana';
 *   allFruit: 'apple' | 'banana' | 'orange';
 * }
 * | {
 *   thisFruit: 'orange';
 *   allFruit: 'apple' | 'banana' | 'orange';
 * }
 */
type ResultA = {
  [K in Fruit]: {
    thisFruit: K;
    allFruit: Fruit;
  };
}[Fruit];

// Example 2
type CSSUnits = "px" | "em" | "rem" | "vw" | "vh";
/**
 * | {
 *   length: number;
 *   unit: 'px';
 * }
 * | {
 *   length: number;
 *   unit: 'em';
 * }
 * | {
 *   length: number;
 *   unit: 'rem';
 * }
 * | {
 *   length: number;
 *   unit: 'vw';
 * }
 * | {
 *   length: number;
 *   unit: 'vh';
 * }
 */

type UnitsMap = {
  [K in CSSUnits]: {
    length: number;
    unit: K;
  };
}[CSSUnits];

// Example 3
type SuccessResponseCode = 200;
type ErrorResponseCode = 400 | 500;

type ResponseCode = SuccessResponseCode | ErrorResponseCode;
/**
 * | {
 *   code: 200;
 *   body: {
 *     success: true;
 *   };
 * }
 * | {
 *   code: 400;
 *   body: {
 *     success: false;
 *     error: string;
 *   };
 * }
 * | {
 *   code: 500;
 *   body: {
 *     success: false;
 *     error: string;
 *   };
 * }
 */

type ResponseCodeMap = {
  [K in ResponseCode]: {
    code: K;
    body: K extends SuccessResponseCode
      ? { success: true }
      : {
          success: false;
          error: string;
        };
  };
}[ResponseCode];
