import { IoLocationOutline, IoSearch } from "react-icons/io5";

const SearchForm = () => {
  return (
    <form
      action=""
      className="flex flex-col md:flex-row items-center justify-between 
      bg-background p-5 rounded-lg md:rounded-full 
      w-5/6 md:w-1/2 mb-10 "
    >
      <div className="flex flex-row items-center sm:w-full md:w-30">
        <IoSearch className="mr-3 text-3xl" />
        <input
          type="text"
          placeholder="Search for your favorite cars"
          className="bg-transparent border-b-brandColor"
        />
      </div>
      <div className="flex flex-row items-center sm:w-full md:w-30">
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
      <button className="bg-brandColor p-5 rounded-full sm:w-full md:w-80">
        Search cars
      </button>
    </form>
  );
};

export default SearchForm;
