import PostForm from "@/components/forms/PostForm";

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className=" max-5xl flex-start gap-3 w-full justify-start">
          <img
            src="assets/icons/add-post.svg"
            alt="add"
            height={36}
            width={36}
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Create Post</h2>
        </div>

        <PostForm />
      </div>
    </div>
  );
};

export default CreatePost;
