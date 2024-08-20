/* eslint-disable*/
// import { useState } from 'react'
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil';
import {jobsAtom , messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector} from './atoms';

function App() {
  return(
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {

  const networkNotificationsCount = useRecoilValue(networkAtom);
  const messagingNotificationsCount = useRecoilValue(messagingAtom);
  const jobsNotificationsCount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const totalNotificationsCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button> My Network ({networkNotificationsCount >= 100 ? "99+" : networkNotificationsCount}) </button>

      <button> Notifications {notificationsCount}</button>

      <button> Messages {messagingNotificationsCount}</button>

      <button> Jobs {jobsNotificationsCount}</button>

      <button> Me {totalNotificationsCount}</button>
    </div>
  )
}

export default App
