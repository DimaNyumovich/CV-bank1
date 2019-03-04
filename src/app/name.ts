export class Name {
  constructor(
    public firstName: string,
    public lastName: string
  ){}
}

export class Contact {
  constructor(
    public residence: string,
    public birthday: string,
    public phone: number,
    public email: string
  ){}
}

export class Experience {
  constructor(
    public position: string,
    public years: number,
    public totalYears: number
  ){}
}

export class Skill {
  constructor(
    public display: string,
    public value: string){}
}



