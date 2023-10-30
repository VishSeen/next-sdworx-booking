'use client'

import { FunctionComponent } from "react"
import StyledForm from "./style";
import { Formik, useFormik } from "formik";
import config from '../../../config.json';

const FormBooking: FunctionComponent = () => {
    // const formik = useFormik({
    //     initialValues: {}
    // });

    return (
        <StyledForm>
            <h3>
                Book your seats now.
            </h3>

            <form action="">
                <label htmlFor="">
                    Team Selection
                </label>

                {/* <div className="team-select">
                    <Select defaultValue={10}>
                        {
                            config?.data?.teams.map((item, i) => (
                                <Option key={i} value={item}>{item}</Option>
                            ))
                        }
                    </Select>
                </div> */}

            </form>
        </StyledForm>
    )
}

export default FormBooking;