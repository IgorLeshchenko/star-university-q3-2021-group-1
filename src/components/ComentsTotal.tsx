
import Coments from "./Coments";
import Coment from "./Coment";
import { useEffect, useState } from "react";

const ComentsTotal: React.FC = () => {
  const [comentArr, setComentArr] = useState<string[]>(
    ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'])//Fetch с сервера

  const itemList: string[] = [...comentArr]

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

export default ComentsTotal;
