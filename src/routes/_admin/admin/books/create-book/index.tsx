import { useAppForm } from "@/features/auth/model/form";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/shared/components/ui/combobox";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Textarea } from "@/shared/components/ui/textarea";
import { formOptions } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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

  const frameworks = [
    "Next.js",
    "SvelteKit",
    "Nuxt.js",
    "Remix",
    "Astro",
  ] as const;

  return (
    <main className="px-7 pt-7 xl:px-24 bg-white h-dvh">
      <h2 className="font-bold text-xl mb-7">Add Book</h2>

      {/**
       todo: co locate the form to the shared component
        */}

      <form>
        <FieldGroup>
          <form.AppField
            name="title"
            children={(field) => <field.TextField label="Title" type="text" />}
          />

          <form.AppField
            name="author"
            children={(field) => <field.TextField label="Author" type="text" />}
          />

          <form.AppField
            name="isbn"
            children={(field) => <field.TextField label="ISBN" type="text" />}
          />

          <form.AppField
            name="genres"
            children={(field) => {
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
                            {values.map((value) => (
                              <ComboboxChip key={value.value}>
                                {value.label}
                              </ComboboxChip>
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
            children={(field) => (
              <field.TextField label="Language" type="text" />
            )}
          />

          <form.AppField
            name="conditions"
            children={(field) => (
              <Field>
                <FieldLabel>Conditions</FieldLabel>
              </Field>
            )}
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
          <form.SubscribeButton label="Add Book" />
        </form.AppForm>
      </form>

      {/*<div className="whitespace-pre-line">{text}</div>*/}
    </main>
  );
}
