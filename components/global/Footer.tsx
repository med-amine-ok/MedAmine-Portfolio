import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-4 sm:px-5 py-8 sm:py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-4 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left">
              <h4 className="uppercase text-fun-gray text-xs sm:text-sm font-bold tracking-wider mb-4 sm:mb-5">
                {item.title}
              </h4>
              <div className="space-y-3 sm:space-y-4">
                
                {item.links.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="items-center flex text-fun-gray text-sm hover:text-fun-gray-light transition-colors"
                        >
                          {item.icon && (
                            <span className="pr-2 flex-shrink-0">
                              <Image src={item.icon} width={18} height={18} alt={item.name} />
                            </span>
                          )}
                          <span className="break-words">{item.name}</span>
                        </a>
                      ) : (
                        <Link href={item.link}>
                          <a className="text-fun-gray text-sm hover:text-fun-gray-light transition-colors">
                            {item.name}
                          </a>
                        </Link>
                      )}
                    </div>
                    
                  );
                  
                })}
              </div>
            </div>
          );
        })}
        <div className="pt-6 sm:pt-8 sm:col-span-1 lg:col-span-1 text-fun-gray border-t sm:border-t border-fun-pink-dark lg:border-0 flex flex-col items-start sm:items-center lg:items-start text-left sm:text-center lg:text-left">
        <h4 className="uppercase text-fun-gray text-xs sm:text-sm font-bold tracking-wider">
          Support My Work
        </h4>
        <div className="space-y-2 mt-3 sm:mt-4 w-full flex flex-col items-start sm:items-center lg:items-start">
          <p className="text-fun-gray text-xs leading-relaxed">
            {footer.support.message}
          </p>
        </div>
      </div>
      </div>
      
      <div className="max-w-4xl w-full m-auto mt-8 sm:mt-6 pt-8 sm:pt-6 text-center text-fun-gray border-t border-fun-pink-dark">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-3 uppercase text-xs font-bold tracking-widest">
            <span>Made with</span>
            <div className="flex gap-3 sm:gap-2 items-center justify-center flex-wrap">
              <span className="inline-block">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="22"
                  title="React"
                  alt="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span className="inline-block">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="32"
                  className="invert"
                  title="NextJS"
                  alt="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span className="inline-block">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                  width="48"
                  title="TailwindCSS"
                  alt="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="text-xs leading-relaxed">
            Made by{" "}
            <a
              href="mailto:ouldkhaoua.pro@gmail.com"
              className="text-fun-gray-light font-medium hover:underline transition-all"
            >
              Mohamed Amine Ould Khaoua
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 flex justify-center sm:justify-end">
        <a
          className="inline-flex items-center font-bold text-xs sm:text-sm border border-fun-pink px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-fun-pink cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
          href="https://github.com/med-amine-ok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={14}
            height={14}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
