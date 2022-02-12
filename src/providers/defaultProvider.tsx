import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { Tabs } from '../models/tabs';

type DefaultContextData = {
  currentTab: Tabs;
  setCurrentTab: Dispatch<SetStateAction<Tabs>>;
};

type DefaultProviderProps = {
  children?: ReactNode;
};

export const DefaultContext = createContext<DefaultContextData>(
  {} as DefaultContextData
);

export function DefaultProvider({ children }: DefaultProviderProps) {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.Home);

  return (
    <DefaultContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </DefaultContext.Provider>
  );
}
