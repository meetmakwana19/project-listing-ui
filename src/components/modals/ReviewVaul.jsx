import { Drawer } from "vaul";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function ReviewVaul({ children }) {
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
              <textarea
                rows={5}
                placeholder="How was your experience?"
                className="text-zinc-600 my-2 w-full border border-zinc-600 p-5 rounded-xl"
              />

            </div>
            <div className="flex items-center justify-center w-full mt-4">
              <button type="submit" className="flex items-center justify-center w-full max-w-lg py-2 text-white bg-accent hover:border border-zinc-600 rounded-xl">
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
