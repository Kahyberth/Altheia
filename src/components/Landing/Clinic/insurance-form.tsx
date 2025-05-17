import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getEps } from "@/service/clinicServices";
import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";

interface InsuranceFormProps {
  data: {
    insuranceProviders: string[];
  };
  updateData: (data: { insuranceProviders: string[] }) => void;
  onNext: () => void;
  onPrevious: () => void;
}

interface EpsProvider {
  id: string;
  name: string;
}

export default function InsuranceForm({
  data,
  updateData,
  onNext,
  onPrevious,
}: InsuranceFormProps) {
  const [newProvider, setNewProvider] = useState("");
  const [eps, setEps] = useState<EpsProvider[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEps = async () => {
      try {
        setIsLoading(true);
        const { data } = await getEps(10, 1);
        console.log(data);
        if (!data.error) {
          setEps(data);
        }
      } catch (error) {
        console.error("Error fetching EPS:", error);
        setEps([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEps();
  }, []);

  const validate = () => {
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  const handleProviderToggle = (provider: string) => {
    const updatedProviders = data.insuranceProviders.includes(provider)
      ? data.insuranceProviders.filter((p: string) => p !== provider)
      : [...data.insuranceProviders, provider];

    updateData({ insuranceProviders: updatedProviders });
  };

  const handleAddCustomProvider = () => {
    if (
      newProvider.trim() &&
      !data.insuranceProviders.includes(newProvider.trim())
    ) {
      updateData({
        insuranceProviders: [...data.insuranceProviders, newProvider.trim()],
      });
      setNewProvider("");
    }
  };

  const handleRemoveProvider = (provider: string) => {
    updateData({
      insuranceProviders: data.insuranceProviders.filter(
        (p: string) => p !== provider
      ),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Insurance & EPS Agreements</h2>
        <p className="text-muted-foreground">
          Select the insurance providers and EPS with which your clinic has
          agreements
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <Label>Common Insurance Providers & EPS</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {isLoading ? (
              <div className="col-span-2 text-center text-muted-foreground">
                Loading providers...
              </div>
            ) : eps && eps.length > 0 ? (
              eps.map((provider) => (
                <div key={provider.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`provider-${provider.id}`}
                    checked={data.insuranceProviders.includes(provider.name)}
                    onCheckedChange={() => handleProviderToggle(provider.name)}
                  />
                  <label
                    htmlFor={`provider-${provider.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {provider.name}
                  </label>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center text-muted-foreground">
                No providers available
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <Label>Add Custom Insurance Provider or EPS</Label>
          <div className="flex space-x-2">
            <Input
              value={newProvider}
              onChange={(e) => setNewProvider(e.target.value)}
              placeholder="Enter provider name"
              className="flex-1"
            />
            <Button
              type="button"
              onClick={handleAddCustomProvider}
              disabled={!newProvider.trim()}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>

        {data.insuranceProviders.length > 0 && (
          <div className="space-y-2">
            <Label>Selected Providers</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.insuranceProviders.map((provider: string) => (
                <Badge
                  key={provider}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {provider}
                  <button
                    type="button"
                    onClick={() => handleRemoveProvider(provider)}
                    className="ml-1 rounded-full hover:bg-muted p-0.5"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {provider}</span>
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Back
        </Button>
        <Button type="submit">Continue to Photos</Button>
      </div>
    </form>
  );
}
