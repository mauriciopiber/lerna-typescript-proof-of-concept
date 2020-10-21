import { IMathOp, IMathRes } from '@ts-lerna/types/src/Math';

export const MathOperation = (math: IMathOp) : IMathRes => {
  const result: number = math.operator1 + math.operator2;

  return {
    result,
  }
}
