'use client'
import React from "react";
import ReactPaginate from 'react-paginate';


export default function PaginationComponent() {

  return (
    <div>
        <ReactPaginate 
            containerClassName={'flex justify-center w-[720px] font-medium	text-sm'}
            
            breakLabel='...'
            breakLinkClassName={'flex items-center justify-center h-10 border border-slate-100 w-[37px]'}

            pageCount={50}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}

            pageLinkClassName={'h-10 px-3 flex items-center '}
            pageClassName={'border border-slate-100 [&:nth-child(2)]:rounded-l-lg [&:nth-last-child(2)]:rounded-r-lg hover:bg-slate-50'}
            activeClassName={'paginationActive bg-pageActive border-slate-900'}

            nextLabel={<div className="flex items-center py-2 px-8 border border-slate-100 rounded-md hover:bg-slate-50 ">Вперед</div>}
            previousLabel={<div className="flex items-center py-2 px-8 border border-slate-100 rounded-md hover:bg-slate-50">Назад</div>}
            previousClassName={'mr-auto'}
            nextClassName={'ml-auto'}
            disabledClassName={'opacity-70 pointer-events-none'}
            disabledLinkClassName={'cursor-default'}
        />  
    </div>

  );
}
