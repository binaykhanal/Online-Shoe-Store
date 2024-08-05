import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { blogs } from '../../util/Products';
import { onChangeBlogPerpage, onClickCurrentPage, 
onNavigateNext, onNavigatePrev } from '../../features/BlogRedux';
import { useDeleteBlogMutation, useGetAllBlogsQuery } from '../../services/blogSlice';
import { FiDelete } from 'react-icons/fi';

const BlogPagination = () => {
  const {data}=useGetAllBlogsQuery();
  const [deleteBlog]=useDeleteBlogMutation();
  console.log("blogs:",data);
  const dispatch = useDispatch();
  const { currentPage,blogsPerPage } = useSelector((state) => state.blogslice);

  const handleDel=async(itemById)=>{
    try{
      await deleteBlog({id:itemById});
  }
  catch(error){
    console.log("error is:",error);
  }
  }
  //eg: 20datas/8perPages =2.5 pages
  //afer math.ceil = 3per pages
  // Use nullish coalescing operator(??) to default to 0 if blogs is null or undefined
  const totalPage = Math.ceil((blogs?.length ?? 0) / blogsPerPage); 

  //eg: 3pages + 1 =4pages (0 to 3)pages 
  //after slice(1)=> 1 to 3 pages  //key will simply map numbers
  // Ensure pages is an empty array if totalPage is 0
  const pages = totalPage > 0 ? [...Array(totalPage + 1).keys()].slice(1) : []; 

  //this is for no.of blogs to show in a page
  const lastIndex = currentPage * blogsPerPage;  //eg: 1 x 8 = 8( lastIdx)
  const firstIndex = lastIndex - blogsPerPage;  //eg: 8 - 8 = 0(firstIdx)
  const visibleBlogs = blogs?.slice(firstIndex, lastIndex); //eg:slice(0,8)=> 0-7 items is shown 
  //0 to 7 means: total 8 pages 

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
    <div>
       <h2 className=" text-xl py-5">Recent Posts</h2>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-3.5 mt-2.5 gap-y-5 z-10">
          {visibleBlogs.map((item)=>{
                return(
                  <div key={item.id} className=" shadow-md shadow-gray-300 dark:shadow-neutral-700 py-2 px-2.5 rounded-lg hov relative">
                    <img src={item.image} className=" h-28 md:h-32 lg:h-44 xl:h-52 rounded-xl w-full"/>
                    <FiDelete size={38} className=' text-white absolute top-2 right-2' onClick={()=>handleDel(item.id)}/>
                    <h1 className=" text-xs line-clamp-2 lg:text-lg mt-1.5 dark:text-gray-300">{item.title}</h1>
                    <h2 className=" py-2.5 text-gray-600 font-normal text-xs lg:text-sm">{item.content}</h2>
                    <section className=" flex items-center gap-x-1">
                    <img src={item.icon} alt="user" className=" h-5 lg:h-6"/>
                    <p className=" font-medium text-[10px] lg:text-sm dark:text-gray-400">{item.author}</p>
                    </section>
                    <p className=" font-medium pt-1.5 hover:translate-x-1.5 duration-300 text-sky-500">Read more...</p>
                  </div>
                )
          })}
        </div>

      <div className=" flex gap-x-1 items-center px-3 my-2.5
       w-fit py-1 mx-auto">
        <h1 className=" font-semibold dark:text-gray-300" onClick={handlePrev}>
          PREV
        </h1>
        <section >
        {pages?.map((item) => (
          <button
            key={item}
            className={`text-center px-4 font-poppins cursor-pointer 
            ${ item === currentPage
                ? "bg-violet-600 text-white rounded-full transition scale-95 duration-500 py-2"
                : "text-black dark:text-white"
            }`}
            onClick={() => handleCurrentPage(item)}>
            {item}
          </button>

        ))}
        </section>
        <h1 className=" font-semibold dark:text-gray-300" onClick={handleNext}>
          NEXT
        </h1>
        <select onChange={(event)=>dispatch(onChangeBlogPerpage(event.target.value))} className='font-madimi mx-3 bg-gray-100 dark:bg-neutral-800 border-2 border-violet-500 rounded-lg p-2 text-[16px] dark:text-white' defaultValue={8}>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
      </select>
      </div>
    </div>
  )
}

export default BlogPagination
