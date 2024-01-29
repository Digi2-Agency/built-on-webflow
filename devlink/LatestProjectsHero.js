import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./LatestProjectsHero.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["medium","small","tiny","main"],"target":{"id":"94752435-37e3-da8c-5109-72cc896704ce","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"94752435-37e3-da8c-5109-72cc896704ce","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1667439180938},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main"],"target":{"selector":".walsh-link-block-orange-2","originalId":"634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882","appliesTo":"CLASS"},"targets":[{"selector":".walsh-link-block-orange-2","originalId":"634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666312770566},"e-8":{"id":"e-8","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["main"],"target":{"selector":".walsh-link-block-orange-2","originalId":"634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882","appliesTo":"CLASS"},"targets":[{"selector":".walsh-link-block-orange-2","originalId":"634d8b6e827ec3e1f1cd8bca|7abca713-aeae-4ee9-429d-a2804bd42882","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666312770566}},"actionLists":{"a-5":{"id":"a-5","title":"Scroll - Hero Rail Images","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".walsh-inner-rail-bottom","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb2e"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-5-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":10000,"target":{"selector":".walsh-inner-rail-top","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb30"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-5-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":10000,"target":{"selector":".walsh-inner-rail-bottom","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb2e"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-5-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".walsh-inner-rail-top","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb30"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-5-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".walsh-inner-rail-bottom","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb2e"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1666712878019},"a-3":{"id":"a-3","title":"Button Default - Hover On 2","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutExpo","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".walsh-button-hover-fill-2","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb37"]},"xValue":3.8,"yValue":3.8,"locked":true}},{"id":"a-3-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".walsh-button-hover-fill-2","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb37"]},"xValue":180,"yValue":80,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-3-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"inOutExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".walsh-icon-arrow-flip-2","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb32"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-3-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":300,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".walsh-label-button-2","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb34"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1661474026364},"a-4":{"id":"a-4","title":"Button Default - Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".walsh-button-hover-fill-2","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb37"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".walsh-button-hover-fill-2","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb37"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-4-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":250,"easing":"outQuart","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".walsh-label-button-2","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb34"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-4-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outQuart","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".walsh-icon-arrow-flip-2","selectorGuids":["d91ad494-1d56-a3ab-a556-04f2660adb32"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1661474026364}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LatestProjectsHero({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "walsh-background-darkgreen-2")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "walsh-hero-grid-wrapper")}
        tag="div"
      >
        <_Builtin.Grid
          className={_utils.cx(_styles, "walsh-main-grid-no-gap-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-container-hero")}
            id={_utils.cx(
              _styles,
              "w-node-_94752435-37e3-da8c-5109-72cc896704b2-896704af"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-left-hero-content")}
              id={_utils.cx(
                _styles,
                "w-node-_94752435-37e3-da8c-5109-72cc896704b3-896704af"
              )}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "walsh-heading-xlarge-white-2")}
                tag="h3"
              >
                {"Webflow"}
                <_Builtin.Strong>{" Latest"}</_Builtin.Strong>
                <_Builtin.Span
                  className={_utils.cx(_styles, "walsh-text-lightgreen-2")}
                >
                  <_Builtin.Strong
                    className={_utils.cx(_styles, "walsh-text-burst-2")}
                  >
                    {"Projects"}
                  </_Builtin.Strong>
                </_Builtin.Span>
                {""}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "walsh-paragraph-serif-left-hero"
                )}
              >
                {
                  "Inspire and be inspired: discover amazing projects built on Webflow."
                }
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(_styles, "walsh-hero-div-block-2")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "walsh-link-block-orange-2")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "walsh-button-label-wrapper-2"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "walsh-label-button-2")}
                      tag="div"
                    >
                      {"Submit a Project"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "walsh-arrow-wrapper-2")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(
                          _styles,
                          "walsh-icon-arrow-flip-2"
                        )}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6d0a3f8befd8766a10634_icon-arrow-right-white.svg"
                      />
                      <_Builtin.Image
                        className={_utils.cx(
                          _styles,
                          "walsh-icon-arrow-flip-2"
                        )}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6d0a3f8befd8766a10634_icon-arrow-right-white.svg"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "walsh-button-hover-fill-2")}
                    tag="div"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "walsh-link-block-white-2")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "walsh-button-label-white-w-2"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "walsh-label-button-2")}
                      tag="div"
                    >
                      {"Explore Projects"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "walsh-arrow-wrapper-2")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(
                          _styles,
                          "walsh-icon-arrow-flip-2"
                        )}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6d0a3f8befd8766a10634_icon-arrow-right-white.svg"
                      />
                      <_Builtin.Image
                        className={_utils.cx(
                          _styles,
                          "walsh-icon-arrow-flip-2"
                        )}
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
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "walsh-hero-sub-bg")}
            id={_utils.cx(
              _styles,
              "w-node-_94752435-37e3-da8c-5109-72cc896704ce-896704af"
            )}
            data-w-id="94752435-37e3-da8c-5109-72cc896704ce"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-hero-rail")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "walsh-inner-rail-top")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-hero-frame-square")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "walsh-cover-image-2")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6dccd7b861e9ce1d4aad2_vertical-shot-cheerful-dark-skinned-unshaven-man-looks-positively_273609-19026.webp"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-hero-frame-square")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "walsh-cover-image-2")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6dccd7b861e9ce1d4aade_young-pretty-young-woman-.jpg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-hero-frame-square")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "walsh-cover-image-2")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b818df4d0eff0f4b4ceeb6_studio-portrait-.jpg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "walsh-inner-rail-top")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-hero-frame-square")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "walsh-cover-image-2")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6dccd7b861e9ce1d4aad2_vertical-shot-cheerful-dark-skinned-unshaven-man-looks-positively_273609-19026.webp"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-hero-frame-square")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "walsh-cover-image-2")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6dccd7b861e9ce1d4aade_young-pretty-young-woman-.jpg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-hero-frame-square")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "walsh-cover-image-2")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b818df4d0eff0f4b4ceeb6_studio-portrait-.jpg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "walsh-hero-rail")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "walsh-inner-rail-bottom")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-hero-frame-square")}
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
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-hero-frame-square")}
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
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-hero-frame-square")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "walsh-cover-image-2")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6dccd7b861e9ce1d4aae2_portrait-handsome-young.jpg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "walsh-inner-rail-bottom")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-hero-frame-square")}
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
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-hero-frame-square")}
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
                <_Builtin.Block
                  className={_utils.cx(_styles, "walsh-hero-frame-square")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "walsh-cover-image-2")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65b6d06923169546f9507516/65b6dccd7b861e9ce1d4aae2_portrait-handsome-young.jpg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "divider-block")}
        tag="div"
      />
    </_Component>
  );
}
