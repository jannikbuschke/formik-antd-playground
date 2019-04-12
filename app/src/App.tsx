import * as React from "react";
import { render } from "react-dom";
import {
  CheckboxField,
  InputField,
  InputPasswordField,
  InputNumberField,
  SwitchField,
  TextAreaField,
  DatePickerField,
  RadioGroupField,
  FormikDebug,
  FormItem,
  ResetButton,
  SubmitButton,
  CheckboxGroupField,
  SelectField
} from "@jbuschke/formik-antd";
import { Formik } from "formik";
import { Divider, Button, message, notification, Form, Radio } from "antd";
import "./App.css";
import "antd/dist/antd.css";
import { Header } from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Formik
        initialValues={{
          userName: "",
          email: "sample@email.com",
          website: "github.com/jannikbuschke/formik-antd",
          password: "hidden",
          index: 5,
          dollars: 1,
          applyForNewsletter: false,
          description: "lorem ipsum",
          date: null
        }}
        onSubmit={(values, actions) => {
          notification.open({
            duration: 0,
            message: <pre>{JSON.stringify(values, null, 2)}</pre>
          });
          actions.setSubmitting(false);
        }}
        validate={values => {
          return !values.userName
            ? {
                userName: "required"
              }
            : undefined;
        }}
      >
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 800,
            gridTemplateColumns: "1fr 1fr"
          }}
        >
          <div
            style={{
              display: "grid",
              gridGap: 5,
              margin: 5,
              height: "100%"
            }}
          >
            <Button.Group>
              <ResetButton>Reset</ResetButton>
              <SubmitButton>Submit (when dirty & valid)</SubmitButton>
              <SubmitButton disabled={false}>Submit</SubmitButton>
            </Button.Group>
            <InputField name="email" />
            <FormItem name="userName">
              <InputField name="userName" />
            </FormItem>
            <InputField name="items[0]name" />
            <InputField name="website" addonBefore="https://" />
            <InputPasswordField name="password" />
            <TextAreaField name="description" />
            <InputNumberField name="index" />
            <InputNumberField
              name="dollars"
              formatter={(value: any) => `$ ${value}`}
            />
            <CheckboxField name="applyForNewsletter">Newsletter</CheckboxField>
            <div>
              <SwitchField name="applyForNewsletter" />
            </div>
            <DatePickerField name="date" />
            <RadioGroupField
              name="radioGroup"
              options={[
                { label: "item 1", value: "1" },
                { label: "item 2", value: 2 },
                { label: "item 3", value: "2" }
              ]}
            />
            <CheckboxGroupField
              name="checkboxGroup"
              options={[
                { label: "item 1", value: "1" },
                { label: "item 2", value: "2" },
                { label: "item 3", value: "3" }
              ]}
            />
            <SelectField name="select" style={{ width: "100%" }}>
              {SelectField.renderOptions([
                { label: "displayed value", value: 2 },
                {
                  label: <h1>hello world</h1>,
                  value: "123"
                },
                {
                  disabled: true,
                  value: "123",
                  label: "child"
                }
              ])}
            </SelectField>
          </div>

          <FormikDebug style={{ maxWidth: 400 }} />
        </div>
      </Formik>
    </div>
  );
}

export default App;
