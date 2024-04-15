
"use client"

import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import { useState } from "react";
import ButtonPlay from "./PlayButton";

export default function MediaTable(props: {
    medias: {
        id: string; title: string; duration: string; Scripture: string; ScriptureRomanEnglish: string;
        page: number; shabad_id: string; attachment_name: string; author_name: string;
    }[];
}) {

    // const { isPlaying, pauseAudio, playAudio } = useAudioPlayer();
    const [mediaIndex, setMediaIndex] = useState<number | null>(null);

    function getFirstFourWords(inputString: string) {
        const words = inputString.split(/\s+/);

        if (words.length > 4) {
            return words.slice(0, 4).join(' ');
        }

        return inputString;
    }

    return (
        <>
            <table className="hidden md:table border-collapse rounded-t-md overflow-hidden w-full mb-4">
                <thead className="bg-[#094457]">
                    <tr className="border border-[#094457]">
                        <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[5%]">#</th>
                        <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[30%]">Title</th>
                        <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[15%]">Duration</th>
                        <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[30%]">Shabad</th>
                        <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[20%]">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.medias.map((
                        item: {
                            id: string; title: string; duration: string; Scripture: string; ScriptureRomanEnglish: string;
                            page: number; shabad_id: string; attachment_name: string; author_name: string;
                        },
                        index: number
                    ) => (
                        <tr key={item.id} className="border border-[#DEE2E6]">
                            <td className="text-[#707070] text-base text-left font-normal px-[15px] py-[12px] align-top">{index + 1}</td>
                            <td
                                className="text-[#707070] text-base text-left font-normal px-[15px] py-[12px] align-top cursor-pointer"
                                // onClick={() => {
                                //     if (mediaIndex === index) {
                                //         if (isPlaying) {
                                //             pauseAudio();
                                //         } else {
                                //             playAudio(item.attachment_name, `${item.author_name} (${item.title})`, item.id);
                                //         }
                                //         return;
                                //     }
                                //     setMediaIndex(index);
                                //     playAudio(item.attachment_name, `${item.author_name} (${item.title})`, item.id);
                                // }}
                            >{item.title}</td>
                            <td className="text-[#707070] text-base text-left font-normal px-[15px] py-[12px] align-top">{item.duration}</td>
                            <td className="px-[15px] py-[12px] align-top">
                                {item.page > 0 && <>
                                    <div className="text-blue-primary text-base text-left font-bold pb-1 leading-normal">
                                        {item.Scripture}
                                    </div>
                                    <div className="text-[#252638] text-sm text-left font-normal leading-normal">
                                        {item.ScriptureRomanEnglish}
                                    </div>
                                    <div className="text-[#707070] text-sm text-left font-normal leading-normal">
                                        Page <span>{item.page}</span> Shabad <span>{item.shabad_id}</span>
                                    </div>
                                </>
                                }
                            </td>
                            <td className="px-[15px] py-[12px] align-top">
                                <button
                                    className="w-9 h-9"
                                    // onClick={() => {
                                    //     if (mediaIndex === index) {
                                    //         if (isPlaying) {
                                    //             pauseAudio();
                                    //         } else {
                                    //             playAudio(item.attachment_name, `${item.author_name} (${item.title})`, item.id);
                                    //         }
                                    //         return;
                                    //     }
                                    //     setMediaIndex(index);
                                    //     playAudio(item.attachment_name, `${item.author_name} (${item.title})`, item.id);
                                    // }}
                                >
                                    {/* <ButtonPlay isPlaying={isPlaying} type={mediaIndex === index} width={36} height={36} /> */}
                                    <ButtonPlay isPlaying={false} type={mediaIndex === index} width={36} height={36} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="hidden sm:block md:hidden">
                {props.medias.map((
                    item: {
                        id: string; title: string; duration: string; attachment_name: string; author_name: string;
                    },
                    index: number
                ) => (
                    <div key={item.id} className="border border-[#DEE2E6] flex flex-col">
                        <div className="text-[#707070] text-sm text-left font-normal px-[15px] py-[5px] align-top">{index + 1}</div>
                        <div className="flex text-[#707070] px-[15px] py-[5px] align-top">
                            <div className="text-sm font-bold w-[40%]">Title</div>
                            <div
                                className="text-sm font-normal w-[60%] cursor-pointer"
                                // onClick={() => {
                                //     if (mediaIndex === index) {
                                //         if (isPlaying) {
                                //             pauseAudio();
                                //         } else {
                                //             playAudio(item.attachment_name, `${item.author_name} (${item.title})`, item.id);
                                //         }
                                //         return;
                                //     }
                                //     setMediaIndex(index);
                                //     playAudio(item.attachment_name, `${item.author_name} (${item.title})`, item.id);
                                // }}
                            >{item.title}</div>
                        </div>
                        <div className="flex text-[#707070] px-[15px] py-[5px] align-top">
                            <div className="text-sm font-bold w-[40%]">Duration</div>
                            <div className="text-sm font-normal w-[60%]">{item.duration}</div>
                        </div>
                        <div className="flex text-[#707070] px-[15px] py-[5px] align-top">
                            <div className="text-sm font-bold w-[40%]">Action</div>
                            <button
                                className=""
                                // onClick={() => {
                                //     if (mediaIndex === index) {
                                //         if (isPlaying) {
                                //             pauseAudio();
                                //         } else {
                                //             playAudio(item.attachment_name, item.title, item.id);
                                //         }
                                //         return;
                                //     }
                                //     setMediaIndex(index);
                                //     playAudio(item.attachment_name, item.title, item.id);
                                // }}
                            >
                                {/* <ButtonPlay isPlaying={isPlaying} type={mediaIndex === index} width={36} height={36} /> */}
                                <ButtonPlay isPlaying={false} type={mediaIndex === index} width={36} height={36} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="sm:hidden">
                {props.medias.map((
                    item: {
                        id: string; title: string; duration: string; attachment_name: string; author_name: string;
                    },
                    index: number
                ) => (
                    <div key={item.id} className="flex text-[#212529] justify-between items-center mb-4">
                        <div className="flex items-baseline">
                            <div className="text-sm mr-4">{index + 1}</div>
                            <div
                                className="text-[15px] mr-2 cursor-pointer"
                                // onClick={() => {
                                //     if (mediaIndex === index) {
                                //         if (isPlaying) {
                                //             pauseAudio();
                                //         } else {
                                //             playAudio(item.attachment_name, `${item.author_name} (${item.title})`, item.id);
                                //         }
                                //         return;
                                //     }
                                //     setMediaIndex(index);
                                //     playAudio(item.attachment_name, `${item.author_name} (${item.title})`, item.id);
                                // }}
                            >{getFirstFourWords(item.title)}
                                <div className="text-[13px] text-[#707070] ml-2 inline-block">{item.duration}</div>
                            </div>
                        </div>
                        <button
                            className=""
                            // onClick={() => {
                            //     if (mediaIndex === index) {
                            //         if (isPlaying) {
                            //             pauseAudio();
                            //         } else {
                            //             playAudio(item.attachment_name, item.title, item.id);
                            //         }
                            //         return;
                            //     }
                            //     setMediaIndex(index);
                            //     playAudio(item.attachment_name, item.title, item.id);
                            // }}
                        >
                            {/* <ButtonPlay isPlaying={isPlaying} type={mediaIndex === index} width={36} height={36} /> */}
                            <ButtonPlay isPlaying={false} type={mediaIndex === index} width={36} height={36} />
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}