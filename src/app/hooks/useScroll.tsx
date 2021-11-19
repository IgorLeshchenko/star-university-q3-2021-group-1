import { useEffect } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";

import { fetchingAction } from "../../app/store/fetchingSlice";

const useScroll = () => {
  const time = 1000;
  const dispatch = useDispatch();

  const render = () => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      300
    ) {
      dispatch(fetchingAction.setFetching());
    }
  };

  useEffect(() => {
    const delay = _.debounce(render, time);
    window.addEventListener("scroll", delay);
    return () => {
      window.removeEventListener("scroll", delay);
    };
  }, []);
};

export default useScroll;
