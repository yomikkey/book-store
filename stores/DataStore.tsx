import { observable } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { fetchBooks } from "../pages/api/book-store";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(isServer);

type SerializedStore = {
    title: string,
    isbn: string,
    pageCount: number,
    published: {
        $date: Date,
        price: number,
        currency: string,
    },
    thumbnailUrl: string,
    shortDescription: string,
    longDescription: string,
    status: string,
    authors: Array<string>,
    categories: Array<string>,
}

export class DataStore {
    title: string | undefined;
    //   @observable title: string | undefined;
    hydrate(serializedStore: SerializedStore) {
        this.title = serializedStore.title != null ? serializedStore.title : "";
    }
}

export async function fetchInitialStoreState() {
    // You can do anything to fetch initial store state
    const bookData = fetchBooks();
    return bookData;
}