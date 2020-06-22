import { fstore } from '../services/firebase';

const projectCollection = fstore.collection('projects');

export const fetchProjects = () => {
  return projectCollection.get();
}

export const fetchProject = (name: string) => {
  return projectCollection.where('name', '==', name).get();
}