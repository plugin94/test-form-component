"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {useActionState} from "react";
import {createTodo} from "@/app/action";
import {Form} from "@nextui-org/form";

export default function Home() {
    const [{errors}, formAction] = useActionState(createTodo, {
        errors: {},
    });
    console.info("errors, ", errors)
  return (
      <Form action={formAction} validationErrors={errors}>
          <Input name="todo" label="Task" />
          <Button type="submit">Add</Button>
      </Form>
  );
}
