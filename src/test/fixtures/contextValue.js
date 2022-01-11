import { types } from "../../types/types";

export const contextValueFalse = {
    dispatch: jest.fn(),
    user:{
        logged: false,
    }
};
export const contextValueTrue = {
    dispatch: jest.fn(),
    user:{
        name:"Pedro",
        logged: true,
    }
};