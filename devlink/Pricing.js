import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Pricing.module.css";

export function Pricing({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "walsh-container")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "divider-block")}
        tag="div"
      />
      <_Builtin.Grid
        className={_utils.cx(_styles, "walsh-main-grid-no-gap")}
        tag="div"
      >
        <_Builtin.Block
          id={_utils.cx(
            _styles,
            "w-node-_8e8a6192-24b9-8205-feab-b93130893367-30893364"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "walsh-full-image")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6df777b3c487c2a8f2249_image-woman-eyes-closed.jpg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "walsh-pricing-card-block-featured")}
          id={_utils.cx(
            _styles,
            "w-node-_8e8a6192-24b9-8205-feab-b93130893369-30893364"
          )}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "walsh-heading-small-alt")}
            tag="h3"
          >
            {"It's FREE"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-price-wrapper")}
            tag="div"
          >
            <_Builtin.Paragraph className={_utils.cx(_styles, "walsh-price")}>
              <_Builtin.Span className={_utils.cx(_styles, "text-span")}>
                {"$2.99"}
              </_Builtin.Span>
              {""}
              <_Builtin.Span
                className={_utils.cx(_styles, "walsh-price-small")}
              >
                {"/mo"}
              </_Builtin.Span>
            </_Builtin.Paragraph>
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-text-grey")}
              tag="div"
            >
              <_Builtin.Strong>
                {"*it's free because we love <3 Webflow Community"}
              </_Builtin.Strong>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-list-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-list-flex")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "walsh-circle-check")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "walsh-icon-check")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/undefined_icon-check.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block tag="div">{"Unlimited projects"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-list-flex")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "walsh-circle-check")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "walsh-icon-check")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/undefined_icon-check.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block tag="div">{"SEOBoost!"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-list-flex")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "walsh-circle-check")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "walsh-icon-check")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/undefined_icon-check.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block tag="div">{"Tags included"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-list-flex-off")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "walsh-circle-check-off")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "walsh-icon-check")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/undefined_icon-check.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block tag="div">{"Other platforms"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "walsh-button-orange")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Submit a Project"}</_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Grid>
      <_Builtin.Block
        className={_utils.cx(_styles, "divider-block")}
        tag="div"
      />
    </_Component>
  );
}
