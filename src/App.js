import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';
import { studentData } from './data/data';

function App() {
  return (
   <>
   <StudentList student={studentData}/>
   </>
  );
}

export default App;
