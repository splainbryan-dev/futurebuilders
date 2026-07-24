import { ELECTRICIAN_COURSE } from './electricianCourse';

// Add more trades here as their courses get built.
export const COURSES = {
  electrician: ELECTRICIAN_COURSE,
};

export function getCourse(tradeId) {
  return COURSES[tradeId] || null;
}