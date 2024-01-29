import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LogIn.module.css";

export function LogIn({ as: _Component = _Builtin.BlockContainer }) {
  return (
    <_Component
      className={_utils.cx(_styles, "container")}
      grid={{
        type: "container",
      }}
      tag="div"
    >
      <_Builtin.FormWrapper className={_utils.cx(_styles, "ms-form-block")}>
        <_Builtin.FormForm
          className={_utils.cx(_styles, "ms-form")}
          name="wf-form-Login-with-Password-Two"
          data-name="Login with Password Two"
          method="get"
          data-ms-form="login"
          id="wf-form-Login-with-Password-Two"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "ms-form-heading")}
            tag="h2"
          >
            {"Login w/ Password "}
            <br />
            {"or Social Auth"}
          </_Builtin.Heading>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel
              className={_utils.cx(_styles, "ms-input-label")}
              htmlFor="Email-Six-3"
            >
              {"Email Address"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "ms-input")}
              autoFocus={false}
              maxLength={256}
              name="Email-Six-2"
              data-name="Email Six 2"
              placeholder="e.g. howard@gmail.com"
              type="email"
              disabled={false}
              required={true}
              data-ms-member="email"
              id="Email-Six-2"
            />
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel
              className={_utils.cj(
                _utils.cx(_styles, "ms-input-label"),
                "w-clearfix"
              )}
              htmlFor="Password-Six-3"
            >
              {"Password Input "}
              <_Builtin.Link
                className={_utils.cx(_styles, "ms-link", "ms-is-forgot")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Forgot Password"}
              </_Builtin.Link>
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "ms-input")}
              autoFocus={false}
              maxLength={256}
              name="Password-Six-2"
              data-name="Password Six 2"
              placeholder="⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕ ⁕"
              type="password"
              disabled={false}
              required={true}
              data-ms-member="password"
              id="Password-Six-2"
            />
          </_Builtin.Block>
          <_Builtin.FormButton
            className={_utils.cx(_styles, "ms-button", "ms-is-form")}
            type="submit"
            value="Submit"
            data-wait="Please wait..."
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "ms-form-divider")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "ms-form-divider-line")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "ms-form-divider-text")}
              tag="div"
            >
              {"OR"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "ms-form-divider-line")}
              tag="div"
            />
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.Link
              className={_utils.cx(_styles, "ms-social-button")}
              button={false}
              data-ms-auth-provider="google"
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "ms-social-inner",
                  "ms-is-center"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "ms-social-image")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b81bba96307e90bfa82b24_google.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "ms-social-text")}
                  tag="div"
                  data-ms-auth-connected-text="Disconnect Google"
                >
                  {"Continue with Google"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "ms-social-button",
                "ms-is-facebook"
              )}
              button={false}
              data-ms-auth-provider="facebook"
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "ms-social-inner",
                  "ms-is-center"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "ms-social-image")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b81bba96307e90bfa82b25_facebook.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "ms-social-text")}
                  tag="div"
                  data-ms-auth-connected-text="Disconnect Facebook"
                >
                  {"Continue with Facebook"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "ms-space", "ms-is-20")}
            tag="div"
          />
          <_Builtin.Block tag="div">
            {"New here? "}
            <_Builtin.Link
              className={_utils.cx(_styles, "ms-link")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Create an account."}
            </_Builtin.Link>
            {""}
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "ms-button",
              "ms-is-light",
              "ms-is-small",
              "ms-is-documentation"
            )}
            button={false}
            block="inline"
            options={{
              href: "https://docs.memberstack.com/hc/en-us/articles/7785629397659-Create-a-Login-Form-in-Webflow",
              target: "_blank",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "ms-button-flex")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"How This Works"}</_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "ms-button-svg")}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224%22%3E%3Cpath%20d%3D%22M200-120q-33%200-56.5-23.5T120-200v-560q0-33%2023.5-56.5T200-840h240q17%200%2028.5%2011.5T480-800q0%2017-11.5%2028.5T440-760H200v560h560v-240q0-17%2011.5-28.5T800-480q17%200%2028.5%2011.5T840-440v240q0%2033-23.5%2056.5T760-120H200Zm560-584L416-360q-11%2011-28%2011t-28-11q-11-11-11-28t11-28l344-344H600q-17%200-28.5-11.5T560-800q0-17%2011.5-28.5T600-840h240v240q0%2017-11.5%2028.5T800-560q-17%200-28.5-11.5T760-600v-104Z%22%2F%3E%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage>
          <_Builtin.Block tag="div">
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage>
          <_Builtin.Block tag="div">
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
    </_Component>
  );
}
