/* eslint-disable */
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CountContext } from '../../7.1/src/Context';
import {countAtom, evenSelector} from "./store/atoms/count";

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
};


function Count() {
  console.log("re-render");
  return <div>
    <CountRerender />
    <Buttons />
  </div>
};

function CountRerender() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <b>
        {count}
      </b>
      <EventCountRenderer />
    </div>
  )
};

function EventCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "is even" : null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(evenSelector);
  console.log("buttons re-rendered");

  return (
    <div>
      <button onClick={() => {
        setCount(count => count+1);
      }}>
        Increase
      </button>

      <button onClick={() => {
        setCount(count => count-1);
      }}>
        Deccrease
      </button>
    </div>
  )
}


export default App
