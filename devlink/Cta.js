import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Cta.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main"],"target":{"selector":".walsh-link-block-orange","originalId":"634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882","appliesTo":"CLASS"},"targets":[{"selector":".walsh-link-block-orange","originalId":"634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666312770566},"e-2":{"id":"e-2","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["main"],"target":{"selector":".walsh-link-block-orange","originalId":"634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882","appliesTo":"CLASS"},"targets":[{"selector":".walsh-link-block-orange","originalId":"634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666312770566},"e-3":{"id":"e-3","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main"],"target":{"id":"a5623fd6-8a37-2962-b741-570d8627cc3f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a5623fd6-8a37-2962-b741-570d8627cc3f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666825223098},"e-4":{"id":"e-4","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main"],"target":{"id":"a5623fd6-8a37-2962-b741-570d8627cc3f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a5623fd6-8a37-2962-b741-570d8627cc3f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666825223098},"e-5":{"id":"e-5","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7d602ec-578b-15eb-6410-1d467ed17a34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7d602ec-578b-15eb-6410-1d467ed17a34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666822921993},"e-6":{"id":"e-6","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7d602ec-578b-15eb-6410-1d467ed17a34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7d602ec-578b-15eb-6410-1d467ed17a34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666822921993}},"actionLists":{"a":{"id":"a","title":"Button Default - Hover On","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutExpo","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".walsh-button-hover-fill","selectorGuids":["e86b47f9-02f9-0208-401e-d1438a6e9734"]},"xValue":3.8,"yValue":3.8,"locked":true}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".walsh-button-hover-fill","selectorGuids":["e86b47f9-02f9-0208-401e-d1438a6e9734"]},"xValue":180,"yValue":80,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"inOutExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".walsh-icon-arrow-flip","selectorGuids":["e86b47f9-02f9-0208-401e-d1438a6e9735"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":300,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".walsh-label-button","selectorGuids":["e86b47f9-02f9-0208-401e-d1438a6e9737"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1661474026364},"a-2":{"id":"a-2","title":"Button Default - Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".walsh-button-hover-fill","selectorGuids":["e86b47f9-02f9-0208-401e-d1438a6e9734"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".walsh-button-hover-fill","selectorGuids":["e86b47f9-02f9-0208-401e-d1438a6e9734"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-2-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":250,"easing":"outQuart","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".walsh-label-button","selectorGuids":["e86b47f9-02f9-0208-401e-d1438a6e9737"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outQuart","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".walsh-icon-arrow-flip","selectorGuids":["e86b47f9-02f9-0208-401e-d1438a6e9735"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1661474026364}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Cta({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "walsh-container")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "divider-block")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "walsh-cta-block-light-green")}
        tag="div"
      >
        <_Builtin.Grid
          className={_utils.cx(_styles, "walsh-main-grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-content-wrapper-gap")}
            id={_utils.cx(
              _styles,
              "w-node-e7d602ec-578b-15eb-6410-1d467ed17a2b-7ed17a27"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "walsh-heading-medium")}
              tag="h2"
            >
              <_Builtin.Strong>
                {"Don’t Keep Your Webflow Masterpieces Hidden."}
                <br />
                {"Share Them with the World"}
              </_Builtin.Strong>
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "walsh-paragraph")}
            >
              {
                "The Easiest Way to Display Your Webflow Project to Thousands of Visitors"
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-cta-v-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-e7d602ec-578b-15eb-6410-1d467ed17a33-7ed17a27"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "walsh-link-block-orange")}
              data-w-id="e7d602ec-578b-15eb-6410-1d467ed17a34"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "walsh-button-label-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-label-button")}
                  tag="div"
                >
                  {"Submit a Project"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-arrow-wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "walsh-icon-arrow-flip")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6d0a3f8befd8766a10634_icon-arrow-right-white.svg"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "walsh-icon-arrow-flip")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6d0a3f8befd8766a10634_icon-arrow-right-white.svg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "walsh-button-hover-fill")}
                tag="div"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "walsh-link-block-outline")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "walsh-button-label-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-label-button")}
                  tag="div"
                >
                  {"Explore Projects"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-arrow-wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "walsh-icon-arrow-flip")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6dccd7b861e9ce1d4aadb_icon-arrow-right-black.svg"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "walsh-icon-arrow-flip")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6d0a3f8befd8766a10634_icon-arrow-right-white.svg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
