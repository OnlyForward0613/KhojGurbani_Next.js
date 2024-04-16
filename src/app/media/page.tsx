import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import SearchMedia from "@/components/pages/media/searchbar";
import SlideRecent from "@/components/pages/media/RecentSlide";
import SlideTrack from '@/components/pages/media/TrackSlide';
import SlideCategory from '@/components/pages/media/CategorySlide';
import SlideRadio from '@/components/pages/media/RadioSlide';
import SlideRagi from '@/components/pages/media/RagiSlide';
import { getData } from "@/utils/fetch_server";


export default async function Home() {
    const machineUUID = uuidv4();
    const featured_categories = await getData("/categories/featured");
    const kirtan_radios = await getData("/radio");
    const featured_tracks = await getData("/media/featured?type=AUDIO");
    const featured_ragis = await getData("/media-authors/featured");
    const recently_played = await getData(`/media/recently-played?machine_id=${machineUUID}&user_id=`);
    const all_ragis = await getData("/media-authors/alphabet-list");

    return (
        <>
            <div className="w-full bg-center bg-cover bg-[url('/images/media/top.png')]">
                <h1 className="mx-auto max-w-6xl px-4 py-[27px] sm:py-16 md:py-20 lg:py-[100px] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white">Media</h1>
            </div>
            <div className="max-w-6xl px-4 mx-auto">
                <SearchMedia allRagis={all_ragis}></SearchMedia>
                <div className="mt-[30px]">
                    <h2 className="text-[26px] font-bold mb-[7px] text-[#252638]">Recently played</h2>
                    <div className="block sm:hidden">
                        <SlideRecent showCount={1} />
                    </div>
                    <div className="hidden sm:block lg:hidden">
                        <SlideRecent showCount={2} />
                    </div>
                    <div className="hidden lg:block">
                        <SlideRecent showCount={3} />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-[26px] font-bold mb-[7px] text-[#252638]">Featured Tracks</h2>
                    <div className="block sm:hidden">
                        <SlideTrack showCount={1} featuredTracks={featured_tracks} />
                    </div>
                    <div className="hidden sm:block lg:hidden">
                        <SlideTrack showCount={2} featuredTracks={featured_tracks} />
                    </div>
                    <div className="hidden lg:block">
                        <SlideTrack showCount={3} featuredTracks={featured_tracks} />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-[26px] font-bold mb-[7px] text-[#252638]">Featured Categories</h2>
                    <div className="block sm:hidden">
                        <SlideCategory showCount={1} featuredCategories={featured_categories} />
                    </div>
                    <div className="hidden sm:block lg:hidden">
                        <SlideCategory showCount={2} featuredCategories={featured_categories} />
                    </div>
                    <div className="hidden lg:block">
                        <SlideCategory showCount={3} featuredCategories={featured_categories} />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-[26px] font-bold mb-[7px] text-[#252638]">Live Kirtan Radio</h2>
                    <div className="block sm:hidden">
                        <SlideRadio showCount={1} radios={kirtan_radios} />
                    </div>
                    <div className="hidden sm:block lg:hidden">
                        <SlideRadio showCount={2} radios={kirtan_radios} />
                    </div>
                    <div className="hidden lg:block">
                        <SlideRadio showCount={3} radios={kirtan_radios} />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-[26px] font-bold mb-[7px] text-[#252638]">Featured Ragi</h2>
                    <div className="block sm:hidden">
                        <SlideRagi showCount={1} featuredRagis={featured_ragis} />
                    </div>
                    <div className="hidden sm:block lg:hidden">
                        <SlideRagi showCount={2} featuredRagis={featured_ragis} />
                    </div>
                    <div className="hidden lg:block xl:hidden">
                        <SlideRagi showCount={4} featuredRagis={featured_ragis} />
                    </div>
                    <div className="hidden xl:block">
                        <SlideRagi showCount={6} featuredRagis={featured_ragis} />
                    </div>
                </div>
                <div className="flex justify-center m-10">
                    <Link
                        href="/media/Ragis"
                        className='mx-auto text-white text-sm bg-blue-primary px-[20px] py-[5px] border border-white rounded-full gap-1'
                    >
                        View All Ragis
                    </Link>
                </div>
            </div>
        </>
    )
}