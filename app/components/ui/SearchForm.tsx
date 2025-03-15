import { IoLocationOutline, IoSearch } from "react-icons/io5";

const SearchForm = () => {
  return (
    <form
      action=""
      className="flex flex-col lg:flex-row lg:items-center justify-between 
      gap-4 bg-background p-5 rounded-3xl  xl:rounded-full     w-5/6  xl:w-1/2 mb-10 "
    >
      <div className="flex flex-row items-center sm:w-full md:w-30 py-3">
        <IoSearch className="mr-3 text-3xl" />
        <input
          type="text"
          placeholder="Search for your favorite cars"
          className="bg-transparent border-b-brandColor focus:outline-none"
        />
      </div>
      <div className="flex flex-row items-center sm:w-full md:w-30 py-3">
        <IoLocationOutline className="mr-3 text-3xl" />
        <select
          name=""
          id=""
          defaultValue="location"
          className="border-none bg-transparent"
        >
          <option value="">florence, Italy</option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <button className="bg-brandColor p-5 rounded-full w-full lg:w-fit text-nowrap ">
        Search cars
      </button>
    </form>
  );
};

export default SearchForm;
