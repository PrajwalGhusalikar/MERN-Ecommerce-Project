import { Typography, Avatar, Rating } from "@material-tailwind/react";

const productReviewData = [4, 3, 3, 2, 4];

export function ReviewCard() {
  return (
    <>
      {productReviewData.map((reviews) => (
        <div className="px-8 text-center flex items-center my-2 sm:w-[500]">
          <div className="w-40">
            <Avatar
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image"
              size="lg"
            />
            <Typography variant="h6" className="mt-4 w-40">
              Tania Andrew
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
              4 Aug 2023
            </Typography>
          </div>

          <div className="">
            {" "}
            <Rating value={reviews} readonly />{" "}
            <Typography variant="h2" color="blue-gray" className="text-base">
              &quot;This is an excellent product, the documentation is excellent
              and helped me get things done more efficiently.&quot;
            </Typography>{" "}
          </div>
        </div>
      ))}
    </>
  );
}
