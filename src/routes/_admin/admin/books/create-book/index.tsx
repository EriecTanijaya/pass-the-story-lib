import { useAppForm } from "@/features/auth/model/form";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import { Textarea } from "@/shared/components/ui/textarea";
import { formOptions } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_admin/admin/books/create-book/")({
  component: RouteComponent,
});

type Book = {
  id: string;
  title: string;
  author: string;
  isbn: string;
  genre: string;
  lang: string;
  tags: string[];
  conditions: string[];
  status: string;
  donor: string;
  synopsis: string;
};

const formOpts = formOptions({
  defaultValues: {
    title: "",
    author: "",
    isbn: "",
    genre: "",
    lang: "",
    tags: "",
    conditions: [],
    donor: "",
    synopsis: "",
  },
});

function RouteComponent() {
  const form = useAppForm({
    ...formOpts,
  });

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

          <form.AppField
            name="author"
            children={(field) => <field.TextField label="Author" type="text" />}
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
