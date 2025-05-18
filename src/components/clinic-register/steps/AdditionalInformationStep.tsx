import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormField } from "../FormField";

import { getEps } from "@/service/clinicServices";
import { availableServices } from "../constants";
import type { EPS } from "../types";

export function AdditionalInformationStep() {
  const { register, setValue, watch } = useFormContext();
  const selectedServices = watch("services_offered") || [];
  const selectedEPS = watch("accepted_eps") || [];
  const [epsList, setEpsList] = useState<EPS[]>([]);

  useEffect(() => {
    const fetchEps = async () => {
      const response = await getEps(1, 10);
      if (!response.error) {
        setEpsList(response.data);
      }
    };
    fetchEps();
  }, []);

  return (
    <div className="grid gap-6">
      <FormField name="member_count" label="Número de Miembros">
        <Input
          id="member_count"
          type="number"
          min="1"
          placeholder="42"
          {...register("member_count", { valueAsNumber: true })}
        />
      </FormField>

      <FormField name="services_offered" label="Servicios Ofrecidos">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              {selectedServices.length > 0
                ? `${selectedServices.length} service${
                    selectedServices.length > 1 ? "s" : ""
                  } selected`
                : "Select services"}
              <ChevronRight className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0" align="start">
            <Command>
              <CommandInput placeholder="Search services..." />
              <CommandList>
                <CommandEmpty>No service found.</CommandEmpty>
                <CommandGroup className="max-h-[200px] overflow-auto">
                  {availableServices.map((service) => (
                    <CommandItem
                      key={service}
                      onSelect={() => {
                        const newServices = selectedServices.includes(service)
                          ? selectedServices.filter(
                              (service_item: string) => service_item !== service
                            )
                          : [...selectedServices, service];
                        setValue("services_offered", newServices, {
                          shouldValidate: true,
                        });
                      }}
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          selectedServices.includes(service)
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50"
                        )}
                      >
                        {selectedServices.includes(service) && (
                          <Check className="h-3 w-3" />
                        )}
                      </div>
                      {service}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {selectedServices.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedServices.map((service: string) => (
              <Badge
                key={service}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {service}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => {
                    setValue(
                      "services_offered",
                      selectedServices.filter(
                        (service_item: string) => service_item !== service
                      ),
                      { shouldValidate: true }
                    );
                  }}
                />
              </Badge>
            ))}
          </div>
        )}
      </FormField>

      <FormField name="accepted_eps" label="EPS Aceptadas">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              {selectedEPS.length > 0
                ? `${selectedEPS.length} EPS seleccionadas`
                : "Seleccionar EPS"}
              <ChevronRight className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0" align="start">
            <Command>
              <CommandInput placeholder="Search EPS..." />
              <CommandList>
                <CommandEmpty>No se encontró ninguna EPS.</CommandEmpty>
                <CommandGroup className="max-h-[200px] overflow-auto">
                  {epsList.map((eps) => (
                    <CommandItem
                      key={eps.id}
                      onSelect={() => {
                        const newEPS = selectedEPS.includes(eps.id)
                          ? selectedEPS.filter(
                              (eps_item: string) => eps_item !== eps.id
                            )
                          : [...selectedEPS, eps.id];
                        setValue("accepted_eps", newEPS, {
                          shouldValidate: true,
                        });
                      }}
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          selectedEPS.includes(eps.id)
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50"
                        )}
                      >
                        {selectedEPS.includes(eps.id) && (
                          <Check className="h-3 w-3" />
                        )}
                      </div>
                      {eps.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {selectedEPS.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedEPS.map((epsId: string) => {
              const eps = epsList.find((e: EPS) => e.id === epsId);
              return (
                eps && (
                  <Badge
                    key={epsId}
                    variant="outline"
                    className="flex items-center gap-1"
                  >
                    {eps.name}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => {
                        setValue(
                          "accepted_eps",
                          selectedEPS.filter(
                            (eps_item: string) => eps_item !== epsId
                          ),
                          { shouldValidate: true }
                        );
                      }}
                    />
                  </Badge>
                )
              );
            })}
          </div>
        )}
      </FormField>
    </div>
  );
}
