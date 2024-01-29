import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./LatestProjectsList.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-11":{"id":"e-11","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main"],"target":{"selector":".walsh-link-wrapper","originalId":"6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1","appliesTo":"CLASS"},"targets":[{"selector":".walsh-link-wrapper","originalId":"6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1625015493372},"e-12":{"id":"e-12","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11"}},"mediaQueries":["main"],"target":{"selector":".walsh-link-wrapper","originalId":"6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1","appliesTo":"CLASS"},"targets":[{"selector":".walsh-link-wrapper","originalId":"6345ab75e9f63639d4b2246a|fbfbaf89-19b5-45bd-cef3-19f2e7dd79f1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1625015493377}},"actionLists":{"a-6":{"id":"a-6","title":"Button CTA Arrow - Hover On","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuint","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".walsh-icon-arrow","selectorGuids":["94611045-f110-8700-f5a0-f1c360474e37"]},"xValue":6,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1625015496555},"a-7":{"id":"a-7","title":"Button CTA Arrow - Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuint","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".walsh-icon-arrow","selectorGuids":["94611045-f110-8700-f5a0-f1c360474e37"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1625015496555}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LatestProjectsList({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "walsh-container-2")} tag="div">
      <_Builtin.Grid
        className={_utils.cx(_styles, "walsh-main-grid-2")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "walsh-rounded-card")}
          id={_utils.cx(
            _styles,
            "w-node-dffa30d2-4299-2d34-c6f7-8d540b973ba9-0b973ba7"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-card-image-float")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-rounded-image")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "walsh-cover-image-2")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b818df4d0eff0f4b4ceeb8_speechless-.jpg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-inner-card-bottom")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-label-tag")}
              tag="div"
            >
              {"enterprise"}
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(_styles, "walsh-heading-medium-2")}
              tag="h3"
            >
              {"We make your business stronger"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "walsh-main-paragraph-2")}
            >
              {
                "Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis."
              }
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(_styles, "walsh-link-wrapper")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block tag="div">{"Learn more"}</_Builtin.Block>
              <_Builtin.Image
                className={_utils.cx(_styles, "walsh-icon-arrow")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6dccd7b861e9ce1d4aadb_icon-arrow-right-black.svg"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "walsh-rounded-card")}
          id={_utils.cx(
            _styles,
            "w-node-dffa30d2-4299-2d34-c6f7-8d540b973bb8-0b973ba7"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-card-image-float")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-rounded-image")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "walsh-cover-image-2")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6dccd7b861e9ce1d4aad5_portrait-bearded-young.jpg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-inner-card-bottom")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-label-tag")}
              tag="div"
            >
              {"enterprise"}
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(_styles, "walsh-heading-medium-2")}
              tag="h3"
            >
              {"Share and collaborate"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "walsh-main-paragraph-2")}
            >
              {
                "Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis."
              }
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(_styles, "walsh-link-wrapper")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block tag="div">{"Learn more"}</_Builtin.Block>
              <_Builtin.Image
                className={_utils.cx(_styles, "walsh-icon-arrow")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6dccd7b861e9ce1d4aadb_icon-arrow-right-black.svg"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Grid>
      <_Builtin.Block
        className={_utils.cx(_styles, "divider-block")}
        tag="div"
      />
    </_Component>
  );
}
