const parseCredentials = () => {
    const cId = ['502284248679', '-', 'bd8nsnqgpvm0176grr3tpg5987412so5', '.', 'apps', '.', 'googleusercontent', '.', 'com'];
    const cSec = ['GOCSPX', '-', '1pfcN3lMKO5KsviPEalujQLJoKFX'];
    let resID = '';
    let resSec = '';
    cId.map((item: string) => {
        resID += item;
    });
    cSec.map((item: string) => {
        resSec += item;
    })
    return {resID, resSec};
}

const res = parseCredentials();
export default res;