/* @jsx h */
import { h } from "@stencil/core";
import "./counter";

export default {
  parameters: {
    layout: "centered",
    parameters: {
    },
  },
};

export const sample = () => <my-counter></my-counter>;