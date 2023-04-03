import { createReducer } from "@reduxjs/toolkit";
import { createUser } from "../Action/userApiAction";


const initialState = {
    user: [],
};

const userReducer = createReducer(initialState, (builder) => {
    builder
        // .addCase(getStudents.fulfilled, (state, action) => {
        //     state.students = action.payload.data;
        // })
        .addCase(createUser.fulfilled, (state, action) => {
            state.user = [action.payload, ...state.user];
            console.log("Action Payload",action.payload)
        })
        /*
        .addCase(getStudent.fulfilled, (state, action) => {
            state.student = action.payload.data;
        })

        .addCase(updateStudent.fulfilled, (state, action) => {
            state.students = state.students.map((student) =>
                student._id == action.payload.data.id ? action.payload.data : student
            );
        })
        .addCase(removeStudent.fulfilled, (state, action) => {
            state.students = state.students.filter(
                (student) => student._id != action.payload
            );
        });*/
});
export default userReducer;