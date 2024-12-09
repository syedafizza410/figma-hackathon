'use client'
import * as React from "react";
import { useState } from "react";

interface FaqFormData {
  name: string;
  subject: string;
  message: string;
}

export default function FaqPage() {
  const [formData, setFormData] = useState<FaqFormData>({
    name: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col w-full max-w-[1171px] mx-auto px-4 mt-12">
        <div className="bg-purple-50 py-11 px-11">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-indigo-900">FAQ</h1>
            <p className="text-sm text-gray-600">
              Home . Pages . <span className="text-pink-500">FAQ</span>
            </p>
          </div>
        </div>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:w-full">
          <div className="flex flex-col items-start mt-20 text-lg font-bold leading-8 text-blue-900">
            <h1 className="text-4xl leading-none text-center">
              General Information
            </h1>
            <div className="mt-16 max-md:mt-10">
              Eu dictumst cum at sed euismood condimentum?
            </div>
            <div className="self-stretch mt-4 text-base text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt sed tristique mollis vitae, consequat gravida
              sagittis.
            </div>
            <div className="mt-16 max-md:mt-10">
              Magna bibendum est fermentum eros.
            </div>
            <div className="self-stretch mt-3.5 text-base text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt sed tristique mollis vitae, consequat gravida
              sagittis.
            </div>
            <div className="mt-16 max-md:mt-10">
              Odio muskana hak eris conseekin sceleton?
            </div>
            <div className="self-stretch mt-4 text-base text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt sed tristique mollis vitae, consequat gravida
              sagittis.
            </div>
            <div className="mt-16 max-md:mt-10">
              Elit id blandit sabara boi velit gua mara?
            </div>
            <div className="self-stretch mt-3.5 text-base text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt sed tristique mollis vitae, consequat gravida
              sagittis.
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-5 w-6/12 mt-20 max-md:ml-0 max-md:w-full mb-20">
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col px-11 py-16 mx-auto w-full bg-slate-50 max-md:px-5"
          >
            <h2 className="self-start text-2xl font-bold leading-none text-center text-blue-900">
              Ask a Question
            </h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name *"
              required
              aria-label="Your Name"
              className="px-2 py-2.5 mt-28 text-base leading-8 bg-white rounded-md border border-gray-300 text-slate-400 max-md:mt-10"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject *"
              required
              aria-label="Subject"
              className="px-2 py-2.5 mt-9 text-base leading-8 bg-white rounded-md border border-gray-300 text-slate-400"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type Your Message *"
              required
              aria-label="Your Message"
              className="px-2 pt-3 pb-40 mt-11 bg-white rounded-md border border-gray-300 text-slate-400 resize-none"
            />
            <button
              type="submit"
              className="self-start px-10 py-2.5 mt-10 text-base font-semibold leading-8 text-white bg-pink-500 rounded hover:bg-pink-600 transition-colors"
              aria-label="Send Mail"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}