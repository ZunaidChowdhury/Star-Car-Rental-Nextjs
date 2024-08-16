"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import { carFormSchema } from "@/lib/validator"
import { carDefaultValues } from "@/constants"
import Dropdown from "./Dropdown"
import { Textarea } from "../ui/textarea"
import { useState } from "react"
import { FileUploader } from "./FileUploader"
import Image from "next/image"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "../ui/checkbox"
import { useUploadThing } from "@/lib/uploadthing"
import { useRouter } from "next/navigation"
import { createCar, updateCar } from "@/lib/actions/car.actions"
import { ICar } from "@/lib/database/models/car.model"



type CarFormProps = {
  userId: string
  type: "Add" | "Update"
  car?: ICar
  carId?: string
}

const CarForm = ({ userId, type, car, carId }: CarFormProps) => {
  console.log("CarForm Called.");

  const [files, setFiles] = useState<File[]>([]);

  const initialValues = car && type === "Update"
    ? {
      ...car,
      available_till: new Date(car.available_till)
    } : carDefaultValues;

  const router = useRouter();
  const { startUpload } = useUploadThing('imageUploader')

  // 1. Define your form.
  const form = useForm<z.infer<typeof carFormSchema>>({
    resolver: zodResolver(carFormSchema),
    defaultValues: initialValues
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof carFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("Submit Called.");
    console.log(values);

    let uploadedImageUrl = values.picturePath;
    if (files.length > 0) {
      const uploadedImages = await startUpload(files)
      if (!uploadedImages) {
        return
      }
      uploadedImageUrl = uploadedImages[0].url
    }

    if (type === 'Add') {
      try {
        const newCar = await createCar({
          car: {
            ...values,
            picturePath: uploadedImageUrl,
            category: values.categoryId,
          },
          userId,
          path: '/profile'
        })
        if (newCar) {
          form.reset();
          router.push(`/cars/${newCar._id}`)
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (type === 'Update') {
      if (!carId) {
        router.back()
        return;
      }
      try {
        const updatedCar = await updateCar({
          userId,
          car: { ...values, picturePath: uploadedImageUrl, _id: carId, category: values.categoryId },
          path: `/cars/${carId}`
        })
        if (updatedCar) {
          form.reset();
          router.push(`/cars/${updatedCar._id}`)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

        <div className="flex flex-col md:flex-row gap-5">
          {/* Car make */}
          <FormField
            control={form.control}
            name="make"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Car make" {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Car model */}
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Model" {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Year */}
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  {/* <Input placeholder="Model" {...field} className="input-field" /> */}
                  <Input type="number" placeholder="Year" {...field} className="p-regular-16 h-[54px] border-none rounded-full placeholder:text-grey-500 px-4 py-3 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-offset-0 focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>

        {/* drop image */}
        <FormField
          control={form.control}
          name="picturePath"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="h-72">
                <FileUploader
                  onFieldChange={field.onChange}
                  picturePath={field.value}
                  setFiles={setFiles}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-5">

          {/* Category */}
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown onChangeHandler={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Seats */}
          <FormField
            control={form.control}
            name="seats"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="number" placeholder="Seats" {...field} className="p-regular-16 h-[54px] border-none rounded-full placeholder:text-grey-500 px-4 py-3 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-offset-0 focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Rental Cost */}
          <FormField
            control={form.control}
            name="rentalCostPerDay"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="number" placeholder="Rental Cost" {...field} className="p-regular-16 h-[54px] border-none rounded-full placeholder:text-grey-500 px-4 py-3 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-offset-0 focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea placeholder="Description" {...field} className="textarea rounded-2xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

        </div>

        <div className="flex flex-col md:flex-row gap-5">

          {/* City MPG */}
          <FormField
            control={form.control}
            name="city_MPG"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="number" placeholder="City MPG" {...field} className="p-regular-16 h-[54px] border-none rounded-full placeholder:text-grey-500 px-4 py-3 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-offset-0 focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Highway MPG */}
          <FormField
            control={form.control}
            name="highway_MPG"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="number" placeholder="Highway MPG" {...field} className="p-regular-16 h-[54px] border-none rounded-full placeholder:text-grey-500 px-4 py-3 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-offset-0 focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Combination MPG */}
          <FormField
            control={form.control}
            name="combination_MPG"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="number" placeholder="Combination MPG" {...field} className="p-regular-16 h-[54px] border-none rounded-full placeholder:text-grey-500 px-4 py-3 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-offset-0 focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* location */}
          {/* <FormField
            control={form.control}
            name="make"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src="/jvm/icons/location-grey.svg"
                      alt="calender"
                      width={24}
                      height={24}
                    />
                    <Input placeholder="Event location or online" {...field} className="input-field" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
        </div>

        <div className="flex flex-col md:flex-row gap-5">

          {/* Fuel Type */}
          <FormField
            control={form.control}
            name="fuelType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Fuel Type" {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Drive */}
          <FormField
            control={form.control}
            name="drive"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Drive" {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Cylinders */}
          <FormField
            control={form.control}
            name="cylinders"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="number" placeholder="Cylinders" {...field} className="p-regular-16 h-[54px] border-none rounded-full placeholder:text-grey-500 px-4 py-3 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-offset-0 focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


        </div>

        <div className="flex flex-col gap-5 md:flex-row">

          {/* Displacement */}
          <FormField
            control={form.control}
            name="displacement"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="number" placeholder="Displacement" {...field} className="p-regular-16 h-[54px] border-none rounded-full placeholder:text-grey-500 px-4 py-3 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-offset-0 focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Transmission */}
          <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Transmission" {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* available_till date */}
          <FormField
            control={form.control}
            name="available_till"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex items-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src="/jvm/icons/calendar.svg"
                      alt="calender"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <p className="ml-3 whitespace-nowrap text-grey-600">Available till:</p>

                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="MM/dd/yyyy h:mm aa"
                      wrapperClassName="datePicker"
                      minDate={new Date()}
                      showYearDropdown
                      scrollableMonthYearDropdown
                      className="ml-3 p-2 text-center bg-grey-50"
                    />

                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />














          {/* <FormField
            control={form.control}
            name="rentalCostPerDay"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex items-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src="/jvm/icons/dollar.svg"
                      alt="dollar"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <Input type="number" placeholder="Rental Cost" {...field} className="p-regular-16 border-0 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0" />

                    {/* isFree */}
          {/* <FormField
                      control={form.control}
                      name="isFree"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex items-center">
                              <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Free</label>
                              <Checkbox
                                onCheckedChange={field.onChange}
                                checked={field.value}
                                id="isFree" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          {/* url */}
          {/* <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src="/jvm/icons/link.svg"
                      alt="link"
                      width={24}
                      height={24}
                    />
                    <Input placeholder="URL" {...field} className="input-field" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />  */}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? (
            'Submitting...'
          ) : `${type} Car `}
        </Button>
      </form>
    </Form>
  )
}

export default CarForm