import { atom } from 'jotai';

export type Company = {
  id: string;
  companyName: string;
  companyDescription: string;
  companyImage: string;
  services: string[];
  contact: {
    name: string;
    email: string;
    message: string;
  };
};

export const companiesAtom = atom<Company[]>([]);

export type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
};

export const contactsAtom = atom<Contact[]>([]);