"use client";
import {
    DetailedHTMLProps,
    HTMLAttributes,
    SetStateAction,
    useMemo,
    useRef,
    useState
} from "react";
import { BaseItem, createAutocomplete } from "@algolia/autocomplete-core";
import Link from "next/link";
import Image from "next/image";
import { IProduct, IProducts } from "@/types";
import "./index.scss";

interface StateType {
    collections: {
        items: IProducts[];
        sources: Function[];
    }[];
    isOpen: boolean;
}

interface IProductExtend extends IProduct {
    __autocomplete_id: string;
}

export default function Search() {
    const [autocompleteState, setAutocompleteState] = useState<StateType>({
        collections: [],
        isOpen: false
    });

    const autocomplete = useMemo(
        () =>
            createAutocomplete({
                placeholder: "Busca tu oferta",
                onStateChange: ({ state }) =>
                    setAutocompleteState(
                        state as unknown as SetStateAction<StateType>
                    ),
                getSources: () => [
                    {
                        sourceId: "offers-next-api",
                        getItems: ({ query }) => {
                            if (!!query) {
                                return fetch(`/api/search?q=${query}`).then(
                                    (res) => res.json()
                                ) as Promise<BaseItem[]>;
                            }
                            return Promise.resolve([]);
                        }
                    }
                ]
            }),
        []
    );

    const formRef = useRef(null);
    const inputRef = useRef(null);
    const panelRef = useRef(null);

    const formProps = autocomplete.getFormProps({
        inputElement: inputRef.current
    });

    const inputProps = autocomplete.getInputProps({
        inputElement: inputRef.current
    });

    return (
        <form
            ref={formRef}
            className="search-form"
            {...(formProps as unknown as DetailedHTMLProps<
                HTMLAttributes<HTMLFormElement>,
                HTMLFormElement
            >)}
        >
            <div className="border-form">
                <input
                    ref={inputRef}
                    className="query-input"
                    {...(inputProps as unknown as DetailedHTMLProps<
                        HTMLAttributes<HTMLInputElement>,
                        HTMLInputElement
                    >)}
                />

                {autocompleteState.isOpen && (
                    <div
                        className="hits-panel"
                        ref={panelRef}
                        {...(autocomplete.getPanelProps() as unknown as DetailedHTMLProps<
                            HTMLAttributes<HTMLDivElement>,
                            HTMLDivElement
                        >)}
                    >
                        {autocompleteState.collections.map(
                            (collection, index) => (
                                <section key={`section-${index}`}>
                                    {collection.items?.length > 0 && (
                                        <div {...autocomplete.getListProps()}>
                                            {collection.items.map((item) => {
                                                const { __autocomplete_id } =
                                                    item as unknown as IProductExtend;
                                                return (
                                                    <AutocompleteItem
                                                        key={`item-${__autocomplete_id}`}
                                                        item={
                                                            item as unknown as IProductExtend
                                                        }
                                                    />
                                                );
                                            })}
                                        </div>
                                    )}
                                </section>
                            )
                        )}
                    </div>
                )}
            </div>
        </form>
    );
}

function AutocompleteItem({ item }: { item: IProductExtend }) {
    return (
        <Link href={`/detail/${item.id}`} className="hit-link">
            <Image
                src={item.img}
                alt={item.title}
                className="image-product"
                width={48}
                height={48}
                loading="lazy"
            />
            <section>
                <h3 className="title-product">{item.title}</h3>
                <p className="price-product">{item.price}</p>
            </section>
        </Link>
    );
}
