import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox.
            <br />
            <br />
            Storing everything for you and your business needs. all in one piece
          </h1>
          <p className="pb-20">
            Collaborate seamlessly and deliver work faster from anywhere with
            Dropbox. Securely store your content, edit PDFs, share videos, sign
            documents and track file engagement—without leaving Dropbox.
          </p>

          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
            autoPlay
            loop
            muted
            className="rounded-lg"
          ></video>
        </div>
      </div>
      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This video video is made for informational and educational only. We do
        not own or affiliate with Dropbox or/and any of its subsidiaries in any
        form. Copyright Disclaimer under section 107 of the Copyright Act 1976,
        allowance is made for &quot;fair use&quot; of this video for educational
        purpose
      </p>
    </main>
  );
}
