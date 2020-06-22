declare module 'models' {
  export type Media = {
    src: string;
    type: string;
  }
  export interface IProject {
    index: number;
    name: string;
    overview: string;
    role: string;
    client: string;
    date: string;
    stacks: string;
    github?: string;
    demo: string;
    examples: Media[];
    thumbnail: string;
  }
}