import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] bg-white px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
        Page Not Found
      </h2>

      <p className="text-gray-500 max-w-md mx-auto mb-10 text-base leading-relaxed">
        The project document, component, or resource you are looking for does not exist or has been moved.
      </p>

      <Button href="/" variant="primary" size="lg">
        Return to Homepage
      </Button>
    </div>
  );
}
