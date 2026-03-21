import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { useState } from "react";
import { useFieldContext } from "../formContext";
import { Item, ItemActions, ItemContent, ItemGroup, ItemTitle } from "@/shared/components/ui/item";
import { FloppyDiskIcon, PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";

//TODO: change to proper name

export function DynamicList() {
  const field = useFieldContext<string[]>();
  const [condition, setCondition] = useState("");

  return (
    <Field>
      <FieldLabel>Conditions</FieldLabel>

      {field.state.value.length > 0 && (
        <ItemGroup>
          {field.state.value.map((value, i) => (
            <EditableItem key={i} propIndex={i} value={value} />
          ))}
        </ItemGroup>
      )}

      <Field orientation="horizontal">
        <Input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} />
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

type EditableItemProps = {
  propIndex: number;
  value: string;
};

function EditableItem({ propIndex, value }: EditableItemProps) {
  const field = useFieldContext<string[]>();
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Item>
      <ItemContent>
        {isEdit ? (
          <Input value={value} onChange={(e) => field.replaceValue(propIndex, e.target.value)} />
        ) : (
          <ItemTitle>{value}</ItemTitle>
        )}
      </ItemContent>
      <ItemActions>
        {isEdit ? (
          <Button variant="outline" size="icon" onClick={() => setIsEdit(!isEdit)}>
            <FloppyDiskIcon />
          </Button>
        ) : (
          <Button variant="outline" size="icon" onClick={() => setIsEdit(!isEdit)}>
            <PencilSimpleIcon />
          </Button>
        )}

        <Button variant="destructive" size="icon" onClick={() => field.removeValue(propIndex)}>
          <TrashIcon />
        </Button>
      </ItemActions>
    </Item>
  );
}
