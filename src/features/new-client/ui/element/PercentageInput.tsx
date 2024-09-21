import { InputBaseComponentProps } from "@mui/material";

import { forwardRef } from "react";
import { NumericFormat, PatternFormat } from "react-number-format";

type NumberFormatCustomProps = InputBaseComponentProps &
  React.RefAttributes<HTMLInputElement>;

const InputPercent = forwardRef<HTMLInputElement, NumberFormatCustomProps>(
  (props, ref) => {
    const { onChange, value, ...values } = props;
    // console.log(value);
    return (
      <NumericFormat
        getInputRef={ref}
        name="percentage"
        allowLeadingZeros
        decimalScale={3}
        value={value as number}
        onChange={onChange}
        // defaultValue={value }
        style={{
          width: "100%",
          borderRadius: 0,
          border: "none",
          padding: "8px",
          outline: "none",
        }}
      />
    );
  },
);

export default InputPercent;
