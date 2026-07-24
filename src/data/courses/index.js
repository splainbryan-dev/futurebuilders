import { ELECTRICIAN_COURSE } from './electricianCourse';
import { CHEF_COURSE } from './chefCourse';
import { CARPENTER_COURSE } from './carpenterCourse';
import { PLUMBER_COURSE } from './plumberCourse';
import { MECHANIC_COURSE } from './mechanicCourse';
import { FARMER_COURSE } from './farmerCourse';
import { NURSE_COURSE } from './nurseCourse';
import { FIREFIGHTER_COURSE } from './firefighterCourse';
import { ARTIST_COURSE } from './artistCourse';
import { PROGRAMMER_COURSE } from './programmerCourse';
import { PASTOR_COURSE } from './pastorCourse';
import { AI_COURSE } from './aiCourse';

export const COURSES = {
  electrician: ELECTRICIAN_COURSE,
  chef: CHEF_COURSE,
  carpenter: CARPENTER_COURSE,
  plumber: PLUMBER_COURSE,
  mechanic: MECHANIC_COURSE,
  farmer: FARMER_COURSE,
  nurse: NURSE_COURSE,
  firefighter: FIREFIGHTER_COURSE,
  artist: ARTIST_COURSE,
  programmer: PROGRAMMER_COURSE,
  pastor: PASTOR_COURSE,
  ai: AI_COURSE,
};

export function getCourse(tradeId) {
  return COURSES[tradeId] || null;
}
