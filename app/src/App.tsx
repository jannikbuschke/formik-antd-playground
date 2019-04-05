import * as React from "react";
import "./App.css";
import { Formik } from "formik";
import {
  InputField,
  CheckboxField,
  FormikDebug,
  FormItem
} from "@jbuschke/formik-antd";

function App() {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", newsletter: true }}
      onSubmit={values => console.log("submit", values)}
    >
      <div style={{ display: "grid", gridGap: 10, maxWidth: 500, margin: 50 }}>
        <div style={{ display: "grid", gridGap: 10 }}>
          <FormItem label="Firstname" name="firstName">
            <InputField name="firstName" />
          </FormItem>
          <FormItem label="Lastname" name="lastName">
            <InputField name="lastName" />
          </FormItem>
          <FormItem label="Newsletter" name="newsletter">
            <CheckboxField name="newsletter">newsletter</CheckboxField>
          </FormItem>
        </div>
        <FormikDebug />
      </div>
    </Formik>
  );
}

export default App;
