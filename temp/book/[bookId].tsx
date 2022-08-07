import Head from "next/head";
import { useRouter } from "next/router";
import HeaderStyle from "../styling-components/headerStyle";

export interface Book {
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

function BookDetailPage(props: Book ) {
    const router = useRouter();
    const { bookId } = router.query;


    return (
        <>
            <HeaderStyle />
            <div>
                <Head><title>Book-Store - {bookId}</title></Head>
                {bookId}
            </div>
        </>
    )
}

export default BookDetailPage;