import type ElementTypes from "./ElementConfigTypes";

export const elements: Array<any> = [
  // {
  //   name: "Input Style",
  //   children: [
  //     {
  //       text: "Outlined",
  //       name: "outlined",
  //       type: "radio",
  //       values: ["Outlined", "Filled"],
  //       default: "Outlined",
  //     },
  //   ],
  // },
  // {
  //   name: "Ripple Effect",
  //   children: [
  //     {
  //       text: "",
  //       type: "switch",
  //       default: true,
  //     },
  //   ],
  // },
  {
    name: "General",
    children: [
      {
        text: "Font Family",
        name: "fontFamily",
        type: "text",
        default:
          "Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
      },
      {
        text: "Text",
        name: "text",
        type: "colour-picker",
        default: "3F3F46",
      },
      {
        text: "Secondary Text",
        name: "secondaryText",
        type: "colour-picker",
        default: "71717A",
      },
      {
        text: "Border Radius",
        name: "borderRadius",
        type: "text",
        default: "6px",
      },
      {
        text: "Disabled Opacity",
        name: "disabledOpacity",
        type: "text",
        default: "0.6",
      },
    ],
  },
  {
    name: "Palette",
    children: [
      {
        text: "Primary",
        name: "primary",
        type: "colour-picker",
        default: "4F46E5",
      },
      {
        text: "Text on Primary",
        name: "textOnPrimary",
        type: "colour-picker",
        default: "FFFFFF",
      },
      {
        text: "Highlight Background",
        name: "highlightBackground",
        type: "colour-picker",
        default: "EEF2FF",
      },
      {
        text: "Text on Highlight",
        name: "textOnHighlight",
        type: "colour-picker",
        default: "312E81",
      },
      {
        text: "Hover Background",
        name: "hoverBackground",
        type: "colour-picker",
        default: "F4F4F5",
      },
      {
        text: "Error",
        name: "error",
        type: "colour-picker",
        default: "E24C4C",
      },
    ],
  },
  {
    name: "Surfaces",
    children: [
      {
        text: "Header",
        name: "header",
        type: "colour-picker",
        default: "FAFAFA",
      },
      {
        text: "Content",
        name: "content",
        type: "colour-picker",
        default: "FFFFFF",
      },
      {
        text: "Border",
        name: "border",
        type: "colour-picker",
        default: "E5E7EB",
      },
    ],
  },
  {
    name: "Forms",
    children: [
      {
        text: "Background",
        name: "formBackground",
        type: "colour-picker",
        default: "FFFFFF",
      },
      {
        text: "Border",
        name: "formBorder",
        type: "colour-picker",
        default: "D4D4D8",
      },
      {
        text: "Hover Border",
        name: "formHoverBorder",
        type: "colour-picker",
        default: "D4D4D8",
      },
      {
        text: "Focus Border",
        name: "formFocusBorder",
        type: "colour-picker",
        default: "6366F1",
      },
      {
        text: "Filled Background",
        name: "formFilledBackground",
        type: "colour-picker",
        default: "FAFAFA",
      },
    ],
  },
  {
    name: "Buttons",
    children: [
      {
        text: "Secondary Background",
        name: "secondaryBackground",
        type: "colour-picker",
        default: "64748B",
      },
      {
        text: "Secondary Text",
        name: "secondaryText",
        type: "colour-picker",
        default: "FFFFFF",
      },
      {
        text: "Success Background",
        name: "successBackground",
        type: "colour-picker",
        default: "22C55E",
      },
      {
        text: "Success Text",
        name: "successText",
        type: "colour-picker",
        default: "FFFFFF",
      },
      {
        text: "Info Background",
        name: "infoBackground",
        type: "colour-picker",
        default: "3B82F6",
      },
      {
        text: "Info Text",
        name: "infoText",
        type: "colour-picker",
        default: "FFFFFF",
      },
      {
        text: "Warning Background",
        name: "warningBackground",
        type: "colour-picker",
        default: "F59E0B",
      },
      {
        text: "Warning Text",
        name: "warningText",
        type: "colour-picker",
        default: "212529",
      },
      {
        text: "Help Background",
        name: "helpBackground",
        type: "colour-picker",
        default: "A855F7",
      },
      {
        text: "Help Text",
        name: "helpText",
        type: "colour-picker",
        default: "FFFFFF",
      },
      {
        text: "Danger Background",
        name: "dangerBackground",
        type: "colour-picker",
        default: "EF4444",
      },
      {
        text: "Danger Text",
        name: "dangerText",
        type: "colour-picker",
        default: "FFFFFF",
      },
    ],
  },
  {
    name: "Messages",
    children: [
      {
        text: "Info",
        name: "info",
        type: "colour-picker",
        default: "EFF6FF",
      },
      {
        text: "Success",
        name: "success",
        type: "colour-picker",
        default: "ECFDF5",
      },
      {
        text: "Warning",
        name: "warning",
        type: "colour-picker",
        default: "FEF3CF",
      },
      {
        text: "Error",
        name: "error",
        type: "colour-picker",
        default: "FEF3CF",
      },
    ],
  },
];
