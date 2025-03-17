import { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    const fetchData = async () => {
        const res = await axios.get("http://localhost:5000/api/students");
        setStudents(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h2>Student List</h2>
            {students.map((s) => (
                <p key={s._id}>{s.name} - {s.course} ({s.age} years old)</p>
            ))}
        </div>
    );
};

export default StudentList;
