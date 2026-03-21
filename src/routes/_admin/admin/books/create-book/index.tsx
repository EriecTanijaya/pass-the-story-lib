import { formOptions } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/shared/components/ui/combobox";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import { Textarea } from "@/shared/components/ui/textarea";
import { useAppForm } from "@/shared/lib/tanstackForm/form";

export const Route = createFileRoute("/_admin/admin/books/create-book/")({
  component: RouteComponent,
});

type Book = {
  // id: string;
  title: string;
  author: string;
  isbn: string;
  lang: string;
  genres: string[];
  conditions: string[];
  // status: string;
  donor: string;
  synopsis: string;
};

const defaultValues: Book = {
  title: "",
  author: "",
  isbn: "",
  genres: [],
  lang: "",
  conditions: [],
  donor: "",
  synopsis: "",
};

const formOpts = formOptions({
  defaultValues,
});

function RouteComponent() {
  const form = useAppForm({
    ...formOpts,
  });

  return (
    <main className="px-7 pt-7 xl:px-24 bg-white">
      <h2 className="font-bold text-xl mb-7">Add Book</h2>

      <form>
        <FieldGroup>
          <form.AppField
            name="title"
            children={(field) => <field.FormTextInput label="Title" type="text" />}
          />

          <form.AppField
            name="author"
            children={(field) => <field.FormTextInput label="Author" type="text" />}
          />

          <form.AppField
            name="isbn"
            children={(field) => <field.FormTextInput label="ISBN" type="text" />}
          />

          <form.AppField
            name="genres"
            children={(_field) => {
              const items = [
                {
                  label: "Horror",
                  value: "horror",
                },
                {
                  label: "Comedy",
                  value: "comedy",
                },
              ];

              const anchor = useComboboxAnchor();

              return (
                <Field>
                  <FieldLabel>Genres</FieldLabel>

                  <Combobox multiple autoHighlight items={items}>
                    <ComboboxChips ref={anchor}>
                      <ComboboxValue>
                        {(values) => (
                          <>
                            {values.map((value: { value: string; label: string }) => (
                              <ComboboxChip key={value.value}>{value.label}</ComboboxChip>
                            ))}
                            <ComboboxChipsInput />
                          </>
                        )}
                      </ComboboxValue>
                    </ComboboxChips>

                    <ComboboxContent anchor={anchor}>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item.value} value={item}>
                            {item.label}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </Field>
              );
            }}
          />

          <form.AppField
            name="lang"
            children={(field) => <field.FormTextInput label="Language" type="text" />}
          />

          <form.AppField
            name="conditions"
            mode="array"
            children={(field) => <field.DynamicList />}
          />

          <form.AppField
            name="synopsis"
            children={(field) => (
              <Field>
                <FieldLabel>Synopsis</FieldLabel>
                <Textarea
                  onChange={(e) => field.handleChange(e.target.value)}
                  value={field.state.value}
                />
              </Field>
            )}
          />
        </FieldGroup>

        <form.AppForm>
          <form.FormSubmitButton label="Add Book" />
        </form.AppForm>
      </form>
    </main>
  );
}
