import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";

interface Registry {
  name: string;
  command: string;
}

const registries: Registry[] = [
  {
    name: "npm",
    command: "npm i",
  },
  {
    name: "yarn",
    command: "yarn add",
  },
  {
    name: "pnpm",
    command: "pnpm add",
  },
];

export function InstallTabs({ pkg }: { pkg: string }) {
  return (
    <Tabs>
      {registries.map(({ name, command }, index) => (
        <TabItem value={name} label={name} default={index === 0}>
          <CodeBlock language="bash">
            {command} {pkg}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
