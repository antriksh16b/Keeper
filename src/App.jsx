import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import { details } from "./details";
import "./styles.css";
const arrayOfNotes = (value) => (
  <Note key={value.id} title={value.title} content={value.content}></Note>
);
export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="notes">{details.map(arrayOfNotes)}</div>
      <Footer></Footer>
    </div>
  );
}
