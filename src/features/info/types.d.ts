declare module 'models' {
  export interface IAbout {
    intro: string;
    skills: string[];
  }

  type Social = {
    url: string;
    icon: string;
    name: string;
  }

  export interface ISocial { [key: string]: Social }

}