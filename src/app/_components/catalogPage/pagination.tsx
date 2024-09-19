'use client'
import ReactPaginate from 'react-paginate';
import useWindowsize from '@/app/hooks/useWindowsize';
import { useState, useEffect } from 'react';


interface Pagination {
  maxPages: number,
  setQueryParams?: any;
  queryParams?:any;
}



export default function PaginationComponent({maxPages, queryParams, setQueryParams}: Pagination) {
  const [currPage, setCurrPage] = useState<number>(0)

  interface Event {
    selected: number;
  }


  const handlePageClick = (event: Event) => {
    const tempParams = {...queryParams}
    tempParams.page = (event.selected + 1).toString()
    setCurrPage(event.selected + 1)
    setQueryParams(tempParams)
  };

  const size = useWindowsize();

  //меняем количество страниц в зависимости от ширины экрана
  let rangeDisplayed: number

  if (size?.width && size?.width < 1024) {
      rangeDisplayed = 2
  } else {
      rangeDisplayed = 3
  }

  return (
    
    <div className="flex justify-center w-full my-[50px]">
        <ReactPaginate 
            containerClassName={'flex justify-center w-full max-w-[720px] font-medium	text-sm max-lg:px-4'}
            breakLabel='...'
            breakLinkClassName={'flex items-center justify-center h-10 border border-slate-100 w-[37px]'}
            breakClassName={`${(currPage > 2 && currPage < 47 && rangeDisplayed == 2) ? '[&:nth-child(3)]:hidden' : '' }`}
            onPageChange={handlePageClick}
            forcePage={(Number(queryParams?.page - 1) || 0)}
            pageCount={maxPages}
            pageRangeDisplayed={rangeDisplayed}
            marginPagesDisplayed={1}
            pageLinkClassName={'h-10 px-3 flex items-center '}
            pageClassName={`border border-slate-100 [&:nth-child(2)]:rounded-l-lg [&:nth-last-child(2)]:rounded-r-lg hover:bg-pageActive
              ${(currPage == 1 && rangeDisplayed == 2)? '[&:nth-child(1)]:hidden ' : ''}
              ${(currPage == 2 && rangeDisplayed == 2)? '[&:nth-child(2)]:hidden [&:nth-child(3)]:rounded-l-lg' : ''}
              ${(currPage == 3 && rangeDisplayed == 2)? '[&:nth-child(2)]:hidden [&:nth-child(3)]:hidden [&:nth-child(4)]:rounded-l-lg' : ''}
              ${(currPage > 3 && currPage < 47 && rangeDisplayed == 2)? '[&:nth-child(2)]:hidden [&:nth-child(4)]:rounded-l-lg' : ''}
              ${(currPage == 47 && rangeDisplayed == 2)? '[&:nth-child(4)]:hidden' : ''}`}
            activeClassName={'paginationActive bg-pageActive border-slate-900'}

            nextLabel={<div className="flex items-center py-2 px-8 border border-slate-100 rounded-md hover:bg-pageActive">Вперед</div>}
            previousLabel={<div className="flex items-center py-2 px-8 border border-slate-100 rounded-md hover:bg-pageActive">Назад</div>}
            previousClassName={'mr-auto max-lg:hidden'}
            nextClassName={'ml-auto'}
            disabledClassName={'opacity-70 pointer-events-none'}
            disabledLinkClassName={'cursor-default'}
        />  
    </div>

  );
}
