import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormField } from "../FormField";
import { countries } from "../constants";

export function AddressInformationStep() {
  const { register, control } = useFormContext();
  const [countrySearch, setCountrySearch] = useState("");

  // Filter countries based on search
  const filteredCountries = countries.filter((country: string) =>
    country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <FormField name="address" label="Dirección" className="md:col-span-2">
        <Input
          id="address"
          placeholder="123 Plaza Médica, Suite 400"
          {...register("address")}
        />
      </FormField>

      <FormField name="country" label="País">
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar un país" />
              </SelectTrigger>
              <SelectContent>
                <div className="p-2 sticky top-0 bg-popover z-10">
                  <Input
                    placeholder="Buscar país..."
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                    className="w-full"
                  />
                </div>
                {filteredCountries.length === 0 ? (
                  <div className="p-2 text-muted-foreground text-sm">
                    No se encontró ningún país.
                  </div>
                ) : (
                  filteredCountries.map((country: string) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          )}
        />
      </FormField>

      <FormField name="city" label="Ciudad">
        <Input id="city" placeholder="San Francisco" {...register("city")} />
      </FormField>

      <FormField name="state" label="Departamento/Provincia">
        <Input id="state" placeholder="California" {...register("state")} />
      </FormField>

      <FormField name="postal_code" label="Código Postal">
        <Input
          id="postal_code"
          placeholder="94107"
          {...register("postal_code")}
        />
      </FormField>
    </div>
  );
}
