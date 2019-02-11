import {Name, Experience, Contact} from './name';


export class Person {
  constructor(
    public id: number | null,
    public name: Name,
    public experience: Experience,
    public contact: Contact,
    public description: string,
    public minSalary: number,
    public maxSalary: number,
    // public skills: Skill[]
    public skills: {}
  ) {}

}
