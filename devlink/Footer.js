import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "walsh-content-wrapper-white")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "walsh-container")}
        tag="div"
      >
        <_Builtin.Grid
          className={_utils.cx(_styles, "walsh-main-grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-center-h-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-b893c38f-9f34-c14b-4fb2-8d844713bbc8-4713bbc5"
            )}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "walsh-brand-block", "green")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block")}
                tag="div"
              >
                {"Built-on-Webflow"}
              </_Builtin.Block>
            </_Builtin.NavbarBrand>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-footer-inner")}
            id={_utils.cx(
              _styles,
              "w-node-b893c38f-9f34-c14b-4fb2-8d844713bbcc-4713bbc5"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-footer-legal-text")}
              tag="div"
            >
              {"© 2024 Built-on-Webflow., All Rights reserved"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-footer-legal-text")}
              tag="div"
            >
              {"Designed by "}
              <_Builtin.Link
                className={_utils.cx(_styles, "walsh-footer-legal-link")}
                button={false}
                block=""
                options={{
                  href: "#",
                  preload: "none",
                }}
              >
                {"JP"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-footer-inner")}
            id={_utils.cx(
              _styles,
              "w-node-b893c38f-9f34-c14b-4fb2-8d844713bbd3-4713bbc5"
            )}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "walsh-footer-grid-social")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "walsh-footer-link-social")}
                id={_utils.cx(
                  _styles,
                  "w-node-b893c38f-9f34-c14b-4fb2-8d844713bbd5-4713bbc5"
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "walsh-icon-social")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6e18925cc1be731b20102_instagram-icon.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "walsh-footer-link-social")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "walsh-icon-social")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6e18925cc1be731b200fe_facebook-icon.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "walsh-footer-link-social")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "walsh-icon-social")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6e18925cc1be731b20101_linkedin-icon.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "walsh-footer-link-social")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "walsh-icon-social")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6e18925cc1be731b200ff_twitter-icon.svg"
                />
              </_Builtin.Link>
            </_Builtin.Grid>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-footer-inner-menu")}
            id={_utils.cx(
              _styles,
              "w-node-b893c38f-9f34-c14b-4fb2-8d844713bbdd-4713bbc5"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "walsh-footer-link-center")}
              button={false}
              block=""
              options={{
                href: "#",
                preload: "none",
              }}
            >
              {"Team Members"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "walsh-footer-link-center")}
              button={false}
              block=""
              options={{
                href: "#",
                preload: "none",
              }}
            >
              {"Contact"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
