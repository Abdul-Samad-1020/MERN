import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
    return (
        <div>
            <h1>CRUD App with MERN</h1>
            <StudentForm refreshData={() => window.location.reload()} />
            <StudentList />
        </div>
    );
}

export default App;
