"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { sendMessage } from "@/lib/actions/messages";

const formSchema = z.object({
  name: z.string().min(2, { message: "Ad Soyad en az 2 karakter olmalıdır." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  phone: z
    .string()
    .min(10, { message: "Geçerli bir telefon numarası giriniz." }),
  interestedFairs: z
    .string()
    .min(2, { message: "İlgilendiğiniz fuarları belirtiniz." }),
  message: z
    .string()
    .min(10, { message: "Mesaj en az 10 karakter olmalıdır." }),
});

const SidebarContact = ({ fair }) => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interestedFairs: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    const result = await sendMessage(values);
    if (result.success) {
      toast({
        title: "Mesaj gönderildi",
        description: "Mesajınız başarıyla iletildi.",
      });
      form.reset();
    } else {
      toast({
        title: "Hata",
        description: "Mesaj gönderilirken bir hata oluştu.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="w-full rounded-lg shadow-md p-6 border border-gray-200">
      <h5 className="text-2xl font-semibold text-gray-700 mb-6">
        Bizimle İletişime Geçin
      </h5>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Ad Soyad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="E-posta" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Telefon" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interestedFairs"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="İlgilendiğiniz Fuarlar" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Mesajınız" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Button type="submit" className="w-full flex items-center gap-2">
              <Send size={16} /> Gönder
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SidebarContact;
