
import "./App.css";
import Coments from "./components/Coments";
import Coment from "./components/Coment";
import { useEffect, useState } from "react";

function App() {
  const [comentArr, setComentArr] = useState<string[]>([])//Fetch с сервера

const itemList:string[]=[...comentArr]

  function addNewMessege(message: string): void {
    itemList.push(message)
    setComentArr(itemList)
  }

  useEffect(() => {
    //Post запрос на сервер
  }, [itemList])

  return (
    <div className="App">
      <Coments message={addNewMessege} />
      <Coment items={comentArr} />
    </div>
  );
}

export default App;
