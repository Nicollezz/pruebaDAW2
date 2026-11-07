import ProviderTrivia from "@/app/Provider/ProviderTrivia";
import { Plantilla } from "@/app/Modelos/Plantilla";

export default function LayoutTrivia({ children }: Plantilla) {
    return (
        <ProviderTrivia>
            {children}
        </ProviderTrivia>
    );
}