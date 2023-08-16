import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface RadioStore {
  activeKey: number;
  changeActiveKey: (key: number) => void;
}

const useRadioStore = create<RadioStore>()(
  devtools((set) => ({
    activeKey: 0,
    changeActiveKey: (key) => {
      set(() => ({ activeKey: key }));
    },
  }))
);

export default useRadioStore;
