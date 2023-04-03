import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const userLink = "http://localhost:3000/api/user"

export const getStudent = createAsyncThunk(
    "students/getStudent",
    async (studentId) => {
        const { data } = await axios.get(`/students/${studentId}`);
        return data;
    }
);

export const getStudents = createAsyncThunk(
    "students/getStudents",
    async () => {
        const { data } = await axios.get(`${userLink}/register`);
        return data;
    }
);

export const createUser = createAsyncThunk(
    "user/createUser",
    async (user) => {
        
        const { data } = await axios.post(`${userLink}/register`, user);
        console.log("This is User",user)
        return data;
    }
);

export const updateStudent = createAsyncThunk(
    "students/updateStudent",
    async ({ id, ...rest }) => {
        const { data } = await axios.put(`/students/${id}`, rest);
        return data;
    }
);

export const removeStudent = createAsyncThunk(
    "students/removeStudent",
    async (studentId) => {
        await axios.delete(`/students/${studentId}`);
        return studentId;
    }
);

export const uploadDocument = createAsyncThunk(
    "user/uploaddocument",
    async ({ id, document }) => {
        const { data } = await axios.post(`/document/${id}`, document);
        return data;
    }
);



