import * as z from "zod";
import React from "react";
import { cn } from "@/lib/utils";
import H3 from "@/components/shared/H3";
import { useForm } from "react-hook-form";
import Setting from "@/assets/Icons/Setting";
import { Input } from "@/components/ui/input";
import Button from "@/components/shared/Button";
import Divider from "@/components/shared/Divider";
import { RiErrorWarningFill } from "react-icons/ri";
import ColorText from "@/components/shared/ColorText";
import { zodResolver } from "@hookform/resolvers/zod";
import { resourceConfigSchema } from "@/lib/validation/resource-config";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const classNames = {
   formItem: "flex items-center space-y-0",
   formLabel: "text-lg w-[25%] font-saira",
   formControlWrapper: "w-[75%]",
   formControl: "w-full",
   formInput: "p-3 h-auto rounded-none w-full",
};

const ResourceConfigEdit = () => {
   const form = useForm<z.infer<typeof resourceConfigSchema>>({ resolver: zodResolver(resourceConfigSchema) });
   const handleSubmit = (values: z.infer<typeof resourceConfigSchema>) => {
      console.log("values: ", values);
   };

   return (
      <div className="space-y-4">
         <div className="flex flex-col items-center gap-2">
            <Setting />
            <H3>Sample-NodeJS Settings</H3>
         </div>
         <Divider />
         <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem className={cn(classNames.formItem)}>
                        <FormLabel className={cn(classNames.formLabel)}>Name</FormLabel>
                        <div className={cn(classNames.formControlWrapper)}>
                           <FormControl className={cn(classNames.formControl)}>
                              <Input autoComplete="off" placeholder="sample-nodejs" {...field} className={cn(classNames.formInput)} />
                           </FormControl>
                           <FormMessage />
                        </div>
                     </FormItem>
                  )}
               />
               <Divider />
               <FormField
                  control={form.control}
                  name="resourceType"
                  render={({ field }) => (
                     <FormItem className={cn(classNames.formItem)}>
                        <FormLabel className={cn(classNames.formLabel)}>Resource Type</FormLabel>
                        <div className={cn(classNames.formControlWrapper)}>
                           <FormControl className={cn()}>
                              <Select {...field}>
                                 <SelectTrigger className={cn(classNames.formInput)}>
                                    <SelectValue placeholder="Choose Resource Type" />
                                 </SelectTrigger>
                                 <SelectContent>
                                    <SelectItem value="web_services">Web Services</SelectItem>
                                 </SelectContent>
                              </Select>
                           </FormControl>
                           <FormMessage />
                        </div>
                     </FormItem>
                  )}
               />
               <Divider />
               <FormField
                  control={form.control}
                  name="resourceSize"
                  render={({ field }) => (
                     <FormItem className={cn(classNames.formItem, "items-start")}>
                        <FormLabel className={cn(classNames.formLabel)}>Resource Size</FormLabel>
                        <div className={cn(classNames.formControlWrapper)}>
                           <FormControl className={cn(classNames.formControl)}>
                              <div className="w-full space-y-4">
                                 <Select {...field}>
                                    <SelectTrigger className={cn(classNames.formInput)}>
                                       <SelectValue placeholder="Choose Resource Size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                       <SelectItem value="12_p_m">
                                          $12.00/month <span className="text-grayish-100">(1GB RAM | 1vCPU | 150 Bandwidth)</span>
                                       </SelectItem>
                                    </SelectContent>
                                 </Select>
                                 <div className="flex">
                                    <Button className="w-max border-white bg-transparent text-white hover:scale-100 active:scale-100">-</Button>
                                    <Button className="w-max border-l-0 border-r-0 border-white bg-transparent text-color-yellow-60 hover:scale-100 active:scale-100">0</Button>
                                    <Button className="w-max border-white bg-transparent text-white hover:scale-100 active:scale-100">+</Button>
                                 </div>

                                 <p className="font-bold">
                                    Resource Monthly Cost: <ColorText color="yellow" text={"$12.00"} />
                                 </p>
                                 <InfoText text="Dedicated instance sizes starting at $29.00/mo can enable autoscaling." />
                              </div>
                           </FormControl>
                           <FormMessage />
                        </div>
                     </FormItem>
                  )}
               />
               <Divider />
               <FormField
                  control={form.control}
                  name="runCommand"
                  render={({ field }) => (
                     <FormItem className={cn(classNames.formItem)}>
                        <FormLabel className={cn(classNames.formLabel)}>Run Command</FormLabel>
                        <div className={cn(classNames.formControlWrapper)}>
                           <FormControl className={cn(classNames.formControl)}>
                              <Input autoComplete="off" placeholder="yarn start" {...field} className={cn(classNames.formInput)} />
                           </FormControl>
                           <FormMessage />
                        </div>
                     </FormItem>
                  )}
               />
               <Divider />
               <FormField
                  control={form.control}
                  name="ports"
                  render={({ field }) => (
                     <FormItem className={cn(classNames.formItem)}>
                        <FormLabel className={cn(classNames.formLabel)}>Ports</FormLabel>
                        <div className={cn(classNames.formControlWrapper, "space-y-4")}>
                           <FormControl className={cn(classNames.formControl)}>
                              <div className="flex gap-4">
                                 <p className="mt-2 whitespace-nowrap">Public HTTP port</p>
                                 <div className="w-full">
                                    <Input autoComplete="off" placeholder="8080" {...field} className={cn(classNames.formInput)} />
                                    <p className="mt-1 text-sm text-grayish-100">Leave this blank for internal routing only and add an internal port.</p>
                                 </div>
                              </div>
                           </FormControl>
                           <FormMessage />
                           <Button variant={1}>Add internal Ports for Private Networking</Button>
                           <InfoText text="Route traffic between your services and the public internet or privately within your application." />
                        </div>
                     </FormItem>
                  )}
               />
               <Divider />
               <FormField
                  control={form.control}
                  name="httpsRequestRoute"
                  render={({ field }) => (
                     <FormItem className={cn(classNames.formItem)}>
                        <FormLabel className={cn(classNames.formLabel)}>HTTPS Request Routes</FormLabel>
                        <div className={cn(classNames.formControlWrapper, "space-y-4")}>
                           <FormControl className={cn(classNames.formControl)}>
                              <div className="flex gap-4">
                                 <p className="mt-2 whitespace-nowrap">Routes</p>
                                 <div className="w-full">
                                    <Input autoComplete="off" placeholder="/" {...field} className={cn(classNames.formInput)} />
                                    <p className="mt-1 text-sm text-grayish-100">Leave this blank for internal routing only and add an internal port.</p>
                                 </div>
                              </div>
                           </FormControl>
                           <FormMessage />
                           <Button variant={1}>Add Another</Button>
                           <InfoText text="Choose a path where this component will listen for HTTP requests." />
                        </div>
                     </FormItem>
                  )}
               />
               <Divider />
            </form>
         </Form>

         <div className="flex gap-2">
            <Button variant={1}>Skip to review</Button>
            <Button className="" btnType="link" to="/host-sphere/env">
               Next
            </Button>
         </div>
      </div>
   );
};

export default ResourceConfigEdit;

type InfoTextProps = React.ComponentPropsWithRef<"div"> & { text: string };
const InfoText = ({ text }: InfoTextProps) => {
   return (
      <div className="flex items-center gap-2">
         <RiErrorWarningFill className="text-xl text-color-yellow-60" /> <p>{text}</p>
      </div>
   );
};
