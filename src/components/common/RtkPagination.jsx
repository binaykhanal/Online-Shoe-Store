import React from 'react'
import { onChangeBlogPerpage, onClickCurrentPage, onNavigateNext, onNavigatePrev } from '../../features/BlogRedux';
import { useDispatch, useSelector } from 'react-redux';

const RtkPagination = ({data}) => {
  const dispatch=useDispatch();
  const { currentPage,blogsPerPage } = useSelector((state) => state.blogslice);
  const totalPage = Math.ceil((data?.length ?? 0) / blogsPerPage); 
  const pages = totalPage > 0 ? [...Array(totalPage + 1).keys()].slice(1) : []; 

  const handlePrev = () => {
    if (currentPage !== 1) {
      dispatch(onNavigatePrev());
    }
  };
  
  const handleNext = () => {
    if (currentPage !== totalPage) {
      dispatch(onNavigateNext());
    }
  };

  const handleCurrentPage = (item) => {
    dispatch(onClickCurrentPage(item));
  };
  return (
    <div className=" flex gap-x-1 items-center px-3 my-2.5
       w-fit py-1 mx-auto">
        <h1 className=" font-semibold" onClick={handlePrev}>
          PREV
        </h1>
        <section >
        {pages?.map((item) => (
          <button
            key={item}
            className={`text-center px-2 lg:px-4 font-poppins cursor-pointer ${
              item === currentPage
                ? "bg-violet-600 text-white rounded-full transition scale-95 duration-500 py-1 lg:py-2"
                : "text-black"
            }`}
            onClick={() => handleCurrentPage(item)}>
            {item}
          </button>

        ))}
        </section>
        <h1 className=" font-semibold" onClick={handleNext}>
          NEXT
        </h1>
        <select onChange={(event)=>dispatch(onChangeBlogPerpage(event.target.value))} className='font-madimi mx-3 bg-gray-100 border-2 border-violet-500 rounded-lg p-2 text-[16px]' defaultValue={8}>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
      </select>
      </div>
  )
}

export default RtkPagination
