import React from "react";
import { EmailModalProps } from "./EmailModalProps";
import {
  AiOutlineCloseCircle,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";

import { renderToStaticMarkup } from "react-dom/server";

import { send } from "emailjs-com";

import * as S from "./styles";
import Input from "../Input/Input";
import EmailTemplate from "../EmailTemplate/EmailTemplate";

import { showToastPromise } from "../Toast/Toast";
import { Form, Formik, FormikValues } from "formik";
import { EmailModalSchema } from "../../schemas";

const EmailModal = ({
  id = "modal",
  closeModal,
  selecteds,
  onSubmit,
}: EmailModalProps) => {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === id) {
      closeModal(false);
    }
  };

  const handleSubmit = (values: FormikValues) => {
    const emailPromise = send(
      process.env.REACT_APP_EMAIL_SERVICE as string,
      process.env.REACT_APP_EMAIL_TEMPLATEID as string,
      {
        subject: "Comics",
        name: values.name,
        to_email: values.email,
        message: renderToStaticMarkup(<EmailTemplate selecteds={selecteds} />),
      },
      process.env.REACT_APP_EMAIL_USER_ID
    ).then(() => {
      showToastPromise({
        promiseName: emailPromise,
        successMessage: "Email successfully sent!",
        pendingMessage: "Sending email...",
        errorMessage: "Failed to send email!",
      });
      closeModal(false);
    });
  };

  return (
    <S.Background id={id} onClick={handleOutsideClick}>
      <S.Container>
        <S.CloseButton>
          <AiOutlineCloseCircle
            onClick={() => {
              closeModal(false);
            }}
            size={35}
          />
        </S.CloseButton>

        <Formik
          validationSchema={EmailModalSchema}
          initialValues={{ name: "", email: "" }}
          onSubmit={async (values) => {
            onSubmit && onSubmit(values);

            await handleSubmit(values);
          }}
        >
          {(props) => (
            <S.InputRow>
              <Form onSubmit={props.handleSubmit}>
                <Input
                  data-testid="name"
                  name="name"
                  type="text"
                  label="Name"
                  icon={AiOutlineUser}
                  placeholder="Enter your name"
                  onChange={props.handleChange}
                />
                {props.errors.name && (
                  <S.ErrorText>{props.errors.name}</S.ErrorText>
                )}

                <Input
                  data-testid="email"
                  name="email"
                  type="email"
                  label="E-mail"
                  icon={AiOutlineMail}
                  placeholder="Enter your e-mail"
                  onChange={props.handleChange}
                />
                {props.errors.email && (
                  <S.ErrorText>{props.errors.email}</S.ErrorText>
                )}
                <S.ButtonDiv>
                  <S.Button type="submit">Send</S.Button>
                </S.ButtonDiv>
              </Form>
            </S.InputRow>
          )}
        </Formik>
      </S.Container>
    </S.Background>
  );
};

export default EmailModal;
