import logo from './logo.svg';
import './App.css';
import { students } from './data/data';
import StudentList from './components/StudentList';


function App() {

  return (
    <>
   <div>
   <StudentList students={students}/>
   </div>
   </>
  );
}

export default App;
