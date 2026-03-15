import { Field, FieldLabel } from "@/shared/components/ui/field";
import { useFieldContext } from "../../model/formContext";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { useState } from "react";

export function DynamicList() {
  const field = useFieldContext<string[]>();
  const [condition, setCondition] = useState("");

  return (
    <Field>
      <FieldLabel>Conditions</FieldLabel>
      {field.state.value.map((value, i) => {
        return <div key={i}>{value}</div>;
      })}

      <Field orientation="horizontal">
        <Input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
        <Button
          onClick={() => {
            field.pushValue(condition);
            setCondition("");
          }}
        >
          Add
        </Button>
      </Field>
    </Field>
  );
}
