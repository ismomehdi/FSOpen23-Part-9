interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

interface CoursePartDescription extends CoursePartBase {
    description: string;
}

interface CoursePartSpecial extends CoursePartDescription {
    requirements: string[];
    kind: "special"
}

interface CoursePartBasic extends CoursePartDescription {
    kind: "basic"
}
  
interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
}
  
interface CoursePartBackground extends CoursePartDescription {
    backgroundMaterial: string;
    kind: "background"
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;  

export interface CourseProps {
    courses: CoursePart[];
}

export interface PartProps {
    part: CoursePart;
}

export const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };
  
