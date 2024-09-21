import { Goal } from "@/src/shared/api/metrika-api/metrika";
import { Checkbox } from "@mui/material";
import { ChangeEvent } from "react";


type UpdateGoalsProps = {
  goalsList: Goal[];
  err: boolean | string;
  checked: { goal_id: number; status: boolean; name: string }[];
  handelChecked: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function UpdateGoals({
  goalsList,
  err,
  checked,
  handelChecked,
}: UpdateGoalsProps) {
  return (
    <div className="h-[300px] overflow-y-scroll p-2 mt-2">
      {err == false ? (
        goalsList.map((x, index) => {
          return (
            <div key={x.goal_id} className="flex gap-1 items-center">
              <Checkbox
                onChange={(e) => handelChecked(e)}
                checked={(checked[index] && checked[index].status) || false}
                inputProps={{ "aria-label": "controlled" }}
                name={x.name}
                value={x.goal_id}
              />
              <span className=" text-xs">{x.name}</span>
              <span className=" text-xs">{`(${x.goal_id})`}</span>
            </div>
          );
        })
      ) : (
        <div className="flex gap-1 items-center justify-center text-xs mt-10 uppercase">
          {err}
        </div>
      )}
    </div>
  );
}
