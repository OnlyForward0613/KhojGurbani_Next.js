import Groups from "@/components/pages/media/RagiGroup";
import { getData } from "@/utils/fetch_server";
import Link from "next/link";

const RagiProcess = async () => {
    const all_ragis = await getData("/media-authors/alphabet-list");
    const allRagis = all_ragis.result;
    const cutName = (name: string) => {
        let tmp;
        if (name.startsWith("Ustad") || name.startsWith("Gyani") || name.startsWith("Giani")) {
            tmp = name.substring(6);
        }
        else if (name.startsWith("Bhai") || name.startsWith("Prof") || name.startsWith("Bibi") || name.startsWith("Sant")) {
            tmp = name.substring(5);
        }
        else if (name.startsWith("Dr.") || name.startsWith("Sri")) {
            tmp = name.substring(4);
        }
        else if (name.startsWith("Dr")) {
            tmp = name.substring(3);
        }
        else {
            tmp = name;
        }
        return tmp;
    }
    allRagis.sort((a: { name: string; }, b: { name: string; }) => { return cutName(a.name) < cutName(b.name) });

    
    let orderedRagis: { [key: string]: any[] } = {};
    allRagis.map((item: { name: any; }) => {
        const firstLetter = cutName(item.name).substring(0, 1).toUpperCase();
        orderedRagis[firstLetter] = [...orderedRagis[firstLetter] || [], item];
    })
    
    return orderedRagis;
}

export default async function RagisPage() {
    const allRagis = await RagiProcess();

    return (
        <>
            <div className="w-full bg-center bg-cover bg-[url('/images/media/ragis.jpg')]">
                <h1 className="mx-auto max-w-6xl px-4 py-[27px] sm:py-16 md:py-20 lg:py-[100px] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white">Ragi Directory</h1>
            </div>
            <div className="max-w-6xl px-4 mx-auto">
                <Groups allRagis={allRagis} />
            </div>
        </>
    );
}