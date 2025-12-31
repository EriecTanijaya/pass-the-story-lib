import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/components/ui/field";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex items-center justify-center h-dvh p-5">
      <Card className="w-md overflow-auto h-full md:max-h-fit">
        <CardHeader className="justify-items-center">
          <img src="/pts-logo.png" alt="logo" className="size-18 mb-5" />
          <CardTitle>Welcome to Pass The Story Library</CardTitle>
          <CardDescription>
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="test" className="items-center">
            <TabsList className="mb-5 w-full">
              <TabsTrigger value="sign-in">Sign In</TabsTrigger>
              <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
              <TabsTrigger value="test">test</TabsTrigger>
            </TabsList>

            <TabsContent
              value="test"
              className="w-full flex flex-col space-y-9"
            >
              <FieldGroup>
                <Field>
                  <FieldLabel>Full Name</FieldLabel>
                  <Input type="text" />
                </Field>

                <Field>
                  <FieldLabel>Username</FieldLabel>
                  <Input type="text" />
                </Field>

                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <Input type="password" />
                </Field>

                <Field>
                  <FieldLabel>Re-enter Password</FieldLabel>
                  <Input type="password" />
                </Field>
              </FieldGroup>
              <Button className="w-full">Create Account</Button>
            </TabsContent>

            <TabsContent
              value="sign-in"
              className="flex flex-col space-y-5 w-full"
            >
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label>Username</Label>
                  <Input type="text" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Password</Label>
                  <Input type="password" required />
                </div>
              </form>

              <Button className="w-full">Sign In</Button>
            </TabsContent>

            <TabsContent
              value="sign-up"
              className="flex flex-col space-y-5 w-full"
            >
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label>Full Name</Label>
                  <Input type="text" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Username</Label>
                  <Input type="text" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Password</Label>
                  <Input type="password" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Re-enter Password</Label>
                  <Input type="password" required />
                </div>
              </form>

              <Button className="w-full">Create Account</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  );
}
