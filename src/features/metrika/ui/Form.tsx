import FormControlTemplate from "@/src/shared/ui/modal/FormControl";
import Box from "./form/Box";
import { FormControl } from "@mui/material";

type FormProp = {
  active: () => void;
  state: boolean;
  id: number;
};

export default function Form({ active, state, id }: FormProp) {
  return (
    <>
      <FormControlTemplate active={active} state={state}>
        <FormControl fullWidth className="mt-4">
          <Box id={id} />
        </FormControl>
      </FormControlTemplate>
    </>
  );
}
