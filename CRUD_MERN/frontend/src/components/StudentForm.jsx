import { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Paper, Typography } from "@mui/material";

const StudentForm = ({ refreshData }) => {
    const [student, setStudent] = useState({ name: "", age: "", course: "" });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/students", student);
        refreshData();
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
                <Typography variant="h5" gutterBottom>Add Student</Typography>
                <TextField fullWidth label="Name" name="name" variant="outlined" margin="normal"
                    onChange={handleChange} required />
                <TextField fullWidth label="Age" name="age" variant="outlined" margin="normal" type="number"
                    onChange={handleChange} required />
                <TextField fullWidth label="Course" name="course" variant="outlined" margin="normal"
                    onChange={handleChange} required />
                <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}
                    onClick={handleSubmit}>
                    Add Student
                </Button>
            </Paper>
        </Container>
    );
};

export default StudentForm;
