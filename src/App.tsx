import { faker } from "@faker-js/faker";
const words = faker.word.words(30);

const App = () => {
  return (
    <>
      <h1 className="text-4xl mt-2 rounded-[5px] border-2 border-solid border-[auto] text-[#ff004f] p-3 font-poppins">Senn.Clicckk</h1>
      {/* <div className="text-3xl text-slate-600 ">{words}</div> */}
      <CountdownTimer timeLeft={30} />
      <GeneratedWords words={words} />
    </>
  );
};

const GeneratedWords = ({words}: {words: string}) => {
  return <div className="text-2xl text-center text-slate-500">
    {words}
  </div>
}

const CountdownTimer = ({timeLeft} : {timeLeft: number}) => {
  return <h2 className="text-teal-300 font-medium text-center text-2xl">Time: {timeLeft}</h2>
}



export default App;
