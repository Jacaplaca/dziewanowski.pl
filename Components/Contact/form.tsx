import styled, { css } from "styled-components";
import { FunctionComponent } from "react";
import { Input, Button, notification } from "antd";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import submitContactForm from "./submitContactForm";

const { TextArea } = Input;

type FormValues = {
  email: string;
  message: string;
  subject: string;
};

type Props = {};
const Wrapper = styled.section`
  flex: 0;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
  .buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 0px 13px;
  }
`;

const button = css`
  border-radius: 10px;
  font-weight: 500;
  &:hover {
    opacity: 0.8;
  }
`;

const SendButton = styled(Button)`
  ${button};
  background-color: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
  border: none;
  color: ${({ theme }) => theme.colors.palette.scheme1.darkGreen};
  &:hover {
    background-color: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
    color: ${({ theme }) => theme.colors.palette.scheme1.darkGreen};
  }
  &:disabled,
  &:focus {
    background-color: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
    color: ${({ theme }) => theme.colors.palette.scheme1.darkGreen};
    opacity: 0.5;
  }
`;

const SendButtonGhost = styled(Button)`
  ${button};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
  color: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
  &:hover {
    color: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
    border: 1px solid ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
    background-color: transparent;
    /* background-color: ${({ theme }) =>
      theme.colors.palette.scheme1.lightGreen}; */
    /* color: ${({ theme }) => theme.colors.palette.scheme1.darkGreen}; */
  }
`;

const Field = styled.div`
  .error {
    color: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
    font-size: 0.75em;
    height: 15px;
    padding: 0;
    margin: 0;
    padding-left: 10px;
  }
  input,
  .ant-select-selector,
  .ant-input-affix-wrapper,
  textarea {
    border-radius: 10px !important;
    padding: 7px;
  }
  padding-bottom: 10px;
`;

const ContactForm: FunctionComponent<Props> = () => {
  const { t, i18n } = useTranslation("common");

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(t("common:correctEmail"))
      .required(t("common:required")),
    message: yup.string().required(t("common:required")),
  });
  const resolver = yupResolver(validationSchema);

  const defaultValues = { email: "", message: "" };

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver, defaultValues });

  const onSubmit = handleSubmit(async (data) => {
    const sent = await submitContactForm<FormValues>(data, t);
    sent && reset();
  });

  const handleClearForm = () => {
    reset();
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Field>
          <Controller
            control={control}
            name="email"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              <Input
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                placeholder={t("contactEmail")}
              />
            )}
          />

          <p className="error">{errors?.email ? errors.email.message : ""}</p>
        </Field>
        <Field>
          <Controller
            control={control}
            name="message"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              <TextArea
                placeholder={t("contactMessage")}
                allowClear
                onChange={onChange}
                value={value}
                autoSize={{ minRows: 6, maxRows: 6 }}
              />
            )}
          />

          <p className="error">
            {errors?.message ? errors.message.message : ""}
          </p>
        </Field>

        <div className="buttons">
          <SendButtonGhost htmlType="button" onClick={handleClearForm}>
            {t("clearButton")}
          </SendButtonGhost>
          <SendButton htmlType="submit">{t("contactSend")}</SendButton>
        </div>
      </Form>
    </Wrapper>
  );
};
export default ContactForm;
