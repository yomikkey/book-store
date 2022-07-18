export type Book = {
  titile: string,
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