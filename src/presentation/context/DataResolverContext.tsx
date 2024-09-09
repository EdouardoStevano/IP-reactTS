import React, {
    createContext,
    ReactNode,
    useContext,
    useState,
    useEffect,
} from 'react';

interface DataResolverContextType<T> {
    data: T | null;
    error: string | null;
    resolveData: (fetcher: () => Promise<T>) => void;
}

const DataResolverContext = createContext<
    DataResolverContextType<any> | undefined
>(undefined);

// Provider pour le resolver
export const DataResolverProvider = <T extends unknown>({
    children,
}: {
    children: ReactNode;
}) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);

    const resolveData = async (fetcher: () => Promise<T>) => {
        try {
            const result = await fetcher();
            setData(result);
            setError(null);
        } catch (err) {
            setError('Erreur de recuperation  des données');
        }
    };

    return (
        <DataResolverContext.Provider value={{ data, error, resolveData }}>
            {children}
        </DataResolverContext.Provider>
    );
};

// Hook personnalisé pour utiliser le resolver
export const useDataResolver = <T extends unknown>() => {
    const context = useContext(DataResolverContext);
    if (!context) {
        throw new Error(
            'useDataResolver doit être combiner à DataResolverProvider',
        );
    }
    return context as DataResolverContextType<T>;
};
