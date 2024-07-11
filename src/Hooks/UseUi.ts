import { toggleMinimizeSidebar, toggleSidebar } from "../Redux/Slices/UiSlice";
import { UiSliceType } from "../Types/Ui";
import { useDispatch, useSelector } from "react-redux";

export default function useUi() {
  const { showSidebar, minimizeSidebar } = useSelector(
    ({ ui }: { ui: UiSliceType }) => {
      return ui;
    }
  );
  const dispatch = useDispatch();

  return {
    showSidebar,
    minimizeSidebar,
    toggleSidebar: () => {
      return dispatch(toggleSidebar());
    },
    toggleMinimizeSidebar: () => {
      return dispatch(toggleMinimizeSidebar());
    },
  };
}
