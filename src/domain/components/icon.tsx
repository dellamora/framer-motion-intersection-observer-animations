import { Metrics } from "../types";

export type Icon<T extends Record<string, unknown> = Record<string, unknown>> =
  (
    props: {
      className?: string;
      width?: `${number}${Metrics}`;
      active?: boolean;
      fill?: `${string}`;
      onClick?: () => void;
    } & T,
  ) => JSX.Element;