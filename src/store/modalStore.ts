import { atom } from 'nanostores';

export const isModalOpen = atom(false);

export const openModal = () => isModalOpen.set(true);
export const closeModal = () => isModalOpen.set(false);
