import * as React from "react";
import { Formik } from "formik";
import { SubmitButton, Input, Checkbox, ResetButton, FormikDebug, Form, FormItem } from "@jbuschke/formik-antd";
import { message, Button } from "antd";

function validateRequired(value: string) {
  return value? undefined: "required"
}

export const SampleForm = () => {
  return <div style={{ marginTop: 80, maxWidth: 700, marginRight: "auto", marginLeft: "auto" }}>
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "", newsletter: false }}
      onSubmit={(values, actions) => {
        message.info(JSON.stringify(values, null, 4));
        actions.setSubmitting(false);
        actions.resetForm();
      }}
      validate={values => {
        if (!values.lastName) {
          return { lastName: "required" }
        }
        return {}
      }}
      render={() => <Form style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <Button.Group style={{ marginBottom: 20 }}>
            <ResetButton>Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </Button.Group>

          <FormItem name="firstName" label="Firstname" required={true} validate={validateRequired} >
            <Input name="firstName" placeholder="Firstname"  />
          </FormItem>
          <FormItem name="lastName" label="Lastname" required={true} >
            <Input name="lastName" placeholder="Lastname" />
          </FormItem>
          <FormItem name="email" label="Email">
            <Input name="email" placeholder="Email" />
          </FormItem>
          <FormItem name="password" label="Password" >
            <Input.Password name="password" placeholder="Password" />
          </FormItem>
          <FormItem name="newsletter">
            <Checkbox name="newsletter">Newsletter</Checkbox>
          </FormItem>
        </div>
        <FormikDebug />
      </Form>
      } />
  </div>
}