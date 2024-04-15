import MediaTable from "@/components/pages/media/AllRagiTable";
import { getData } from "@/utils/fetch_server";
import Image from "next/image";
import Link from "next/link";

export default async function MediaRagiSubPage({ params: { ragi } }: { params: { ragi: string } }) {

    const ragiMedias = await getData(`/media/featured-artist-gurbani/${ragi}`);
    console.log("ragiMedias: ", ragiMedias)

    function a(str: string) {
        if (str.includes("(")) {
            str.indexOf("(");
            return str.substring(0, str.indexOf("("));
        }
        else { return str; }
    }
    function b(str: string) {
        if (str.includes("(")) {
            str.indexOf("(");
            return str.substring(str.indexOf("("), str.length);
        }
    }

    return (
        <>
            <div className="relative w-full bg-center bg-cover bg-[url('/Images/Home/nitnem.jpg')]">
                <h1
                    className="mx-auto max-w-6xl px-4 py-[27px] sm:py-[45px] md:py-[60px] lg:py-[76px] lg:leading-tight
                text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white"
                >{a(ragiMedias[0].author_name)}<br></br>{b(ragiMedias[0].author_name)}</h1>
                <div className="absolute w-full -bottom-[130px] sm:-bottom-[120px] md:-bottom-[130px] lg:-bottom-[140px]">
                    <div className="flex mx-auto max-w-6xl px-4 justify-center">
                        <div className="backdrop-blur-sm bg-[#1F445720] p-2 rounded-full">
                            <Image
                                src={ragiMedias[0].author_image}
                                width={200}
                                height={200}
                                alt={ragiMedias[0].author_name}
                                className="rounded-full w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl px-4 mx-auto mt-[140px] sm:mt-[130px] md:mt-[140px] lg:mt-[150px]">
                <div className="flex gap-6 flex-col justify-between items-baseline my-6 ">
                    <div className="text-base text-center w-full">
                        {ragiMedias.length} Tracks
                    </div>
                    <div className="text-sm flex flex-wrap">
                        <Link href="/Media" className="hover:text-blue-primary hover:underline text-[#252638] inline">
                            Media
                        </Link>
                        <span className=" text-[#6C757D]">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                        <Link href="/Media/Ragis" className="hover:text-blue-primary hover:underline text-[#252638] inline">
                            Ragi Directory
                        </Link>
                        <span className=" text-[#6C757D] text-[16px]">&nbsp;&nbsp;&gt;&nbsp;&nbsp;{ragiMedias[0].author_name} </span>
                    </div>
                </div>
                <MediaTable medias={ragiMedias} />

            </div>
        </>
    );
}