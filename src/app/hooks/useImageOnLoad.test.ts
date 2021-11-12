import { act, renderHook } from "@testing-library/react-hooks";
import useImageOnLoad from "./useImageOnLoad";

describe("useImageOnLoad", () => {
  const { result } = renderHook(() => useImageOnLoad());

  act(() => {
    result.current.handleImageOnLoad();
  });

  test("when image onload", () => {
    expect(result.current.css).toMatchObject({
      thumbnail: {
        visibility: "hidden",
        filter: "blur(8px)",
        transition: "visibility 0ms ease-out 500ms",
      },
      fullSize: {
        opacity: 1,
        transition: "opacity 500ms ease-in 0ms",
      },
    });
  });
});
