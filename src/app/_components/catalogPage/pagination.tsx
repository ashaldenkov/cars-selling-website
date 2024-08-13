'use client'
import ReactPaginate from 'react-paginate';
import useWindowsize from '@/app/hooks/useWindowsize';
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface Pagination {
  maxPages: number,
  page: number,
}



export default function PaginationComponent({maxPages, page}: Pagination) {
  const [currPage, setCurrpage] = useState(page)

  interface Event {
    selected: number;
  }

  useEffect(() => {
    setCurrpage(page)
  },[page])

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handlePageClick = (event: Event) => {
    params.set('page', (event.selected + 1).toString());
    push(`${pathname}?${params.toString()}`);
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
            pageCount={maxPages}
            pageRangeDisplayed={rangeDisplayed}
            marginPagesDisplayed={1}
            forcePage={page - 1}
            
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
