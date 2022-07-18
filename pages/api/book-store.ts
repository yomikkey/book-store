import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Array<{
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
}>

export async function fetchBooks() {
  try {
    const res = await fetch(`https://run.mocky.io/v3/d7f02fdc-5591-4080-a163-95a08ce6895e`);
    const data = await res.json();
    return data
  } catch (error: any) {
    console.log(error.message && error?.response);
  }
}