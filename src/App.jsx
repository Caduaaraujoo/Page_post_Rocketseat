import {Post} from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import style from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
    <Sidebar />
    <main>
      <Post
        author="Cadu"
        content="
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente labore at fugiat laudantium, quasi eos exercitationem vel suscipit assumenda, delectus neque mollitia similique quisquam quae non, placeat laboriosam? Fugiat, pariatur."
      />
         <Post
        author="Jose"
        content="
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente labore at fugiat laudantium, quasi eos exercitationem vel suscipit assumenda, delectus neque mollitia similique quisquam quae non, placeat laboriosam? Fugiat, pariatur."
      />
    </main>
      </div>
    </div>
  )
}
