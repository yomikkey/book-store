import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useCallback } from 'react';
import BookStore from './styling-components/bookStore';
import HeaderStyle from './styling-components/headerStyle';
import SearchBox from './styling-components/searchBox';

function MyApp({ Component, pageProps }: AppProps) {
  const [searchValue, setSearchValue] = useState("");
  const [searchCategory, setsearchCategory] = useState('title')

  const searchCallback = useCallback((searchValue: any) => {
    setSearchValue(searchValue);
  }, []);

  const searchCategoryCallBack = useCallback((searchCategory: any) => {
    setSearchValue(searchCategory);
  }, []);

  return (
    <>
      <HeaderStyle />
      <SearchBox searchCallback={searchCallback} searchCategoryCallBack={searchCategoryCallBack}/>
      <BookStore searchValue={searchValue} searchCategory={searchCategory} />
    </>
  )
}

export default MyApp
