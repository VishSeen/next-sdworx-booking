'use client'

import { FunctionComponent } from "react"
import StyledForm from "./style";
import { Formik } from "formik";
import { Inputs } from "@/types/type";
import config from '../../../config.json';



const FormBooking: FunctionComponent = () => {
    return (
        <StyledForm>
            <h3>
                Book your seats now.
            </h3>

            <form action="">
                <label htmlFor="">
                    Team Selection
                </label>
                <select
                    id="team select"
                    name="team"
                    onChange={() => console.log("hello")}
                >
                    {
                        config?.data?.teams.map((item, i) => (
                            <option key={i} value={item}>{item}</option>
                        ))
                    }
                </select>
            </form>
        </StyledForm>
    )
}

export default FormBooking;