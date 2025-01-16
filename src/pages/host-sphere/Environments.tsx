import Code from "@/assets/Icons/Code";
import Globe from "@/assets/Icons/Globe";
import Server from "@/assets/Icons/Server";
import Button from "@/components/shared/Button";
import Divider from "@/components/shared/Divider";
import H3 from "@/components/shared/H3";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { IoMdAdd } from "react-icons/io";

const DefaultEnvVar = { key: "", value: "", encrypt: false };
type EnvVar = typeof DefaultEnvVar;

const Environments = () => {
   const [envs, setEnvs] = useState<{ global: EnvVar[]; app: EnvVar[] }>({ global: [DefaultEnvVar], app: [DefaultEnvVar] });

   const handleAddEnv =
      (type: "global" | "app", index: number, inputType: "checkbox" | "input" = "input") =>
      (e: ChangeEvent<HTMLInputElement> | boolean) => {
         const data =
            inputType === "checkbox" ? { encrypt: e as boolean } : { [(e as ChangeEvent<HTMLInputElement>).target.name]: (e as ChangeEvent<HTMLInputElement>).target.value };
         setEnvs((prev) => ({
            ...prev,
            [type]: prev[type].map(
               (env, i) => (i === index ? { ...env, ...data } : env), // Update only the matching index
            ),
         }));
      };

   return (
      <div className="space-y-4">
         <div className="flex flex-col items-center gap-2">
            <Server />
            <H3>Env Vars</H3>
         </div>
         <Divider />
         <div className="space-y-4">
            <div className="grid grid-cols-2 p-2">
               <div className="flex items-center gap-2">
                  <Globe />
                  <p>Globe</p>
               </div>
               <div className="flex items-center justify-between gap-2">
                  <p className="text-Gray-200">0 environment variables</p>
                  <Button variant={1} className="w-max">
                     Edit
                  </Button>
               </div>
            </div>
            {envs.global.map((env, i) => (
               <div className="space-y-2" key={i}>
                  <div className="flex flex-col gap-4 sm:flex-row">
                     <Input name="key" onChange={handleAddEnv("global", i)} value={env.key} className="h-auto rounded-none" placeholder="Key" />
                     <Input name="value" onChange={handleAddEnv("global", i)} value={env.value} className="h-auto rounded-none" placeholder="Value" />
                     <Button variant={1} className="h-max w-max">
                        <IoMdAdd />
                     </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                     <Checkbox id="encrypt" name="encrypt" onCheckedChange={handleAddEnv("global", i, "checkbox") as any} className="border-grayish-100" />
                     <label htmlFor="encrypt" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Encrypt
                     </label>
                  </div>
               </div>
            ))}
         </div>

         <Divider />
         <div className="">
            <div className="grid grid-cols-2 p-2">
               <div className="flex items-center gap-2">
                  <Code />
                  <p>sample-nodejs</p>
               </div>
               <div className="flex items-center justify-between gap-2">
                  <p className="text-Gray-200">0 environment variables</p>
                  <Button variant={1} className="w-max">
                     Edit
                  </Button>
               </div>
            </div>
         </div>

         <div className="flex gap-2">
            <Button variant={1}>Back</Button>
            <Button className="" btnType="link" to="/host-sphere/info">
               Next
            </Button>
         </div>
      </div>
   );
};

export default Environments;
