import { useAppForm } from "@/features/auth/model/form";
import { FieldGroup } from "@/shared/components/ui/field";
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
    synopsis: "",
  },
});

function RouteComponent() {
  const [text, setText] = useState("");

  const form = useAppForm({
    ...formOpts,
  });

  return (
    <main className="px-7 pt-7 xl:px-24 bg-white h-dvh">
      <h2 className="font-bold text-xl mb-7">Add Book</h2>

      <form>
        <FieldGroup>
          <form.AppField
            name="title"
            children={(field) => <field.TextField label="Title" type="text" />}
          />
        </FieldGroup>
        <form.AppForm>
          <form.SubscribeButton label="Add Book" />
        </form.AppForm>
      </form>

      <Textarea onChange={(e) => setText(e.target.value)} />

      <div className="whitespace-pre-line">{text}</div>
    </main>
  );
}
