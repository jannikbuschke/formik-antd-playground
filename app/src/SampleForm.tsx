import * as React from "react";
import { Formik } from "formik";
import { SubmitButton, Input, Checkbox, ResetButton, FormikDebug, Form, FormItem } from "@jbuschke/formik-antd";
import { message, Button } from "antd";

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
    >
      <Form style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <Button.Group style={{ marginBottom: 20 }}>
            <ResetButton>Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </Button.Group>

          <FormItem name="firstName" label="Firstname">
            <Input name="firstName" placeholder="Firstname" />
          </FormItem>
          <FormItem name="lastName" label="Lastname">
            <Input name="lastName" placeholder="Lastname" />
          </FormItem>
          <FormItem name="email" label="Email">
            <Input name="email" placeholder="Email" />
          </FormItem>
          <FormItem name="password" label="Password" validateStatus={undefined /* Currently showing validation success is buggy */} >
            <Input.Password name="password" placeholder="Password" />
          </FormItem>
          <FormItem name="newsletter">
            <Checkbox name="newsletter">Newsletter</Checkbox>
          </FormItem>
        </div>
        <FormikDebug />
      </Form>
    </Formik>
  </div>
}