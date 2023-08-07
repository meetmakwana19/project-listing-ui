import { Drawer } from "vaul";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useState } from "react";

function ReviewVaul({ children, orgID, proposalUID }) {
  const [formData, setFormData] = useState({
    review: null,
    rating: null,
    organization: orgID,
    developer: localStorage.getItem("isDev"),
  });

  // console.log("review for ", orgID);
  // console.log("review form : ", formData);

  const patchProposal = async (reviewResponse) => {
    // console.log("prop_uid is ", proposalUID);
    const patchBody = {
      reviewed: true,
    };
    const response = await fetch(`${import.meta.env.VITE_API_URL}/proposals/${proposalUID}`, {
      method: "PATCH",
      headers: {
        authorization: localStorage.getItem('authToken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patchBody),
    });
    const fetched = await response.json();
    // console.log("Proposal patched ? ", fetched);
    alert(`${reviewResponse.message} and ${fetched.message}`);
  };
  const postReview = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/reviews`, {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("authToken"),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    // console.log("Review posted ? ", data);
    patchProposal(data);
  };
  const handleSubmit = () => {
    // console.log("Submitting ", formData);
    postReview();
  };
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild className="cursor-pointer">
        {children}
      </Drawer.Trigger>
      <Drawer.Portal className="">
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[989]" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 z-[989]">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-2" />
            <div className="max-w-lg mx-auto">
              <Drawer.Title className="font-medium text-2xl lg:text-2xl mb-4">
                Congrats your proposal is accepted please leave a review for the company.
              </Drawer.Title>
              <div className="rating my-8 justify-around text-3xl md:text-4xl px-4 rating-base w-full text-accent">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <input type="number" className="text-zinc-600 my-2 border border-zinc-600 p-3 w-[35%]  rounded-xl" name="rating" min="0" max="5" step="0.1" onChange={(e) => setFormData({ ...formData, rating: e.target.value })} placeholder="Rate between 0-5" />
              <textarea
                rows={5}
                placeholder="How was your experience?"
                className="text-zinc-600 my-2 w-full border border-zinc-600 p-5 rounded-xl"
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-center w-full mt-4">
              <button type="submit" className="flex items-center justify-center w-full max-w-lg py-2 text-white bg-accent hover:border border-zinc-600 rounded-xl" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
          <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
            <div className="flex gap-6 justify-center max-w-lg mx-auto">
              <p>Thank you for using IdeaBox</p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default ReviewVaul;
