/* eslint-disable*/
import { atom , selector } from "recoil";

export const networkAtom = atom({
    key : "network",
    default : 102
});

export const jobsAtom = atom({
    key : "jobsAtom",
    default : 0
});

export const notificationsAtom = atom({
    key : "notificationsAtom",
    default : 12
});

export const messagingAtom = atom({
    key : "messagingAtom",
    default : 0
});

export const totalNotificationSelector = selector({
    key : "totalNotificationsCount",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount= get(messagingAtom);
        const jobsAtomCount = get(jobsAtom); 
        return networkAtomCount + notificationsAtomCount + messagingAtomCount + jobsAtomCount;
    }
});