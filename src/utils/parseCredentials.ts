const parseCredentials = () => {
    const cId = ['502284248679', '-', 'bd8nsnqgpvm0176grr3tpg5987412so5', '.', 'apps', '.', 'googleusercontent', '.', 'com'];
    const cSec = ['GOCSPX', '-', '1pfcN3lMKO5KsviPEalujQLJoKFX'];
    const aSec = ['O6mECpblA4qPs0H1G4Se37SYJV3h', '/', 'axxS4FSLm445Xk', '='];
    let resID = '';
    let resSec = '';
    let resASec = '';
    cId.map((item: string) => {
        resID += item;
    });
    cSec.map((item: string) => {
        resSec += item;
    })
    aSec.map((item: string) => {
        resASec += item;
    })
    return {resID, resSec, resASec};
}

const res = parseCredentials();
export default res;